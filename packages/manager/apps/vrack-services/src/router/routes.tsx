import React from 'react';
import { RouteObject } from 'react-router-dom';
import { defineCurrentPage } from '@ovh-ux/request-tagger';
import NotFound from '@/pages/404';
import { urls } from './constants';

const lazyRouteConfig = (
  importFn: CallableFunction,
  currentPage = 'bootstrap',
): Partial<RouteObject> => {
  return {
    lazy: async () => {
      const { default: moduleDefault, ...moduleExports } = await importFn();

      return {
        Component: moduleDefault,
        ...moduleExports,
      };
    },
    loader: () => {
      defineCurrentPage(`app.vrack-services.${currentPage}`);
      return null;
    },
  };
};

export const routes: any[] = [
  {
    path: urls.root,
    ...lazyRouteConfig(() => import('@/pages/RootWrapper')),
    children: [
      {
        path: urls.listing,
        ...lazyRouteConfig(() => import('@/pages/listing'), 'listing'),
      },
      {
        path: urls.onboarding,
        ...lazyRouteConfig(() => import('@/pages/onboarding'), 'onboarding'),
      },
      {
        path: urls.createVrackServices,
        ...lazyRouteConfig(() => import('@/pages/create'), 'create'),
      },
      {
        path: urls.dashboard,
        ...lazyRouteConfig(() => import('@/pages/DashboardWrapper')),
        children: [
          {
            path: urls.overview,
            ...lazyRouteConfig(() => import('@/pages/overview'), 'dashboard'),
          },
          {
            path: urls.subnets,
            ...lazyRouteConfig(() => import('@/pages/subnets'), 'subnets'),
          },
          {
            path: urls.createSubnet,
            ...lazyRouteConfig(
              () => import('@/pages/subnets/CreateSubnet'),
              'subnets.create',
            ),
          },
          {
            path: urls.endpoints,
            ...lazyRouteConfig(() => import('@/pages/endpoints'), 'endpoints'),
          },
          {
            path: urls.createEndpoint,
            ...lazyRouteConfig(
              () => import('@/pages/endpoints/CreateEndpoint'),
              'endpoints.create',
            ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
