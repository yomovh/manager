import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useResolvedPath } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import Breadcrumb, {
  BreadcrumbHandleParams,
} from '@/components/Breadcrumb/Breadcrumb';
import {
  getvpsService,
  getvpsServiceServiceInfos,
  getvpsServiceQueryKey,
  getvpsServiceServiceInfosQueryKey,
} from '@/api';
import Dashboard from '@/components/layout-helpers/Dashboard/Dashboard';
import Loading from '@/components/Loading/Loading';
import ErrorBanner from '@/components/Error/Error';

export function breadcrumb({ params }: BreadcrumbHandleParams) {
  return params.serviceName;
}

export default function DashboardPage() {
  const { t } = useTranslation('a-vps/dashboard');
  const { serviceName } = useParams();
  const results: any = useQueries({
    queries: [
      {
        queryKey: [getvpsServiceQueryKey({ serviceName })],
        queryFn: () => getvpsService({ serviceName }),
        staleTime: Infinity,
      },
      {
        queryKey: [getvpsServiceServiceInfosQueryKey({ serviceName })],
        queryFn: () => getvpsServiceServiceInfos({ serviceName }),
        staleTime: Infinity,
      },
    ],
  });

  const tabsList = [
    {
      name: 'general_infos',
      title: t('general_informations'),
      to: useResolvedPath('').pathname,
    },
    {
      name: 'custom tab',
      title: 'custom tab',
      to: useResolvedPath('Tabs2').pathname,
    },
  ];

  const { error, isLoading } = results[0];

  if (error) {
    return <ErrorBanner error={error.response} />;
  }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <Dashboard tabs={tabsList} />
      </Suspense>
    </div>
  );
}
