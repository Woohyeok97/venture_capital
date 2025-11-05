'use client';
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
// components
import { Info } from 'lucide-react';
import { Checkbox } from '@/shared/ui/checkbox/checkbox';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
// hooks
import useDataTable from '@/shared/lib/tanstack-table/hooks/useDataTable';

const MOCK = [
  {
    investmentDate: '2025-01-01',
    investmentAmount: 100000000,
    investmentStep: 'Seed',
    investmentType: '투자',
    investmentTarget: '삼성전자',
  },
  {
    investmentDate: '2025-02-01',
    investmentAmount: 300000000,
    investmentStep: 'Pre-A',
    investmentType: '인수합병',
    investmentTarget: 'LG전자',
  },
  {
    investmentDate: '2025-03-01',
    investmentAmount: 500000000,
    investmentStep: 'Series A',
    investmentType: '투자',
    investmentTarget: 'SK하이닉스',
  },
  {
    investmentDate: '2025-04-01',
    investmentAmount: 700000000,
    investmentStep: 'M&A',
    investmentType: '인수합병',
    investmentTarget: '현대차',
  },
];

export default function InvestmentsPage() {
  // 테이블 컬럼
  const columns = useMemo(
    (): ColumnDef<any>[] => [
      {
        id: 'select',
        size: 30,
        header: ({ table }) => (
          <Checkbox
            className="w-4 h-4"
            checked={table.getIsAllRowsSelected()}
            onCheckedChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            className="w-4 h-4"
            checked={row.getIsSelected()}
            onCheckedChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        header: '투자날짜',
        accessorKey: 'investmentDate',
      },
      {
        header: '투자금액',
        accessorKey: 'investmentAmount',
      },
      {
        header: '투자단계',
        accessorKey: 'investmentStep',
      },
      {
        header: '투자종류',
        accessorKey: 'investmentType',
      },
      {
        header: '투자대상',
        accessorKey: 'investmentTarget',
      },
    ],
    [],
  );
  // 테이블 데이터
  const rows = useMemo(() => MOCK, []);

  // 테이블 컴포넌트
  const { DataTable } = useDataTable({ data: rows, columns });

  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-bold">투자/M&A 탐색</h1>
          <Info size={16} className="text-[#939fb2] cursor-pointer hover:text-[#f3f5f8]" />
        </div>

        <div className="flex items-center gap-4 text-sm font-bold">
          <div className="flex items-center justify-between w-full max-w-80 p-4 bg-[#1e242e] rounded-md border border-[#303946]">
            <div className="text-[#939fb2]">총 투자금액</div>
            <div>100억+</div>
          </div>
          <div className="flex items-center justify-between w-full max-w-80 p-4 bg-[#1e242e] rounded-md border border-[#303946]">
            <div className="text-[#939fb2]">총 투자 건 수</div>
            <div>100건</div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e242e]">
        <div className="flex gap-2 p-2">
          <Input
            placeholder="키워드로 투자/M&A 검색"
            className="max-w-80 border-none bg-[#303946] placeholder:text-[#939fb2]"
          />
          <Button className="bg-[#66f]">다운로드</Button>
          <Button className="bg-[#485567]">필터</Button>
          <Button className="bg-[#485567]">열설정</Button>
        </div>
        <DataTable />
      </div>
    </div>
  );
}
