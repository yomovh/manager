import { queryClient } from '@ovh-ux/manager-react-core-application';
import {
  fetchIcebergV2,
  fetchIcebergV6,
  apiClient,
} from '@ovh-ux/manager-core-api';

type CountryEnum = unknown;
type Datacenters = unknown;
type OvhSubsidiaryEnum = unknown;
type OSChoices = unknown;
type VPSWithIAM = unknown;
type VpsOptionEnum = unknown;
type AutomatedBackup = unknown;
type Attached = unknown;
type Datetime = unknown;
type RestoreStateEnum = unknown;
type Model = unknown;
type BackupFtp = unknown;
type IpBlock = unknown;
type BackupFtpAcl = unknown;
type Datacenter = unknown;
type Disk = unknown;
type VpsTimestampValue = unknown;
type VpsMonitoringPeriodEnum = unknown;
type StatisticTypeEnum = unknown;
type UnitAndValue = unknown;
type Template = unknown;
type Software = unknown;
type Image = unknown;
type GeolocationEnum = unknown;
type Ip = unknown;
type VPS2016to2020 = unknown;
type VPS2018to2020 = unknown;
type VpsStatisticTypeEnum = unknown;
type Option = unknown;
type SecondaryDNS = unknown;
type SecondaryDNSNameServer = unknown;
type Service = unknown;
type Snapshot = unknown;
type DownloadSnapshotURL = unknown;
type VpsMonitoringStatistics = unknown;
type ServiceStatus = unknown;
type TaskStateEnum = unknown;
type TaskTypeEnum = unknown;
type Task = unknown;
type Veeam = unknown;
type RestorePoint = unknown;
type RestoredBackup = unknown;
type VpsBillingVersion = unknown;

export type GetvpsListParams = {
  /** Filter resources on IAM tags */
  iamTags: unknown;
};

export const getvpsListQueryKey = ['get/vps'];

/**
 * Operations about the VPS service : List available services
 */
export const getvpsList = async (
  params: GetvpsListParams,
): Promise<string[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get('/vps', { data: params });
    return response;
  };
  try {
    return queryClient.fetchQuery(getvpsListQueryKey, fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsDatacenterListParams = {
  /** Country targeted */
  country: CountryEnum;
};

export const getvpsDatacenterListQueryKey = ['get/vps/datacenter'];

/**
 *  : List all the datacenters for a specific country
 */
export const getvpsDatacenterList = async (
  params: GetvpsDatacenterListParams,
): Promise<string[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get('/vps/datacenter', {
      data: params,
    });
    return response;
  };
  try {
    return queryClient.fetchQuery(getvpsDatacenterListQueryKey, fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsOrderRuleDatacenterParams = {
  /** VPS OS selection in order api */
  os: string;
  /** Subsidiary to sort datacenters */
  ovhSubsidiary?: OvhSubsidiaryEnum;
  /** VPS plan code from order api */
  planCode?: string;
};

export const getvpsOrderRuleDatacenterQueryKey = [
  'get/vps/order/rule/datacenter',
];

/**
 *  : List datacenters with priority and stock status
 */
export const getvpsOrderRuleDatacenter = async (
  params: GetvpsOrderRuleDatacenterParams,
): Promise<Datacenters> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get('/vps/order/rule/datacenter', {
      data: params,
    });
    return response;
  };
  try {
    return queryClient.fetchQuery(getvpsOrderRuleDatacenterQueryKey, fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsOrderRuleOsChoicesParams = {
  /** VPS datacenter */
  datacenter?: string;
  /** VPS OS selection in order api */
  os?: string;
};

export const getvpsOrderRuleOsChoicesQueryKey = [
  'get/vps/order/rule/osChoices',
];

/**
 *  : List OS choices with status
 */
export const getvpsOrderRuleOsChoices = async (
  params: GetvpsOrderRuleOsChoicesParams,
): Promise<OSChoices> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get('/vps/order/rule/osChoices', {
      data: params,
    });
    return response;
  };
  try {
    return queryClient.fetchQuery(getvpsOrderRuleOsChoicesQueryKey, fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceQueryKey = (params: GetvpsServiceParams) => [
  `get/vps/${params.serviceName}`,
];

/**
 * VPS Virtual Machine : Get this object properties
 */
export const getvpsService = async (
  params: GetvpsServiceParams,
): Promise<VPSWithIAM> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(`/vps/${params.serviceName}`);
    return response;
  };
  try {
    return queryClient.fetchQuery(getvpsServiceQueryKey(params), fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceActiveOptionsListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceActiveOptionsListQueryKey = (
  params: GetvpsServiceActiveOptionsListParams,
) => [`get/vps/${params.serviceName}/activeOptions`];

/**
 * activeOptions operations : Return all active options for the virtual server
 */
export const getvpsServiceActiveOptionsList = async (
  params: GetvpsServiceActiveOptionsListParams,
): Promise<VpsOptionEnum[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/activeOptions`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceActiveOptionsListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceAutomatedBackupParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceAutomatedBackupQueryKey = (
  params: GetvpsServiceAutomatedBackupParams,
) => [`get/vps/${params.serviceName}/automatedBackup`];

/**
 * Backup your VPS : Get this object properties
 */
export const getvpsServiceAutomatedBackup = async (
  params: GetvpsServiceAutomatedBackupParams,
): Promise<AutomatedBackup> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/automatedBackup`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceAutomatedBackupQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceAutomatedBackupAttachedBackupListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceAutomatedBackupAttachedBackupListQueryKey = (
  params: GetvpsServiceAutomatedBackupAttachedBackupListParams,
) => [`get/vps/${params.serviceName}/automatedBackup/attachedBackup`];

/**
 * attachedBackup operations : Backup attached to your VPS
 */
export const getvpsServiceAutomatedBackupAttachedBackupList = async (
  params: GetvpsServiceAutomatedBackupAttachedBackupListParams,
): Promise<Attached[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/automatedBackup/attachedBackup`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceAutomatedBackupAttachedBackupListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceAutomatedBackupRestorePointsListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** The state of the restore point */
  state?: RestoreStateEnum;
};

export const getvpsServiceAutomatedBackupRestorePointsListQueryKey = (
  params: GetvpsServiceAutomatedBackupRestorePointsListParams,
) => [`get/vps/${params.serviceName}/automatedBackup/restorePoints`];

/**
 * restorePoints operations : Get available Restore Points
 */
export const getvpsServiceAutomatedBackupRestorePointsList = async (
  params: GetvpsServiceAutomatedBackupRestorePointsListParams,
): Promise<Datetime[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/automatedBackup/restorePoints`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceAutomatedBackupRestorePointsListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceAvailableUpgradeListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceAvailableUpgradeListQueryKey = (
  params: GetvpsServiceAvailableUpgradeListParams,
) => [`get/vps/${params.serviceName}/availableUpgrade`];

/**
 * availableUpgrade operations : Return all models the virtual server can be upgraded to
 */
export const getvpsServiceAvailableUpgradeList = async (
  params: GetvpsServiceAvailableUpgradeListParams,
): Promise<Model[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/availableUpgrade`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceAvailableUpgradeListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceBackupftpParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceBackupftpQueryKey = (
  params: GetvpsServiceBackupftpParams,
) => [`get/vps/${params.serviceName}/backupftp`];

/**
 * Backup Ftp assigned to this VPS : Get this object properties
 */
export const getvpsServiceBackupftp = async (
  params: GetvpsServiceBackupftpParams,
): Promise<BackupFtp> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/backupftp`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceBackupftpQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceBackupftpAccessListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceBackupftpAccessListQueryKey = (
  params: GetvpsServiceBackupftpAccessListParams,
) => [`get/vps/${params.serviceName}/backupftp/access`];

/**
 * List the dedicated.server.BackupFtpAcl objects : List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
 */
export const getvpsServiceBackupftpAccessList = async (
  params: GetvpsServiceBackupftpAccessListParams,
): Promise<IpBlock[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/backupftp/access`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceBackupftpAccessListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceBackupftpAccessIpBlockParams = {
  /** The IP Block specific to this ACL */
  ipBlock?: IpBlock;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceBackupftpAccessIpBlockQueryKey = (
  params: GetvpsServiceBackupftpAccessIpBlockParams,
) => [`get/vps/${params.serviceName}/backupftp/access/${params.ipBlock}`];

/**
 * Backup Ftp ACL for this server and Backup Ftp : Get this object properties
 */
export const getvpsServiceBackupftpAccessIpBlock = async (
  params: GetvpsServiceBackupftpAccessIpBlockParams,
): Promise<BackupFtpAcl> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/backupftp/access/${params.ipBlock}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceBackupftpAccessIpBlockQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceBackupftpAuthorizableBlocksListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceBackupftpAuthorizableBlocksListQueryKey = (
  params: GetvpsServiceBackupftpAuthorizableBlocksListParams,
) => [`get/vps/${params.serviceName}/backupftp/authorizableBlocks`];

/**
 * authorizableBlocks operations : Get all IP blocks that can be used in the ACL
 */
export const getvpsServiceBackupftpAuthorizableBlocksList = async (
  params: GetvpsServiceBackupftpAuthorizableBlocksListParams,
): Promise<IpBlock[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/backupftp/authorizableBlocks`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceBackupftpAuthorizableBlocksListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDatacenterParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceDatacenterQueryKey = (
  params: GetvpsServiceDatacenterParams,
) => [`get/vps/${params.serviceName}/datacenter`];

/**
 * Information about a datacenter of a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceDatacenter = async (
  params: GetvpsServiceDatacenterParams,
): Promise<Datacenter> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/datacenter`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDatacenterQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDisksListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceDisksListQueryKey = (
  params: GetvpsServiceDisksListParams,
) => [`get/vps/${params.serviceName}/disks`];

/**
 * List the vps.Disk objects : Disks associated to this virtual server
 */
export const getvpsServiceDisksList = async (
  params: GetvpsServiceDisksListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/disks`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDisksListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDisksIdParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceDisksIdQueryKey = (
  params: GetvpsServiceDisksIdParams,
) => [`get/vps/${params.serviceName}/disks/${params.id}`];

/**
 * Information about a disk of a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceDisksId = async (
  params: GetvpsServiceDisksIdParams,
): Promise<Disk> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/disks/${params.id}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDisksIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDisksIdMonitoringParams = {
  /** Id of the object */
  id?: number;
  /** The period the statistics are fetched for */
  period?: VpsMonitoringPeriodEnum;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** The type of statistic to be fetched */
  type?: StatisticTypeEnum;
};

export const getvpsServiceDisksIdMonitoringQueryKey = (
  params: GetvpsServiceDisksIdMonitoringParams,
) => [`get/vps/${params.serviceName}/disks/${params.id}/monitoring`];

/**
 * monitoring operations : Return many statistics about the disk for a given period
 */
export const getvpsServiceDisksIdMonitoring = async (
  params: GetvpsServiceDisksIdMonitoringParams,
): Promise<VpsTimestampValue> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/disks/${params.id}/monitoring`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDisksIdMonitoringQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDisksIdUseParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** The type of statistic to be fetched */
  type?: StatisticTypeEnum;
};

export const getvpsServiceDisksIdUseQueryKey = (
  params: GetvpsServiceDisksIdUseParams,
) => [`get/vps/${params.serviceName}/disks/${params.id}/use`];

/**
 * use operations : Return many statistics about the disk at that time
 */
export const getvpsServiceDisksIdUse = async (
  params: GetvpsServiceDisksIdUseParams,
): Promise<UnitAndValue> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/disks/${params.id}/use`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDisksIdUseQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDistributionParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceDistributionQueryKey = (
  params: GetvpsServiceDistributionParams,
) => [`get/vps/${params.serviceName}/distribution`];

/**
 * Installation template for a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceDistribution = async (
  params: GetvpsServiceDistributionParams,
): Promise<Template> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/distribution`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDistributionQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDistributionSoftwareListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceDistributionSoftwareListQueryKey = (
  params: GetvpsServiceDistributionSoftwareListParams,
) => [`get/vps/${params.serviceName}/distribution/software`];

/**
 * List the vps.Software objects : List available softwares for this template Id
 */
export const getvpsServiceDistributionSoftwareList = async (
  params: GetvpsServiceDistributionSoftwareListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/distribution/software`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDistributionSoftwareListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceDistributionSoftwareSoftwareIdParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
  /**  */
  softwareId?: number;
};

export const getvpsServiceDistributionSoftwareSoftwareIdQueryKey = (
  params: GetvpsServiceDistributionSoftwareSoftwareIdParams,
) => [
  `get/vps/${params.serviceName}/distribution/software/${params.softwareId}`,
];

/**
 * Available softwares on a Template : Get this object properties
 */
export const getvpsServiceDistributionSoftwareSoftwareId = async (
  params: GetvpsServiceDistributionSoftwareSoftwareIdParams,
): Promise<Software> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/distribution/software/${params.softwareId}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceDistributionSoftwareSoftwareIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceImagesAvailableListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceImagesAvailableListQueryKey = (
  params: GetvpsServiceImagesAvailableListParams,
) => [`get/vps/${params.serviceName}/images/available`];

/**
 * List the vps.Image objects : Images available for this virtual server
 */
export const getvpsServiceImagesAvailableList = async (
  params: GetvpsServiceImagesAvailableListParams,
): Promise<string[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/images/available`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceImagesAvailableListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceImagesAvailableIdParams = {
  /** Id of the object */
  id?: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceImagesAvailableIdQueryKey = (
  params: GetvpsServiceImagesAvailableIdParams,
) => [`get/vps/${params.serviceName}/images/available/${params.id}`];

/**
 * Installation image for a VPS : Get this object properties
 */
export const getvpsServiceImagesAvailableId = async (
  params: GetvpsServiceImagesAvailableIdParams,
): Promise<Image> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/images/available/${params.id}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceImagesAvailableIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceImagesCurrentParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceImagesCurrentQueryKey = (
  params: GetvpsServiceImagesCurrentParams,
) => [`get/vps/${params.serviceName}/images/current`];

/**
 * Installation image for a VPS : Get this object properties
 */
export const getvpsServiceImagesCurrent = async (
  params: GetvpsServiceImagesCurrentParams,
): Promise<Image> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/images/current`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceImagesCurrentQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceIpCountryAvailableListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceIpCountryAvailableListQueryKey = (
  params: GetvpsServiceIpCountryAvailableListParams,
) => [`get/vps/${params.serviceName}/ipCountryAvailable`];

/**
 * ipCountryAvailable operations : Get the countries you can select for your IPs geolocation
 */
export const getvpsServiceIpCountryAvailableList = async (
  params: GetvpsServiceIpCountryAvailableListParams,
): Promise<GeolocationEnum[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/ipCountryAvailable`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceIpCountryAvailableListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceIpsListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceIpsListQueryKey = (
  params: GetvpsServiceIpsListParams,
) => [`get/vps/${params.serviceName}/ips`];

/**
 * List the vps.Ip objects : Ips associated to this virtual server
 */
export const getvpsServiceIpsList = async (
  params: GetvpsServiceIpsListParams,
): Promise<Ip[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/ips`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceIpsListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceIpsIpAddressParams = {
  /** The effective ip address of the Ip object */
  ipAddress?: Ip;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceIpsIpAddressQueryKey = (
  params: GetvpsServiceIpsIpAddressParams,
) => [`get/vps/${params.serviceName}/ips/${params.ipAddress}`];

/**
 * Information about an IP address for a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceIpsIpAddress = async (
  params: GetvpsServiceIpsIpAddressParams,
): Promise<Ip> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/ips/${params.ipAddress}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceIpsIpAddressQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceMigration2016Params = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceMigration2016QueryKey = (
  params: GetvpsServiceMigration2016Params,
) => [`get/vps/${params.serviceName}/migration2016`];

/**
 * migration2016 operations : Get information on a possible migration of a VPS 2016 to VPS 2020
 */
export const getvpsServiceMigration2016 = async (
  params: GetvpsServiceMigration2016Params,
): Promise<VPS2016to2020> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/migration2016`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceMigration2016QueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceMigration2018Params = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceMigration2018QueryKey = (
  params: GetvpsServiceMigration2018Params,
) => [`get/vps/${params.serviceName}/migration2018`];

/**
 * migration2018 operations : Get information on a possible migration of a VPS 2016/2018 to VPS 2020
 */
export const getvpsServiceMigration2018 = async (
  params: GetvpsServiceMigration2018Params,
): Promise<VPS2018to2020> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/migration2018`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceMigration2018QueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceModelsListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceModelsListQueryKey = (
  params: GetvpsServiceModelsListParams,
) => [`get/vps/${params.serviceName}/models`];

/**
 * models operations : Return all models for the range of the virtual server
 */
export const getvpsServiceModelsList = async (
  params: GetvpsServiceModelsListParams,
): Promise<Model[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/models`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceModelsListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceMonitoringParams = {
  /** The period the statistics are fetched for */
  period?: VpsMonitoringPeriodEnum;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** The type of statistic to be fetched */
  type?: VpsStatisticTypeEnum;
};

export const getvpsServiceMonitoringQueryKey = (
  params: GetvpsServiceMonitoringParams,
) => [`get/vps/${params.serviceName}/monitoring`];

/**
 * monitoring operations : Return many statistics about the virtual machine for a given period
 */
export const getvpsServiceMonitoring = async (
  params: GetvpsServiceMonitoringParams,
): Promise<VpsTimestampValue> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/monitoring`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceMonitoringQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceOptionListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceOptionListQueryKey = (
  params: GetvpsServiceOptionListParams,
) => [`get/vps/${params.serviceName}/option`];

/**
 * List the vps.Option objects : List of VPS options
 */
export const getvpsServiceOptionList = async (
  params: GetvpsServiceOptionListParams,
): Promise<VpsOptionEnum[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/option`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceOptionListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceOptionOptionParams = {
  /** The option name */
  option?: VpsOptionEnum;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceOptionOptionQueryKey = (
  params: GetvpsServiceOptionOptionParams,
) => [`get/vps/${params.serviceName}/option/${params.option}`];

/**
 * Information about the options of a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceOptionOption = async (
  params: GetvpsServiceOptionOptionParams,
): Promise<Option> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/option/${params.option}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceOptionOptionQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceSecondaryDnsDomainsListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceSecondaryDnsDomainsListQueryKey = (
  params: GetvpsServiceSecondaryDnsDomainsListParams,
) => [`get/vps/${params.serviceName}/secondaryDnsDomains`];

/**
 * List the secondaryDns.SecondaryDNS objects : List of secondary dns domain name
 */
export const getvpsServiceSecondaryDnsDomainsList = async (
  params: GetvpsServiceSecondaryDnsDomainsListParams,
): Promise<string[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/secondaryDnsDomains`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceSecondaryDnsDomainsListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceSecondaryDnsDomainsDomainParams = {
  /** domain on slave server */
  domain?: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceSecondaryDnsDomainsDomainQueryKey = (
  params: GetvpsServiceSecondaryDnsDomainsDomainParams,
) => [`get/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}`];

/**
 * Secondary dns infos : Get this object properties
 */
export const getvpsServiceSecondaryDnsDomainsDomain = async (
  params: GetvpsServiceSecondaryDnsDomainsDomainParams,
): Promise<SecondaryDNS> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceSecondaryDnsDomainsDomainQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceSecondaryDnsDomainsDomainDnsServerParams = {
  /** domain on slave server */
  domain?: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceSecondaryDnsDomainsDomainDnsServerQueryKey = (
  params: GetvpsServiceSecondaryDnsDomainsDomainDnsServerParams,
) => [
  `get/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}/dnsServer`,
];

/**
 * dnsServer operations : domain name server informations
 */
export const getvpsServiceSecondaryDnsDomainsDomainDnsServer = async (
  params: GetvpsServiceSecondaryDnsDomainsDomainDnsServerParams,
): Promise<SecondaryDNSNameServer> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}/dnsServer`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceSecondaryDnsDomainsDomainDnsServerQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceSecondaryDnsNameServerAvailableParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceSecondaryDnsNameServerAvailableQueryKey = (
  params: GetvpsServiceSecondaryDnsNameServerAvailableParams,
) => [`get/vps/${params.serviceName}/secondaryDnsNameServerAvailable`];

/**
 * secondaryDnsNameServerAvailable operations : Secondary nameServer available for your Server
 */
export const getvpsServiceSecondaryDnsNameServerAvailable = async (
  params: GetvpsServiceSecondaryDnsNameServerAvailableParams,
): Promise<SecondaryDNSNameServer> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/secondaryDnsNameServerAvailable`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceSecondaryDnsNameServerAvailableQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceServiceInfosParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceServiceInfosQueryKey = (
  params: GetvpsServiceServiceInfosParams,
) => [`get/vps/${params.serviceName}/serviceInfos`];

/**
 * Details about a Service : Get service information
 */
export const getvpsServiceServiceInfos = async (
  params: GetvpsServiceServiceInfosParams,
): Promise<Service> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/serviceInfos`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceServiceInfosQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceSnapshotParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceSnapshotQueryKey = (
  params: GetvpsServiceSnapshotParams,
) => [`get/vps/${params.serviceName}/snapshot`];

/**
 * Information about the snapshot of a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceSnapshot = async (
  params: GetvpsServiceSnapshotParams,
): Promise<Snapshot> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/snapshot`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceSnapshotQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceSnapshotDownloadParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceSnapshotDownloadQueryKey = (
  params: GetvpsServiceSnapshotDownloadParams,
) => [`get/vps/${params.serviceName}/snapshot/download`];

/**
 * download operations : Download the snapshot
 */
export const getvpsServiceSnapshotDownload = async (
  params: GetvpsServiceSnapshotDownloadParams,
): Promise<DownloadSnapshotURL> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/snapshot/download`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceSnapshotDownloadQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceStatisticsParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceStatisticsQueryKey = (
  params: GetvpsServiceStatisticsParams,
) => [`get/vps/${params.serviceName}/statistics`];

/**
 * statistics operations : Return monitoring statistics about the virtual machine
 */
export const getvpsServiceStatistics = async (
  params: GetvpsServiceStatisticsParams,
): Promise<VpsMonitoringStatistics> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/statistics`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceStatisticsQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceStatusParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceStatusQueryKey = (
  params: GetvpsServiceStatusParams,
) => [`get/vps/${params.serviceName}/status`];

/**
 * status operations : Give the status of the services of the main IP
 */
export const getvpsServiceStatus = async (
  params: GetvpsServiceStatusParams,
): Promise<ServiceStatus> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/status`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceStatusQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceTasksListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** Filter the value of state property (&#x3D;) */
  state: TaskStateEnum;
  /** Filter the value of type property (&#x3D;) */
  type: TaskTypeEnum;
};

export const getvpsServiceTasksListQueryKey = (
  params: GetvpsServiceTasksListParams,
) => [`get/vps/${params.serviceName}/tasks`];

/**
 * List the vps.Task objects : Tasks associated to this virtual server
 */
export const getvpsServiceTasksList = async (
  params: GetvpsServiceTasksListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/tasks`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceTasksListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceTasksIdParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceTasksIdQueryKey = (
  params: GetvpsServiceTasksIdParams,
) => [`get/vps/${params.serviceName}/tasks/${params.id}`];

/**
 * Operation on a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceTasksId = async (
  params: GetvpsServiceTasksIdParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/tasks/${params.id}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceTasksIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceTemplatesListParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceTemplatesListQueryKey = (
  params: GetvpsServiceTemplatesListParams,
) => [`get/vps/${params.serviceName}/templates`];

/**
 * List the vps.Template objects : Templates available for this virtual server
 */
export const getvpsServiceTemplatesList = async (
  params: GetvpsServiceTemplatesListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/templates`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceTemplatesListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceTemplatesIdParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceTemplatesIdQueryKey = (
  params: GetvpsServiceTemplatesIdParams,
) => [`get/vps/${params.serviceName}/templates/${params.id}`];

/**
 * Installation template for a VPS Virtual Machine : Get this object properties
 */
export const getvpsServiceTemplatesId = async (
  params: GetvpsServiceTemplatesIdParams,
): Promise<Template> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/templates/${params.id}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceTemplatesIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceTemplatesIdSoftwareListParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceTemplatesIdSoftwareListQueryKey = (
  params: GetvpsServiceTemplatesIdSoftwareListParams,
) => [`get/vps/${params.serviceName}/templates/${params.id}/software`];

/**
 * List the vps.Software objects : List available softwares for this template Id
 */
export const getvpsServiceTemplatesIdSoftwareList = async (
  params: GetvpsServiceTemplatesIdSoftwareListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/templates/${params.id}/software`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceTemplatesIdSoftwareListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceTemplatesIdSoftwareSoftwareIdParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /**  */
  softwareId?: number;
};

export const getvpsServiceTemplatesIdSoftwareSoftwareIdQueryKey = (
  params: GetvpsServiceTemplatesIdSoftwareSoftwareIdParams,
) => [
  `get/vps/${params.serviceName}/templates/${params.id}/software/${params.softwareId}`,
];

/**
 * Available softwares on a Template : Get this object properties
 */
export const getvpsServiceTemplatesIdSoftwareSoftwareId = async (
  params: GetvpsServiceTemplatesIdSoftwareSoftwareIdParams,
): Promise<Software> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/templates/${params.id}/software/${params.softwareId}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceTemplatesIdSoftwareSoftwareIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceUseParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** The type of statistic to be fetched */
  type?: VpsStatisticTypeEnum;
};

export const getvpsServiceUseQueryKey = (params: GetvpsServiceUseParams) => [
  `get/vps/${params.serviceName}/use`,
];

/**
 * use operations : Return many statistics about the virtual machine at that time
 */
export const getvpsServiceUse = async (
  params: GetvpsServiceUseParams,
): Promise<UnitAndValue> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/use`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(getvpsServiceUseQueryKey(params), fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceVeeamParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceVeeamQueryKey = (
  params: GetvpsServiceVeeamParams,
) => [`get/vps/${params.serviceName}/veeam`];

/**
 * Informations about a VPS Veeam backups : Get this object properties
 */
export const getvpsServiceVeeam = async (
  params: GetvpsServiceVeeamParams,
): Promise<Veeam> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/veeam`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceVeeamQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceVeeamRestorePointsListParams = {
  /** Filter the value of creationTime property (like) */
  creationTime: Datetime;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceVeeamRestorePointsListQueryKey = (
  params: GetvpsServiceVeeamRestorePointsListParams,
) => [`get/vps/${params.serviceName}/veeam/restorePoints`];

/**
 * List the vps.veeam.RestorePoint objects : Veeam restore points for the VPS
 */
export const getvpsServiceVeeamRestorePointsList = async (
  params: GetvpsServiceVeeamRestorePointsListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/veeam/restorePoints`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceVeeamRestorePointsListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceVeeamRestorePointsIdParams = {
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceVeeamRestorePointsIdQueryKey = (
  params: GetvpsServiceVeeamRestorePointsIdParams,
) => [`get/vps/${params.serviceName}/veeam/restorePoints/${params.id}`];

/**
 * Informations about a VPS Veeam restore points : Get this object properties
 */
export const getvpsServiceVeeamRestorePointsId = async (
  params: GetvpsServiceVeeamRestorePointsIdParams,
): Promise<RestorePoint> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/veeam/restorePoints/${params.id}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceVeeamRestorePointsIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceVeeamRestoredBackupParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceVeeamRestoredBackupQueryKey = (
  params: GetvpsServiceVeeamRestoredBackupParams,
) => [`get/vps/${params.serviceName}/veeam/restoredBackup`];

/**
 * Currently restored backup : Get this object properties
 */
export const getvpsServiceVeeamRestoredBackup = async (
  params: GetvpsServiceVeeamRestoredBackupParams,
): Promise<RestoredBackup> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/veeam/restoredBackup`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceVeeamRestoredBackupQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type GetvpsServiceVersionParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const getvpsServiceVersionQueryKey = (
  params: GetvpsServiceVersionParams,
) => [`get/vps/${params.serviceName}/version`];

/**
 * version operations : Get the VPS billing version
 */
export const getvpsServiceVersion = async (
  params: GetvpsServiceVersionParams,
): Promise<VpsBillingVersion> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.get(
      `/vps/${params.serviceName}/version`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      getvpsServiceVersionQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *  Get listing with iceberg V6
 */
export const getListingIcebergV6 = async ({
  pageSize,
  page,
}: {
  pageSize: number;
  page: number;
}) => {
  try {
    const List = await fetchIcebergV6({
      route: '/vps',
      pageSize,
      page,
    }).then(({ data, status, totalCount }) => ({ data, status, totalCount }));
    return List;
  } catch (error) {
    return null;
  }
};

/**
 *  Get listing with iceberg V2
 */

export const getListingIcebergV2 = async ({
  pageSize,
  cursor,
}: {
  pageSize: number;
  cursor?: string;
}) => {
  try {
    const List = await fetchIcebergV2({
      route: '/vps',
      pageSize,
      cursor,
    }).then(({ data, status, cursorNext }) => ({ data, status, cursorNext }));
    return List;
  } catch (error) {
    return null;
  }
};
