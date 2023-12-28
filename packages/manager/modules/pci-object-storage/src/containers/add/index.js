import angular from 'angular';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';
import '@ovh-ux/ui-kit';
import 'ovh-api-services';
import 'angular-ui-bootstrap';

import associateUserToContainer from './components/associate-user-to-container';

import component from './add.component';

const moduleName = 'ovhManagerPciStoragesContainersAdd';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'oui',
    'ovh-api-services',
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
    'ui.bootstrap',
    associateUserToContainer,
  ])
  .component('pciProjectStorageContainersAdd', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
