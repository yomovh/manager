import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ShellProvider,
  initShellContext,
} from '@ovh-ux/manager-react-shell-client';
import App from './App.tsx';
import initI18n from './i18n.ts';

import '@/vite-hmr.ts';
import HidePreloader from './core/HidePreloader.tsx';

const init = async (
  appName: string,
  { reloadOnLocaleChange } = { reloadOnLocaleChange: false },
) => {
  const context = await initShellContext(appName);
  const region = context.environment.getRegion();
  try {
    await import(`./config-${region}.js`);
  } catch (error) {
    // nothing to do
  }

  const locales = await context.shell.i18n.getAvailableLocales();

  const i18n = initI18n(
    context.environment.getUserLocale(),
    locales.map(({ key }) => key),
  );

  context.shell.i18n.onLocaleChange(({ locale }: { locale: string }) => {
    if (reloadOnLocaleChange) {
      window.top?.location.reload();
    } else {
      i18n.changeLanguage(locale);
    }
  });

  const body = document.querySelector('body');
  const divContainer = document.createElement('div');
  divContainer.id = 'ovh-app';
  body?.append(divContainer);

  ReactDOM.createRoot(divContainer!).render(
    <React.StrictMode>
      <ShellProvider client={context}>
        <HidePreloader />
        <App />
      </ShellProvider>
    </React.StrictMode>,
  );
};

init('pci-cdb');
