import "script-loader!jquery"; // eslint-disable-line
import "script-loader!moment"; // eslint-disable-line
import angular from 'angular';
import 'ovh-api-services';
import '@ovh-ux/ng-ui-router-layout';
import '@ovh-ux/ui-kit/dist/css/oui.css';
import 'ovh-ui-kit-bs/dist/css/oui-bs3.css';

import { get } from 'lodash-es';

import ngOvhCloudUniverseComponents from '@ovh-ux/ng-ovh-cloud-universe-components';
import pciObjectStorage from '@ovh-ux/manager-pci-object-storage';
import ngOvhFeatureFlipping from '@ovh-ux/ng-ovh-feature-flipping';
import ngUiRouterBreadcrumb from '@ovh-ux/ng-ui-router-breadcrumb';
import { registerCoreModule } from '@ovh-ux/manager-core';
import { region } from '@ovh-ux/manager-components';
import { isTopLevelApplication } from '@ovh-ux/manager-config';
import { registerAtInternet } from '@ovh-ux/ng-shell-tracking';
import ovhManagerAtInternetConfiguration from '@ovh-ux/manager-at-internet-configuration';
import ngAtInternet from '@ovh-ux/ng-at-internet';
import ngAtInternetUiRouterPlugin from '@ovh-ux/ng-at-internet-ui-router-plugin';
import filters from '@ovh-ux/manager-filters';

import routing from './pci-object-storage.routing';
import { TRACKING } from './pci-object-storage.constants';

import './pci-object-storage.styles.scss';

const redirection = /* @ngInject */ ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
};

const broadcastAppStarted = /* @ngInject */ ($rootScope, $transitions) => {
  const unregisterHook = $transitions.onSuccess({}, () => {
    $rootScope.$broadcast('app:started');
    unregisterHook();
  });
};

export default async (element, shellClient) => {
  const moduleName = 'ovhManagerPCIObjectStorageApp';

  const [environment, locale] = await Promise.all([
    shellClient.environment.getEnvironment(),
    shellClient.i18n.getLocale(),
  ]);

  angular
    .module(moduleName, [
      ...get(__NG_APP_INJECTIONS__, environment.getRegion(), []),
      'ovh-api-services',
      filters,
      ngOvhCloudUniverseComponents,
      'ngUiRouterLayout',
      pciObjectStorage,
      ngOvhFeatureFlipping,
      ngUiRouterBreadcrumb,
      ovhManagerAtInternetConfiguration,
      ngAtInternet,
      ngAtInternetUiRouterPlugin,
      'oui',
      region,
      registerAtInternet(shellClient.tracking),
      registerCoreModule(environment, {
        onLocaleChange: (lang) => {
          shellClient.i18n.setLocale(lang);
        },
      }),
    ])
    .constant('shellClient', shellClient)
    .config(routing)
    .config(
      /* @ngInject */ ($locationProvider) => {
        $locationProvider.hashPrefix('');
      },
    )
    .config(redirection)
    .config(
      /* @ngInject */ (ssoAuthenticationProvider) => {
        ssoAuthenticationProvider.setOnLogin(() => {
          shellClient.auth.login();
        });
        ssoAuthenticationProvider.setOnLogout(() => {
          shellClient.auth.logout();
        });
      },
    )
    .config(
      /* @ngInject */ (ovhFeatureFlippingProvider) => {
        ovhFeatureFlippingProvider.setApplicationName(
          environment.getApplicationName(),
        );
      },
    )
    .config(
      /* @ngInject */ (ouiCalendarConfigurationProvider) => {
        const [lang] = locale.split('_');
        return import(`flatpickr/dist/l10n/${lang}.js`)
          .then((module) => {
            ouiCalendarConfigurationProvider.setLocale(module.default[lang]);
          })
          .catch(() => {});
      },
    )
    .config(async () => {
      await shellClient.tracking.setConfig(environment.getRegion(), TRACKING);
    })
    .config(
      /* @ngInject */ (atInternetConfigurationProvider) => {
        atInternetConfigurationProvider.setSkipInit(true);
        atInternetConfigurationProvider.setPrefix('');
      },
    )
    .run(
      /* @ngInject */ ($translate) => {
        let lang = $translate.use();

        if (['en_GB', 'es_US', 'fr_CA'].includes(lang)) {
          lang = lang.toLowerCase().replace('_', '-');
        } else {
          [lang] = lang.split('_');
        }

        return import(`script-loader!moment/locale/${lang}.js`)
          .then(() => moment.locale(lang))
          .catch(() => {});
      },
    )
    .run(broadcastAppStarted)
    .run(
      /* @ngInject */ ($transitions) => {
        if (!isTopLevelApplication()) {
          $transitions.onBefore({}, () => {
            shellClient.ux.startProgress();
          });

          $transitions.onSuccess({}, () => {
            shellClient.ux.stopProgress();
          });

          $transitions.onError({}, (transition) => {
            if (!transition.error().redirected) {
              shellClient.ux.stopProgress();
            }
          });
        }
      },
    )
    .run(
      /* @ngInject */ ($rootScope, $transitions) => {
        const unregisterHook = $transitions.onSuccess({}, async () => {
          if (!isTopLevelApplication()) {
            await shellClient.ux.hidePreloader();
          }
          $rootScope.$broadcast('app:started');
          unregisterHook();
        });
      },
    );

  angular.bootstrap(element, [moduleName], {
    strictDi: true,
  });

  return moduleName;
};
