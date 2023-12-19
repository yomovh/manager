import apiClient from '@ovh-ux/manager-core-api';
import { queryClient } from '@ovh-ux/manager-react-core-application';

type Task = unknown;
type IpBlock = unknown;
type Ip = unknown;
type VpsOptionEnum = unknown;

export type DeletevpsServiceBackupftpAccessIpBlockParams = {
  /** The IP Block specific to this ACL */
  ipBlock?: IpBlock;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const deletevpsServiceBackupftpAccessIpBlockQueryKey = (
  params: DeletevpsServiceBackupftpAccessIpBlockParams,
) => [`delete/vps/${params.serviceName}/backupftp/access/${params.ipBlock}`];

/**
 * Backup Ftp ACL for this server and Backup Ftp : Revoke this ACL
 */
export const deletevpsServiceBackupftpAccessIpBlock = async (
  params: DeletevpsServiceBackupftpAccessIpBlockParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.delete(
      `/vps/${params.serviceName}/backupftp/access/${params.ipBlock}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      deletevpsServiceBackupftpAccessIpBlockQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type DeletevpsServiceIpsIpAddressParams = {
  /** The effective ip address of the Ip object */
  ipAddress?: Ip;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const deletevpsServiceIpsIpAddressQueryKey = (
  params: DeletevpsServiceIpsIpAddressParams,
) => [`delete/vps/${params.serviceName}/ips/${params.ipAddress}`];

/**
 * Information about an IP address for a VPS Virtual Machine : Release a given Ip (Additional Ip)
 */
export const deletevpsServiceIpsIpAddress = async (
  params: DeletevpsServiceIpsIpAddressParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.delete(
      `/vps/${params.serviceName}/ips/${params.ipAddress}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      deletevpsServiceIpsIpAddressQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type DeletevpsServiceOptionOptionParams = {
  /** Delete option now, don&#x27;t wait for expiration */
  deleteNow: boolean;
  /** The option name */
  option?: VpsOptionEnum;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const deletevpsServiceOptionOptionQueryKey = (
  params: DeletevpsServiceOptionOptionParams,
) => [`delete/vps/${params.serviceName}/option/${params.option}`];

/**
 * Information about the options of a VPS Virtual Machine : Release a given option
 */
export const deletevpsServiceOptionOption = async (
  params: DeletevpsServiceOptionOptionParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.delete(
      `/vps/${params.serviceName}/option/${params.option}`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      deletevpsServiceOptionOptionQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type DeletevpsServiceSecondaryDnsDomainsDomainParams = {
  /** domain on slave server */
  domain?: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const deletevpsServiceSecondaryDnsDomainsDomainQueryKey = (
  params: DeletevpsServiceSecondaryDnsDomainsDomainParams,
) => [`delete/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}`];

/**
 * Secondary dns infos : remove this domain
 */
export const deletevpsServiceSecondaryDnsDomainsDomain = async (
  params: DeletevpsServiceSecondaryDnsDomainsDomainParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.delete(
      `/vps/${params.serviceName}/secondaryDnsDomains/${params.domain}`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      deletevpsServiceSecondaryDnsDomainsDomainQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type DeletevpsServiceSnapshotParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const deletevpsServiceSnapshotQueryKey = (
  params: DeletevpsServiceSnapshotParams,
) => [`delete/vps/${params.serviceName}/snapshot`];

/**
 * Information about the snapshot of a VPS Virtual Machine : Creates a vps.Task that will delete the Snapshot
 */
export const deletevpsServiceSnapshot = async (
  params: DeletevpsServiceSnapshotParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.delete(
      `/vps/${params.serviceName}/snapshot`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      deletevpsServiceSnapshotQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type DeletevpsServiceVeeamRestoredBackupParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const deletevpsServiceVeeamRestoredBackupQueryKey = (
  params: DeletevpsServiceVeeamRestoredBackupParams,
) => [`delete/vps/${params.serviceName}/veeam/restoredBackup`];

/**
 * Currently restored backup : Creates a VPS.Task that will unmount the backup
 */
export const deletevpsServiceVeeamRestoredBackup = async (
  params: DeletevpsServiceVeeamRestoredBackupParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.delete(
      `/vps/${params.serviceName}/veeam/restoredBackup`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      deletevpsServiceVeeamRestoredBackupQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
