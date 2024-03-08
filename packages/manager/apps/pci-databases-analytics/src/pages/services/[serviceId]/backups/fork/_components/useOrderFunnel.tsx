import { useEffect, useState, useMemo } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { database } from '@/models/database';
import {
  Engine,
  Flavor,
  ForkSource,
  NetworkOptionValue,
  Plan,
  Region,
  Version,
} from '@/models/order-funnel';
import { order } from '@/models/catalog';
import { createTree } from '@/lib/availabilitiesHelper';
import { generateName } from '@/lib/nameGenerator';
import { useVrack } from '@/hooks/useVrack';
import { useServiceData } from '../../../layout';

const getSuggestedItemOrDefault = (
  suggestion: database.Suggestion,
  item: 'plan' | 'region' | 'flavor',
  listItems: Plan[] | Region[] | Flavor[],
  currentValue?: string,
) => {
  if (listItems.length === 0) return '';
  const suggestedItem = suggestion[item];
  // return current value is possible, to avoid changing user selection
  if (currentValue && listItems.find((i) => i.name === currentValue)) {
    return currentValue;
  }
  // otherwise, use default, or first
  return listItems.find((i) => i.name === suggestedItem)
    ? suggestedItem
    : listItems[0].name;
};

export function useOrderFunnel(
  availabilities: database.Availability[],
  capabilities: database.Capabilities,
  engineCapabilities: database.EngineCapabilities[],
  regionCapabilities: database.RegionCapabilities[],
  suggestions: database.Suggestion[],
  catalog: order.publicOrder.Catalog,
  backups: database.Backup[],
) {
  const { t } = useTranslation('pci-databases-analytics/services/new');
  const { service } = useServiceData();
  const { projectId } = useParams();

  const canUsePointInTime = !!service.backups?.pitr;
  const minPitrDate = canUsePointInTime ? new Date(service.backups.pitr) : null;
  const orderSchema = z.object({
    forkFrom: z
      .object({
        type: z.enum(['now', 'pit', 'backup']),
        serviceId: z.string().length(36),
        backupId: z.string().optional(),
        pointInTime: z.date().optional(),
      })
      .refine(
        (data) => {
          if (['now', 'pit'].includes(data.type)) return canUsePointInTime;
          return true;
        },
        {
          message: 'Point in time fork is not available for this service',
          path: ['type'],
        },
      )
      .refine(
        (data) => {
          if (data.type === 'pit') {
            if (!data.pointInTime) return false;
            if (minPitrDate && data.pointInTime < minPitrDate) return false;
          }
          return true;
        },
        { message: 'The date is invalid', path: ['pointInTime'] },
      )
      .refine(
        (data) => {
          if (data.type === 'backup') {
            if (!data.backupId) return false;
          }
          return true;
        },
        { message: 'Please select a backup', path: ['backupId'] },
      ),
    engineWithVersion: z.object({
      engine: z.string(),
      version: z.string(),
    }),
    plan: z.string(),
    region: z.string(),
    flavor: z.string(),
    additionalStorage: z.number(),
    nbNodes: z.number(),
    ipRestrictions: z.array(
      z.object({
        ip: z.string(),
        description: z.string(),
      }),
    ),
    network: z
      .object({
        type: z.enum([
          database.NetworkTypeEnum.public,
          database.NetworkTypeEnum.private,
        ]),
        networkId: z.string().optional(),
        subnetId: z.string().optional(),
      })
      .refine(
        (data) => {
          if (data.type === database.NetworkTypeEnum.private) {
            return data.networkId !== undefined && data.subnetId !== undefined;
          }
          return true;
        },
        {
          message: t('errorNetworkFieldMissingId'),
        },
      ),
    name: z.string(),
  });
  const form = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      forkFrom: {
        type: 'backup',
        backupId: '',
        pointInTime: new Date(),
        serviceId: service.id,
      } as ForkSource,
      name: generateName(),
      engineWithVersion: {
        engine: service.engine as string,
        version: service.version,
      },
      plan: service.plan,
      region: service.nodes[0].region,
      flavor: service.flavor,
      nbNodes: service.nodes.length,
      additionalStorage: 0,
      ipRestrictions: service.ipRestrictions.map((ip) => ({
        ip: ip.ip,
        description: ip.description,
      })),
      network: {
        type: service.networkType,
        networkId: service.networkId,
        subnetId: service.subnetId,
      } as NetworkOptionValue,
    },
  });

  const forkFrom = form.watch('forkFrom');
  const name = form.watch('name');
  const engineWithVersion = form.watch('engineWithVersion');
  const plan = form.watch('plan');
  const region = form.watch('region');
  const flavor = form.watch('flavor');
  const nbNodes = form.watch('nbNodes');
  const additionalStorage = form.watch('additionalStorage');
  const ips = form.watch('ipRestrictions');
  const network = form.watch('network');

  const networksData = useVrack(projectId, region, network.networkId);

  const [price, setPrice] = useState({
    hourly: { price: 0, tax: 0 },
    monthly: { price: 0, tax: 0 },
  });

  // Create the list of available engines
  const listEngines = useMemo(
    () =>
      createTree(
        availabilities,
        capabilities,
        engineCapabilities,
        regionCapabilities,
        suggestions,
        catalog,
      ).map((e) => {
        // order the versions in the engines
        e.versions.sort((a, b) => a.order - b.order);
        return e;
      }),
    [availabilities, capabilities],
  );
  // Create the list of available plans
  const listPlans = useMemo(
    () =>
      listEngines
        ?.find((e: Engine) => e.name === engineWithVersion.engine)
        ?.versions.find((v: Version) => v.name === engineWithVersion.version)
        ?.plans.sort((a, b) => a.order - b.order) || [],
    [listEngines, engineWithVersion],
  );
  // Create the list of available regions
  const listRegions = useMemo(
    () =>
      listPlans
        ?.find((p: Plan) => p.name === plan)
        ?.regions.sort((a, b) => a.order - b.order) || [],
    [listPlans, plan],
  );
  // Create the list of available flavors
  const listFlavors = useMemo(
    () =>
      listRegions
        ?.find((r: Region) => r.name === region)
        ?.flavors.sort((a, b) => a.order - b.order) || [],
    [listRegions, region],
  );

  const engineObject: Engine | undefined = useMemo(
    () => listEngines.find((e) => e.name === engineWithVersion.engine),
    [listEngines, engineWithVersion.engine],
  );
  const versionObject: Version | undefined = useMemo(
    () =>
      engineObject?.versions.find((v) => v.name === engineWithVersion.version),
    [engineObject, engineWithVersion.version],
  );
  const planObject: Plan | undefined = useMemo(
    () => listPlans.find((p) => p.name === plan),
    [listPlans, plan],
  );
  const regionObject: Region | undefined = useMemo(
    () => listRegions.find((r) => r.name === region),
    [listRegions, region],
  );
  const flavorObject: Flavor | undefined = useMemo(
    () => listFlavors.find((f) => f.name === flavor),
    [listFlavors, flavor],
  );
  const networkObject = useMemo(
    () => ({
      type: network.type,
      network: networksData.networks.find((n) => n.id === network.networkId),
      subnet: networksData.subnets.find((s) => s.id === network.subnetId),
    }),
    [network, networksData],
  );

  // find the availability corresponding to selected items
  const availability: database.Availability | undefined = useMemo(
    () =>
      availabilities.find(
        (a) =>
          a.engine === engineWithVersion.engine &&
          a.version === engineWithVersion.version &&
          a.plan === plan &&
          a.region === region &&
          a.specifications.flavor === flavor,
      ),
    [availabilities, engineWithVersion, plan, region, flavor],
  );

  // compute pricing when availability, nbNodes and additionalStorage changes
  useEffect(() => {
    if (!availability) return;
    const offerPricing = flavorObject.pricing;
    const newPrice = {
      hourly: {
        price: offerPricing.hourly.price * nbNodes,
        tax: offerPricing.hourly.tax * nbNodes,
      },
      monthly: {
        price: offerPricing.monthly.price * nbNodes,
        tax: offerPricing.monthly.tax * nbNodes,
      },
    };
    if (flavorObject.storage?.pricing) {
      const storageFactor =
        engineObject.storageMode ===
        database.capabilities.engine.storage.StrategyEnum.distributed
          ? 1
          : nbNodes;
      const { pricing: storagePrices } = flavorObject.storage;
      newPrice.hourly.price +=
        additionalStorage * storagePrices.hourly.price * storageFactor;
      newPrice.hourly.tax +=
        additionalStorage * storagePrices.hourly.tax * storageFactor;
      newPrice.monthly.price +=
        additionalStorage * storagePrices.monthly.price * storageFactor;
      newPrice.monthly.tax +=
        additionalStorage * storagePrices.monthly.tax * storageFactor;
    }

    setPrice(newPrice);
  }, [availability, nbNodes, additionalStorage, engineObject]);

  // select an engine and a version when listEngines is changed
  useEffect(() => {
    const engineAndVersion = { engine: '', version: '' };
    const suggestedEngine = suggestions.find((s) => s.default);
    const defaultEngine =
      listEngines.find((e) => e.name === suggestedEngine.engine) ??
      listEngines[0];
    const { defaultVersion } = defaultEngine;
    engineAndVersion.engine = defaultEngine.name;
    engineAndVersion.version = defaultVersion;
    form.setValue('engineWithVersion', engineAndVersion);
  }, [listEngines]);
  // update plan
  useEffect(() => {
    form.setValue(
      'plan',
      getSuggestedItemOrDefault(
        suggestions.find((s) => s.engine === engineWithVersion.engine),
        'plan',
        listPlans,
      ),
    );
  }, [listPlans, suggestions, engineWithVersion.engine]);
  // update nodes when plan changes
  useEffect(() => {
    if (!planObject) return;
    form.setValue('nbNodes', planObject.nodes.minimum);
  }, [plan, listPlans]);
  // update region
  useEffect(() => {
    form.setValue(
      'region',
      getSuggestedItemOrDefault(
        suggestions.find((s) => s.engine === engineWithVersion.engine),
        'region',
        listRegions,
        region,
      ),
    );
  }, [listRegions, suggestions, engineWithVersion.engine, region]);
  // update flavor
  useEffect(() => {
    form.setValue(
      'flavor',
      getSuggestedItemOrDefault(
        suggestions.find((s) => s.engine === engineWithVersion.engine),
        'flavor',
        listFlavors,
        flavor,
      ),
    );
  }, [listFlavors, suggestions, engineWithVersion.engine, flavor]);
  // reset storage when flavor is changed
  useEffect(() => {
    form.setValue('additionalStorage', 0);
  }, [flavor]);

  // upate the network selection when network list changes
  useEffect(() => {
    const newNetworkValues = { ...network };
    newNetworkValues.networkId = networksData.networks[0]?.id ?? undefined;
    form.setValue('network', newNetworkValues);
  }, [networksData.networks]);
  // upadte the sublist selection when subnet list changes
  useEffect(() => {
    const newNetworkValues = { ...network };
    newNetworkValues.subnetId = networksData.subnets[0]?.id ?? undefined;
    form.setValue('network', newNetworkValues);
  }, [networksData.subnets]);
  // set network to public if it is the only value possible
  useEffect(() => {
    if (
      planObject &&
      !planObject.networks.includes(database.NetworkTypeEnum.private)
    ) {
      form.setValue('network', { type: database.NetworkTypeEnum.public });
    }
  }, [planObject]);

  return {
    form,
    queries: {
      networks: networksData.networkQuery,
      subnets: networksData.subnetQuery,
    },
    lists: {
      backups,
      engines: listEngines,
      plans: listPlans,
      regions: listRegions,
      flavors: listFlavors,
      networks: networksData.networks,
      subnets: networksData.subnets,
    },
    result: {
      canUsePit: canUsePointInTime,
      availability,
      price,
      name,
      source: forkFrom,
      backup: backups.find((b) => b.id === forkFrom.backupId),
      engine: engineObject,
      version: versionObject,
      plan: planObject,
      region: regionObject,
      flavor: flavorObject,
      nodes: nbNodes,
      additionalStorage,
      ipRestrictions: ips,
      network: networkObject,
    },
  };
}
