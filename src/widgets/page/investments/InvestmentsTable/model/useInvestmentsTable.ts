'use client';

import { useMemo } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { createColumns } from './createColumns';
// types
import { InvestmentType } from '@/entities/investments/investments.type';

interface Params {
  data: InvestmentType[];
}
export function useInvestmentsTable({ data }: Params) {
  const columns = useMemo(() => createColumns(), []); // 테이블 컬럼
  const tableData = useMemo(() => data, [data]); // 테이블 데이터

  // 테이블 객체
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
}
