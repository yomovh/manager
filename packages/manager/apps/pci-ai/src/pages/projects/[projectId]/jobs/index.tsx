import { useEffect, useState } from 'react';
import { useRequiredParams } from '@/hooks/useRequiredParams';
import { useQuery } from '@tanstack/react-query';

import { ai } from '@/models/types';
import { jobsApi } from '@/data/aiapi';
import Onboarding from './_components/onboarding';
import JobsList from './_components/jobsListTable';


export default function JobsPage() {
  const [jobs, setJobs] = useState<ai.job.Job[]>([]);
  const { projectId } = useRequiredParams<{ projectId: string }>();

  const getJobsListQueryKey = ['/jobs', projectId];

  const jobsQuery = useQuery({
    queryKey: getJobsListQueryKey,
    queryFn: () => jobsApi.getJobs(projectId),
    refetchInterval: 30_000, // poll services every 30 sec
  });

  if (jobsQuery.error)
    return <pre>{JSON.stringify(jobsQuery.error)}</pre>;

  useEffect(() => {
    if (!jobsQuery.data) return;
    setJobs(jobsQuery.data);
  });

  if (jobsQuery.isLoading) return <JobsList.Skeleton />;

  const refetch = () => {
    jobsQuery.refetch();
  };

  return (
    <>
      {jobs.length > 0 ? (
        <JobsList
          jobs={jobs}
          projectId={projectId}
          refetchFn={refetch}
        />
      ) : (
        <Onboarding />
      )}
      </>
  );
}
