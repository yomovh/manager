import component from './component';
import { GUIDE_URLS } from './constants';
import { PROJECT_PAGE_TRACKING_NAME } from '../project/project.constants';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.updating', {
    url: '/updating/:orderId',
    views: {
      '@pci': component.name,
    },
    resolve: {
      breadcrumb: () => null,

      guideUrl: /* @ngInject */ (me) => GUIDE_URLS[me.ovhSubsidiary],

      pciProjectsHref: /* @ngInject */ ($state) => $state.href('pci.projects'),

      onProjectUpdated: /* @ngInject */ (
        atInternet,
        goToProject,
        $translate,
        projectId,
      ) => (voucher) => {
        atInternet.trackPage({
          name: 'public-cloud::pci::projects::updated',
        });
        return goToProject(projectId, {
          reload: true,
          message: {
            type: 'success',
            content: voucher
              ? $translate.instant(
                  'pci_projects_project_activate_message_with_promotion_success',
                  { amount: voucher.available_credit.text },
                )
              : $translate.instant(
                  'pci_projects_project_activate_message_without_promotion_success',
                ),
          },
        }).then(() => {
          atInternet.trackPage({
            name: `${PROJECT_PAGE_TRACKING_NAME}::activate-project-success`,
            projectId,
            ...(voucher && { voucherCode: voucher.voucher }),
          });
        });
      },

      onProjectUpdateFail: /* @ngInject */ (
        goToError,
        $translate,
        atInternet,
      ) => () =>
        goToError(
          $translate.instant('pci_projects_updating_delivery_error'),
        ).then((result) => {
          atInternet.trackPage({
            name: `${PROJECT_PAGE_TRACKING_NAME}::activate-project-error`,
          });
          return result;
        }),

      onProjectUpdateRefused: /* @ngInject */ (
        goToProject,
        projectId,
        atInternet,
      ) => () =>
        goToProject(projectId, { reload: true }).then((result) => {
          atInternet.trackPage({
            name: `${PROJECT_PAGE_TRACKING_NAME}::activate-project-error`,
          });
          return result;
        }),

      orderId: /* @ngInject */ ($transition$) => $transition$.params().orderId,

      projectId: /* @ngInject */ ($http, orderId) =>
        $http
          .get(`/me/order/${orderId}/details`, {
            headers: {
              Pragma: 'no-cache',
              'X-Pagination-Mode': 'CachedObjectList-Pages',
            },
          })
          .then(
            ({ data: orderDetails }) =>
              orderDetails.map(({ domain }) => domain).filter(Boolean)[0],
          ),
    },
  });
};
