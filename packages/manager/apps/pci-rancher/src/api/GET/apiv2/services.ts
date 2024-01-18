import {
  apiClient,
  fetchIcebergV2,
  IcebergFetchResultV2,
} from '@ovh-ux/manager-core-api';
import { PciProject, RancherService } from '@/api/api.type';

export const getRancherProjectById = async (
  projectId?: string,
): Promise<IcebergFetchResultV2<RancherService>> =>
  fetchIcebergV2<RancherService>({
    route: `/publicCloud/project/${projectId}/rancher`,
  });

export const getProject = async (projectId: string): Promise<PciProject> => {
  const response = await apiClient.v6.get(`/cloud/project/${projectId}`);
  return response.data as PciProject;
};

export const deleteRancherServiceQueryKey = (rancherId: string) => [
  'delete/rancher/resource',
  rancherId,
];

export const deleteRancherService = async ({
  rancherId,
  projectId,
}: {
  rancherId: string;
  projectId: string;
}) => {
  return apiClient.v2.delete(
    `/publicCloud/project/${projectId}/rancher/${rancherId}`,
  );
};

export type GetpublicCloudProjectProjectIdParams = {
  /** Project ID */
  projectId?: string;
};

export const getpublicCloudProjectProjectIdQueryKey = (
  params: GetpublicCloudProjectProjectIdParams,
) => [`get/publicCloud/project/${params.projectId}/rancher`];

export const getpublicCloudReferenceRancherVersionListQueryKey = [
  'get/publicCloud/reference/rancher/version',
];

/**
 *  Get listing with iceberg
 */
export const getListingIceberg = async () => {
  try {
    const List = await fetchIcebergV2({
      route: '/publicCloud/project',
    }).then(({ data, status }: any) => ({ data, status }));
    return List;
  } catch (error) {
    return Promise.reject(error);
  }
};
