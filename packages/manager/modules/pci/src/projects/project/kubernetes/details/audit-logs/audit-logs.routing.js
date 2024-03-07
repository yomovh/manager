export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.project.kubernetes.details.logs', {
    url: '/logs',
    views: {
      kubernetesView: 'pciProjectKubernetesDetailsAuditLogs',
    },
    resolve: {
      breadcrumb: /* @ngInject */ ($translate) =>
        $translate.instant('kube_logs_tab_title'),
      logKindsList: /* @ngInject */ (Kubernetes, projectId) =>
        Kubernetes.getKubeLogKinds(projectId),
      kind: /* @ngInject */ (logKindsList, $state) =>
        $state.params.kind || logKindsList[0].name,
      goToListingPage: /* @ngInject */ ($state, $transition$) => (params) =>
        $state.go('pci.projects.project.kubernetes.details.logs.list', {
          ...$transition$.params(),
          ...params,
        }),
    },
  });
};
