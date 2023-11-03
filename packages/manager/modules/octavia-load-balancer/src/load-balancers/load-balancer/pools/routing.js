import { TRACKING_CHAPTER_1, TRACKING_NAME } from '../constants';
import { TRACKING_SUFFIX } from './constants';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('octavia-load-balancer.loadbalancer.pools', {
    url: '/pools',
    views: {
      loadbalancerView: 'octaviaLoadBalancerPools',
    },
    resolve: {
      breadcrumb: () => 'pools',
      trackBase: () =>
        `${TRACKING_CHAPTER_1}::${TRACKING_NAME}::${TRACKING_SUFFIX}`,
      trackAction: /* @ngInject */ (atInternet, trackBase) => (hit) =>
        atInternet.trackClick({
          name: `${trackBase}::${hit}`,
          type: 'action',
        }),
      trackPage: /* @ngInject */ (atInternet, trackBase) => (hit) =>
        atInternet.trackPage({
          name: `${trackBase}::${hit}`,
        }),
    },
    redirectTo: 'octavia-load-balancer.loadbalancer.pools.list',
  });
};
