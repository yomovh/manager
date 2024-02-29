import { defineConfig } from 'vite';
import { getBaseConfig } from '@ovh-ux/manager-vite-config';

export default defineConfig(({ command }) => {
  const baseConfig = getBaseConfig();

  if (command === 'serve') {
    return {
      ...baseConfig,
      base: '/app/',
      resolve: {
        ...baseConfig.resolve,
        dedupe: [
          'i18next',
          'react',
          'react-dom',
          'react-i18next',
          'react-router-dom',
          'zustand',
        ],
      },
    };
  }
  return {
    ...baseConfig,
    base: './',
    resolve: {
      ...baseConfig.resolve,
      dedupe: [
        'i18next',
        'react',
        'react-dom',
        'react-i18next',
        'react-router-dom',
        'zustand',
      ],
    },
  };
});
