'use client';
import { useMemo } from 'react';
import { createColumns } from '../model/createColumns';
// import { useInvestmentsTable } from '../model/useInvestmentsTable';
// components
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { DataTable } from '@/shared/ui/table/DataTable';
// types
import { InvestmentType } from '@/entities/investments/investments.type';
// hooks
import { useDataTable } from '@/shared/lib/tanstack-table/useDataTable';

interface InvestmentsTableProps {
  data: InvestmentType[];
}
export function InvestmentsTable({ data }: InvestmentsTableProps) {
  // const table = useInvestmentsTable({ data });
  const columns = useMemo(() => createColumns(), []); // 테이블 컬럼
  const tableData = useMemo(() => data, [data]); // 테이블 데이터

  // 테이블 객체
  const { table } = useDataTable({ data: tableData, columns });

  return (
    <div className="bg-[#1e242e] border-t border-gray-700">
      <div className="flex gap-2 p-2">
        <Input
          placeholder="키워드로 투자/M&A 검색"
          className="max-w-80 border-none bg-[#303946] placeholder:text-[#939fb2]"
        />
        <Button className="bg-[#66f]">다운로드</Button>
        <Button className="bg-[#485567]">필터</Button>
        <Button className="bg-[#485567] borde">열설정</Button>
      </div>
      <DataTable table={table} columns={table.columns} />
    </div>
  );
}
