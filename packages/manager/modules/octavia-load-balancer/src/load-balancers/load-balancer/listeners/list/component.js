import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    listeners: '<',
    goToListenerCreation: '<',
    goToListenerDeletion: '<',
  },
  controller,
  template,
};
