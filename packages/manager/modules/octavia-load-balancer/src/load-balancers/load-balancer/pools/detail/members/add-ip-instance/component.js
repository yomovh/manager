import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    projectId: '<',
    region: '<',
    poolId: '<',
    members: '<',
    goBack: '<',
  },
  controller,
  template,
};
