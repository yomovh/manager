import { useReket } from '@ovh-ux/ovh-reket';
import { useShell } from '@/context';
import { SidebarMenuItem } from '../sidebarMenu';
import apiClient from '@ovh-ux/manager-core-api';

export default function useServiceLoader(appId: string) {
  const reketInstance = useReket();
  const shell = useShell();
  const navigation = shell.getPlugin('navigation');

  return {
    async loadServices(
      path: string,
      subType?: string,
    ): Promise<SidebarMenuItem[]> {
      const services = await reketInstance.get('/service', {
        requestType: 'aapi',
        params: {
          type: path,
          subType,
          external: false,
        },
      });
      return services
        .map((service: any) => ({
          id: `service-${path}-${service.serviceName}`,
          label: service.displayName,
          extraParams: service.extraParams,
          stateParams: service.stateParams || [],
          searchParams: service.searchParams || [],
          href: navigation.getURL(appId, service.url || service.baseUrl || ''),
          parentName: service.parentName,
          serviceName: service.serviceName,
        }))
        .sort((a: SidebarMenuItem, b: SidebarMenuItem) => {
          return a.label?.localeCompare(b.label);
        });
    },
    async loadServicesV2({applicationId, path}: {
      applicationId: string;
      path: string;
    }): Promise<SidebarMenuItem[]> {
      const response = await apiClient.v2.get(path);
      return response.data.map((service: any) => ({
        id: `service-${service.id}`,
        label: service.currentState.displayName || service.id,
        href: navigation.getURL(applicationId || appId, `#/${service.id}`),
        serviceName: service.currentState.displayName || service.id,
      }))
      .sort((a: SidebarMenuItem, b: SidebarMenuItem) => {
        return a.label?.localeCompare(b.label);
      });
    }
  };
}
