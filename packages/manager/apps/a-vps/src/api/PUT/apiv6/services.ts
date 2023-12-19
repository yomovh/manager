import apiClient from '@ovh-ux/manager-core-api';
import { queryClient } from '@ovh-ux/manager-react-core-application';

type VPS = unknown;
type BackupFtpAcl = unknown;
type IpBlock = unknown;
type Disk = unknown;
type Ip = unknown;
type SecondaryDNS = unknown;
type Service = unknown;
type Snapshot = unknown;

export type PutvpsServiceParams = {
  /** New object properties */
  vpsCustom?: VPS;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceQueryKey = (params: PutvpsServiceParams) => [
  `put/vps/${params.serviceName}`,
];

/**
 * VPS Virtual Machine : Alter this object properties
 */
export const putvpsService = async (
  params: PutvpsServiceParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(`/vps/${params.serviceName}`, {
      data: params,
    });
    return response;
  };
  try {
    return queryClient.fetchQuery(putvpsServiceQueryKey(params), fetchData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PutvpsServiceBackupftpAccessIpBlockParams = {
  /** New object properties */
  backupftpaclCustom?: BackupFtpAcl;
  /** The IP Block specific to this ACL */
  ipBlock?: IpBlock;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceBackupftpAccessIpBlockQueryKey = (
  params: PutvpsServiceBackupftpAccessIpBlockParams,
) => [`put/vps/${params.serviceName}/backupftp/access/${params.ipBlock}`];

/**
 * Backup Ftp ACL for this server and Backup Ftp : Alter this object properties
 */
export const putvpsServiceBackupftpAccessIpBlock = async (
  params: PutvpsServiceBackupftpAccessIpBlockParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(
      `/vps/${params.serviceName}/backupftp/access/${params.ipBlock}`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      putvpsServiceBackupftpAccessIpBlockQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PutvpsServiceDisksIdParams = {
  /** New object properties */
  diskCustom?: Disk;
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceDisksIdQueryKey = (
  params: PutvpsServiceDisksIdParams,
) => [`put/vps/${params.serviceName}/disks/${params.id}`];

/**
 * Information about a disk of a VPS Virtual Machine : Alter this object properties
 */
export const putvpsServiceDisksId = async (
  params: PutvpsServiceDisksIdParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(
      `/vps/${params.serviceName}/disks/${params.id}`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      putvpsServiceDisksIdQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PutvpsServiceIpsIpAddressParams = {
  /** New object properties */
  ipCustom?: Ip;
  /** The effective ip address of the Ip object */
  ipAddress?: Ip;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceIpsIpAddressQueryKey = (
  params: PutvpsServiceIpsIpAddressParams,
) => [`put/vps/${params.serviceName}/ips/${params.ipAddress}`];

/**
 * Information about an IP address for a VPS Virtual Machine : Alter this object properties
 */
export const putvpsServiceIpsIpAddress = async (
  params: PutvpsServiceIpsIpAddressParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(
      `/vps/${params.serviceName}/ips/${params.ipAddress}`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      putvpsServiceIpsIpAddressQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PutvpsServiceSecondaryDnsDomainsDomainParams = {
  /** New object properties */
  secondarydnsCustom?: SecondaryDNS;
  /** domain on slave server */
  domain?: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceSecondaryDnsDomainsDomainQueryKey = (
  params: PutvpsServiceSecondaryDnsDomainsDomainParams,
) => [`put/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}`];

/**
 * Secondary dns infos : Alter this object properties
 */
export const putvpsServiceSecondaryDnsDomainsDomain = async (
  params: PutvpsServiceSecondaryDnsDomainsDomainParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(
      `/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      putvpsServiceSecondaryDnsDomainsDomainQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PutvpsServiceServiceInfosParams = {
  /** New object properties */
  serviceCustom?: Service;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceServiceInfosQueryKey = (
  params: PutvpsServiceServiceInfosParams,
) => [`put/vps/${params.serviceName}/serviceInfos`];

/**
 * Details about a Service : Update service information
 */
export const putvpsServiceServiceInfos = async (
  params: PutvpsServiceServiceInfosParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(
      `/vps/${params.serviceName}/serviceInfos`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      putvpsServiceServiceInfosQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PutvpsServiceSnapshotParams = {
  /** New object properties */
  snapshotCustom?: Snapshot;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const putvpsServiceSnapshotQueryKey = (
  params: PutvpsServiceSnapshotParams,
) => [`put/vps/${params.serviceName}/snapshot`];

/**
 * Information about the snapshot of a VPS Virtual Machine : Alter this object properties
 */
export const putvpsServiceSnapshot = async (
  params: PutvpsServiceSnapshotParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.put(
      `/vps/${params.serviceName}/snapshot`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      putvpsServiceSnapshotQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
