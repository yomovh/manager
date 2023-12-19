import apiClient from '@ovh-ux/manager-core-api';
import { queryClient } from '@ovh-ux/manager-react-core-application';

type Task = unknown;
type Datetime = unknown;
type Time = unknown;
type RestoreTypeEnum = unknown;
type IpBlock = unknown;
type AccountId = unknown;
type TerminationFutureUseEnum = unknown;
type TerminationReasonEnum = unknown;
type Vnc = unknown;
type VncProtocolEnum = unknown;
type Ipv4 = unknown;
type ExportTypeEnum = unknown;

export type PostvpsServiceAbortSnapshotParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceAbortSnapshotQueryKey = (
  params: PostvpsServiceAbortSnapshotParams,
) => [`post/vps/${params.serviceName}/abortSnapshot`];

/**
 * abortSnapshot operations : Abort ongoing snapshot or autobackup
 */
export const postvpsServiceAbortSnapshot = async (
  params: PostvpsServiceAbortSnapshotParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/abortSnapshot`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceAbortSnapshotQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceAutomatedBackupDetachBackupParams = {
  /** restorePoint fetched in /vps/{serviceName}/automatedBackup/attachedBackup */
  restorePoint?: Datetime;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceAutomatedBackupDetachBackupQueryKey = (
  params: PostvpsServiceAutomatedBackupDetachBackupParams,
) => [`post/vps/${params.serviceName}/automatedBackup/detachBackup`];

/**
 * detachBackup operations : Create a VPS.Task that will umount a restored backup on your VPS
 */
export const postvpsServiceAutomatedBackupDetachBackup = async (
  params: PostvpsServiceAutomatedBackupDetachBackupParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/automatedBackup/detachBackup`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceAutomatedBackupDetachBackupQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceAutomatedBackupRescheduleParams = {
  /** New scheduled time of your daily backup */
  schedule?: Time;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceAutomatedBackupRescheduleQueryKey = (
  params: PostvpsServiceAutomatedBackupRescheduleParams,
) => [`post/vps/${params.serviceName}/automatedBackup/reschedule`];

/**
 * reschedule operations : Change the scheduled time of your daily backup
 */
export const postvpsServiceAutomatedBackupReschedule = async (
  params: PostvpsServiceAutomatedBackupRescheduleParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/automatedBackup/reschedule`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceAutomatedBackupRescheduleQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceAutomatedBackupRestoreParams = {
  /** Only with restore full on VPS Cloud 2014 */
  changePassword: boolean;
  /** Restore Point fetched in /automatedBackup/restorePoints */
  restorePoint?: Datetime;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** file: Attach/export restored disk to your current VPS - full: Replace your current VPS by the given restorePoint */
  type?: RestoreTypeEnum;
};

export const postvpsServiceAutomatedBackupRestoreQueryKey = (
  params: PostvpsServiceAutomatedBackupRestoreParams,
) => [`post/vps/${params.serviceName}/automatedBackup/restore`];

/**
 * restore operations : Creates a VPS.Task that will restore the given restorePoint
 */
export const postvpsServiceAutomatedBackupRestore = async (
  params: PostvpsServiceAutomatedBackupRestoreParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/automatedBackup/restore`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceAutomatedBackupRestoreQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceBackupftpAccessParams = {
  /** Whether to allow the CIFS (SMB) protocol for this ACL */
  cifs?: boolean;
  /** Whether to allow the FTP protocol for this ACL */
  ftp: boolean;
  /** The IP Block specific to this ACL. It musts belong to your server. */
  ipBlock?: IpBlock;
  /** Whether to allow the NFS protocol for this ACL */
  nfs?: boolean;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceBackupftpAccessQueryKey = (
  params: PostvpsServiceBackupftpAccessParams,
) => [`post/vps/${params.serviceName}/backupftp/access`];

/**
 * List the dedicated.server.BackupFtpAcl objects : Create a new Backup FTP ACL
 */
export const postvpsServiceBackupftpAccess = async (
  params: PostvpsServiceBackupftpAccessParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/backupftp/access`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceBackupftpAccessQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceBackupftpPasswordParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceBackupftpPasswordQueryKey = (
  params: PostvpsServiceBackupftpPasswordParams,
) => [`post/vps/${params.serviceName}/backupftp/password`];

/**
 * password operations : Change your Backup FTP password
 */
export const postvpsServiceBackupftpPassword = async (
  params: PostvpsServiceBackupftpPasswordParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/backupftp/password`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceBackupftpPasswordQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceChangeContactListParams = {
  /** The contact to set as admin contact */
  contactAdmin: AccountId;
  /** The contact to set as billing contact */
  contactBilling: AccountId;
  /** The contact to set as tech contact */
  contactTech: AccountId;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceChangeContactListQueryKey = (
  params: PostvpsServiceChangeContactListParams,
) => [`post/vps/${params.serviceName}/changeContact`];

/**
 * Change the contacts of this service : Launch a contact change procedure
 */
export const postvpsServiceChangeContactList = async (
  params: PostvpsServiceChangeContactListParams,
): Promise<number[]> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/changeContact`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceChangeContactListQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceConfirmTerminationParams = {
  /** Commentary about your termination request */
  commentary: string;
  /** What next after your termination request */
  futureUse: TerminationFutureUseEnum;
  /** Reason of your termination request */
  reason: TerminationReasonEnum;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** The termination token sent by email to the admin contact */
  token?: string;
};

export const postvpsServiceConfirmTerminationQueryKey = (
  params: PostvpsServiceConfirmTerminationParams,
) => [`post/vps/${params.serviceName}/confirmTermination`];

/**
 * Confirm service termination : Confirm service termination
 */
export const postvpsServiceConfirmTermination = async (
  params: PostvpsServiceConfirmTerminationParams,
): Promise<string> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/confirmTermination`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceConfirmTerminationQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceCreateSnapshotParams = {
  /** A textual description for your snapshot */
  description: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceCreateSnapshotQueryKey = (
  params: PostvpsServiceCreateSnapshotParams,
) => [`post/vps/${params.serviceName}/createSnapshot`];

/**
 * createSnapshot operations : Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot
 */
export const postvpsServiceCreateSnapshot = async (
  params: PostvpsServiceCreateSnapshotParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/createSnapshot`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceCreateSnapshotQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceGetConsoleUrlParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceGetConsoleUrlQueryKey = (
  params: PostvpsServiceGetConsoleUrlParams,
) => [`post/vps/${params.serviceName}/getConsoleUrl`];

/**
 * getConsoleUrl operations : Return the VPS console URL
 */
export const postvpsServiceGetConsoleUrl = async (
  params: PostvpsServiceGetConsoleUrlParams,
): Promise<string> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/getConsoleUrl`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceGetConsoleUrlQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceMigration2016Params = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceMigration2016QueryKey = (
  params: PostvpsServiceMigration2016Params,
) => [`post/vps/${params.serviceName}/migration2016`];

/**
 * migration2016 operations : Schedule the migration of a VPS 2016 to VPS 2020
 */
export const postvpsServiceMigration2016 = async (
  params: PostvpsServiceMigration2016Params,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/migration2016`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceMigration2016QueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceMigration2018Params = {
  /** Choosen plan for migration */
  newPlan?: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceMigration2018QueryKey = (
  params: PostvpsServiceMigration2018Params,
) => [`post/vps/${params.serviceName}/migration2018`];

/**
 * migration2018 operations : Schedule the migration of a VPS 2016/2018 to VPS 2020
 */
export const postvpsServiceMigration2018 = async (
  params: PostvpsServiceMigration2018Params,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/migration2018`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceMigration2018QueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceOpenConsoleAccessParams = {
  /** The console protocol you want */
  protocol: VncProtocolEnum;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceOpenConsoleAccessQueryKey = (
  params: PostvpsServiceOpenConsoleAccessParams,
) => [`post/vps/${params.serviceName}/openConsoleAccess`];

/**
 * openConsoleAccess operations : Return the necessary informations to open a VNC connection to your VPS
 */
export const postvpsServiceOpenConsoleAccess = async (
  params: PostvpsServiceOpenConsoleAccessParams,
): Promise<Vnc> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/openConsoleAccess`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceOpenConsoleAccessQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceRebootParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceRebootQueryKey = (
  params: PostvpsServiceRebootParams,
) => [`post/vps/${params.serviceName}/reboot`];

/**
 * reboot operations : Request a reboot of the machine
 */
export const postvpsServiceReboot = async (
  params: PostvpsServiceRebootParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/reboot`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceRebootQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceRebuildParams = {
  /** If asked, the installation password will NOT be sent (only if sshKey defined) */
  doNotSendPassword: boolean;
  /** Id of the vps.Image fetched in /images list */
  imageId?: string;
  /** If asked, RTM will be installed on your VPS */
  installRTM: boolean;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** SSH key name to pre-install on your VPS (name from /me/sshKey) */
  sshKey: string;
};

export const postvpsServiceRebuildQueryKey = (
  params: PostvpsServiceRebuildParams,
) => [`post/vps/${params.serviceName}/rebuild`];

/**
 * rebuild operations : Reinstall the virtual server
 */
export const postvpsServiceRebuild = async (
  params: PostvpsServiceRebuildParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/rebuild`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceRebuildQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceReinstallParams = {
  /** If asked, the installation password will NOT be sent (only if sshKey defined) */
  doNotSendPassword: boolean;
  /** Distribution language. default : en */
  language: string;
  /** The internal name of your VPS offer */
  serviceName?: string;
  /** Id of the vps.Software type fetched in /template/{id}/software */
  softwareId: number[];
  /** SSH key names to pre-install on your VPS (name from /me/sshKey) */
  sshKey: string[];
  /** Id of the vps.Template fetched in /templates list */
  templateId?: number;
};

export const postvpsServiceReinstallQueryKey = (
  params: PostvpsServiceReinstallParams,
) => [`post/vps/${params.serviceName}/reinstall`];

/**
 * reinstall operations : Reinstall the virtual server
 */
export const postvpsServiceReinstall = async (
  params: PostvpsServiceReinstallParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/reinstall`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceReinstallQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceSecondaryDnsDomainsParams = {
  /** The domain to add */
  domain?: string;
  /**  */
  ip: Ipv4;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceSecondaryDnsDomainsQueryKey = (
  params: PostvpsServiceSecondaryDnsDomainsParams,
) => [`post/vps/${params.serviceName}/secondaryDnsDomains`];

/**
 * List the secondaryDns.SecondaryDNS objects : add a domain on secondary dns
 */
export const postvpsServiceSecondaryDnsDomains = async (
  params: PostvpsServiceSecondaryDnsDomainsParams,
): Promise<undefined> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/secondaryDnsDomains`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceSecondaryDnsDomainsQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceSetPasswordParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceSetPasswordQueryKey = (
  params: PostvpsServiceSetPasswordParams,
) => [`post/vps/${params.serviceName}/setPassword`];

/**
 * setPassword operations : Start the process in order to set the root password of the virtual machine
 */
export const postvpsServiceSetPassword = async (
  params: PostvpsServiceSetPasswordParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/setPassword`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceSetPasswordQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceSnapshotRevertParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceSnapshotRevertQueryKey = (
  params: PostvpsServiceSnapshotRevertParams,
) => [`post/vps/${params.serviceName}/snapshot/revert`];

/**
 * revert operations : Revert the Virtual Server to this snapshot
 */
export const postvpsServiceSnapshotRevert = async (
  params: PostvpsServiceSnapshotRevertParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/snapshot/revert`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceSnapshotRevertQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceStartParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceStartQueryKey = (
  params: PostvpsServiceStartParams,
) => [`post/vps/${params.serviceName}/start`];

/**
 * start operations : Request the machine to start
 */
export const postvpsServiceStart = async (
  params: PostvpsServiceStartParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/start`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceStartQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceStopParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceStopQueryKey = (
  params: PostvpsServiceStopParams,
) => [`post/vps/${params.serviceName}/stop`];

/**
 * stop operations : Request the machine to stop
 */
export const postvpsServiceStop = async (
  params: PostvpsServiceStopParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/stop`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceStopQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceTerminateParams = {
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceTerminateQueryKey = (
  params: PostvpsServiceTerminateParams,
) => [`post/vps/${params.serviceName}/terminate`];

/**
 * Ask for the termination of your service. Admin contact of this service will receive a termination token in order to confirm its termination with /confirmTermination endpoint. : Ask for the termination of your service
 */
export const postvpsServiceTerminate = async (
  params: PostvpsServiceTerminateParams,
): Promise<string> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/terminate`,
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceTerminateQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export type PostvpsServiceVeeamRestorePointsIdRestoreParams = {
  /** (Full only) Change the restored VPS root password when done */
  changePassword: boolean;
  /** (Except full) The export method for your restore - defaults to both */
  export: ExportTypeEnum;
  /** Replace your current VPS by the restorePoint */
  full?: boolean;
  /** Id of the object */
  id?: number;
  /** The internal name of your VPS offer */
  serviceName?: string;
};

export const postvpsServiceVeeamRestorePointsIdRestoreQueryKey = (
  params: PostvpsServiceVeeamRestorePointsIdRestoreParams,
) => [
  `post/vps/${params.serviceName}/veeam/restorePoints/${params.id}/restore`,
];

/**
 * restore operations : Creates a VPS.Task that will restore the given restorePoint
 */
export const postvpsServiceVeeamRestorePointsIdRestore = async (
  params: PostvpsServiceVeeamRestorePointsIdRestoreParams,
): Promise<Task> => {
  const fetchData = async () => {
    const response: any = await apiClient.v6.post(
      `/vps/${params.serviceName}/veeam/restorePoints/${params.id}/restore`,
      { data: params },
    );
    return response;
  };
  try {
    return queryClient.fetchQuery(
      postvpsServiceVeeamRestorePointsIdRestoreQueryKey(params),
      fetchData,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
