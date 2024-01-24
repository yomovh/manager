import angular from 'angular';

import component from './component';
import routing from './routing';
import service from './service';

import list from './list';
import create from './create';
import edit from './edit';

const moduleName = 'ovhManagerOctaviaLoadBalancerL7';

angular
  .module(moduleName, [list, create, edit])
  .config(routing)
  .component('octaviaLoadBalancerL7', component)
  .service('OctaviaLoadBalancerL7Service', service);

export default moduleName;
