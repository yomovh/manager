import React, { useState, useMemo, useEffect, } from 'react';
import { Navigate } from 'react-router-dom';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { OsdsButton, OsdsPagination } from '@ovhcloud/ods-components/react';
import {
  ODS_BUTTON_VARIANT,
  OdsSelectValueChangeEvent,
} from '@ovhcloud/ods-components';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { getListingIamIceberg, getListingV6Iceberg } from '@/api';
import TanstackTable from '../listing/TanstackTable';
// import DatagridWrapper from '@/components/layout-helpers/Listing/DatagridWrapper';

import Breadcrumb, {
  BreadcrumbHandleParams,
} from '@/components/Breadcrumb/Breadcrumb';

export function breadcrumb({ params }: BreadcrumbHandleParams) {
  return params.serviceName;
}

interface IamResources {
  displayName: string;
  id: string;
  name: string;
  owner: string;
  type: string;
  urn: string;
}

function Listing() {
  const [pageSize] = useState(10);

  const columns: ColumnDef<IamResources>[] = useMemo(
    () => [
      {
        header: 'Id',
        accessorKey: 'id',
      },
      {
        header: 'Display Name',
        accessorKey: 'displayName',
      },
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Owner',
        accessorKey: 'owner',
      },
      {
        header: 'Type',
        accessorKey: 'type',
      },
      {
        header: 'Urn',
        accessorKey: 'urn',
      },
    ],
    [],
  );

  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isLoading,
    error,
    isFetching,
  }: any = useInfiniteQuery({
    initialPageParam: null,
    queryKey: [`servicesListingIceberg`],
    queryFn: ({ pageParam }) => {
      console.info('pageParam : ', pageParam);
      return getListingIamIceberg({ pageSize, cursor: pageParam });
    },
    staleTime: Infinity,
    getNextPageParam: (lastPage: any) => lastPage.cursorNext as any,
  });

  const flattenData = React.useMemo(
    () => data?.pages.map((page: any) => page.data).flat() ?? [],
    [data],
  );
  const totalDBRowCount = data?.pages?.[0]?.data?.length ?? 0;
  const totalFetched = flattenData.length;

  const table = useReactTable({
    columns,
    data: flattenData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
    debugTable: true,
  });

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      // if (containerRefElement) {
      //   const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
      //   //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
      //   // if (
      //   //   scrollHeight - scrollTop - clientHeight < 300 &&
      //   //   !isFetching &&
      //   //   totalFetched < totalDBRowCount
      //   // ) {
      //   if (!isFetching && totalFetched <= totalDBRowCount) {
      //     console.info('FETCH CA !!!');
      //     const test = fetchNextPage();
      //     test.then((response: any) => console.info('response : ', response));
      //     console.info('test : ', test);
      //   }
      // }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount],
  );

  return (
    <div>
      <h1>Tanstack virtual scroll</h1>
      <div>
        <div
          ref={tableContainerRef}
          onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
          style={{
            overflow: 'auto', //our scrollable table container
            position: 'relative', //needed for sticky header
            height: '600px', //should be a fixed height
          }}
        >
          <TanstackTable table={table} dato={flattenData} />
        </div>
      </div>
    </div>
  );
}

function ListingPagination() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sorting, setSorting] = useState<SortingState>([]);
  const { data, isError, error, isLoading, status } = useQuery({
    queryKey: [`api-pagination-v6-${page}`],
    queryFn: () => getListingV6Iceberg({ page, pageSize }),
  });

  console.info('ListingPagination data : ', data);
  const columns: ColumnDef<IamResources>[] = useMemo(
    () => [
      {
        header: 'Dispay Name',
        accessorKey: 'displayName',
      },
      {
        header: 'Memory Limit',
        accessorKey: 'memoryLimit',
      },
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Netboot Mode',
        accessorKey: 'netbootMode',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
      {
        header: 'Zone',
        accessorKey: 'zone',
      },
    ],
    [],
  );
  const dato = useMemo(() => data?.data ?? [], [data]);
  console.info('datoo : ', dato);

  const table = useReactTable({
    columns,
    data: dato,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [res, setRes] = useState([]);

  const onOdsPageSizeChange = (event: OdsSelectValueChangeEvent) => {
    if (event?.detail?.value) {
      const newPageSize = Number(event.detail.value);
      setPageSize(newPageSize);
      setTotalPages(Math.ceil(data.totalCount / newPageSize));
      setPage(1);
    }
  };

  useEffect(() => {
    if (status === 'success' && data?.data) {
      if (totalPages === 0) {
        console.info('data alex : ', data);
        setTotalPages(Math.ceil(data.totalCount / pageSize));
      }
      setTotalCount(data.totalCount)
      setRes(data?.data);
    }
  }, [data?.data]);

  console.info('totalPages : ', totalPages);
  return (
    <div>
      <h1>Tanstack listing pagination</h1>
      <div>
        <TanstackTable table={table} dato={dato} fullWidth={true} />
      </div>
      <div className="flex justify-end items-center mt-4">
        {totalPages > 1 && (
          <OsdsPagination
            current={page}
            id="main-pagination"
            totalPages={totalPages}
            totalItems={totalCount}
            onOdsPaginationChanged={onOdsPageSizeChange}
            onClick={(event: any) => setPage(event.target.current)}
          />
        )}
      </div>
    </div>
  );
}

function TableIam() {
  return (
    <div>
      <div>
        <Listing />
      </div>
      <br />
      <br />
      <br />
      <div>
        <ListingPagination />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default TableIam;
