import template from './load-balancers.html';

export default {
  bindings: {
    resources: '<',
    goToCreatePage: '<',
    goToDashboardPage: '<',
    goToDeleteLoadBalancer: '<',
  },
  template,
};
