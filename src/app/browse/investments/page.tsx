'use client';
import { useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
// components
import { Info } from 'lucide-react';
import { Checkbox } from '@/shared/ui/checkbox/checkbox';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { InvestmentsBrowse } from '@/widgets/guide/browse/InvestmentsBrowse';
import { Badge } from '@/shared/ui/badge/badge';
import InvestmentsOverview from '@/widgets/investments/InvestmentsOverview';
// hooks
import useDataTable from '@/shared/lib/tanstack-table/hooks/useDataTable';
import { useOverlay } from '@/widgets/overlay/OverlayProvider';
// types
import { InvestmentType } from '@/entities/investments/investments.type';
import { TestChart } from './TestChart';
import investmentsData from '@/entities/investments/investments.data.json';
const MOCK: InvestmentType[] = investmentsData;

export default function InvestmentsPage() {
  const { openOverlay } = useOverlay();

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
        cell: ({ row }) => (
          <div className="flex flex-col gap-1">
            <div>{row.original.investmentDate.date}</div>
            <Link
              href={row.original.investmentDate.pressReleaseUrl}
              target="_blank"
              className="text-sm text-text-sub underline cursor-pointer"
            >
              보도자료
            </Link>
          </div>
        ),
      },
      {
        header: '투자금액',
        accessorKey: 'investmentAmount',
      },
      {
        header: '투자단계',
        accessorKey: 'investmentStep',
        cell: ({ row }) => <Badge>{row.original.investmentStep}</Badge>,
      },
      {
        header: '투자종류',
        accessorKey: 'investmentType',
        cell: ({ row }) => <Badge>{row.original.investmentType}</Badge>,
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
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <h1 className="text-xl font-bold">투자/M&A 탐색</h1>
            <Info
              size={16}
              className="text-[#939fb2] cursor-pointer hover:text-[#f3f5f8]"
              onClick={() => openOverlay(close => <InvestmentsBrowse close={close} />)}
            />
          </div>

          <div className="flex items-center gap-4 text-sm font-bold">
            <div className="flex items-center justify-between w-full max-w-80 p-4 bg-[#1e242e] rounded-md border border-gray-700">
              <div className="text-text-sub">총 투자금액</div>
              <div>100억+</div>
            </div>
            <div className="flex items-center justify-between w-full max-w-80 p-4 bg-[#1e242e] rounded-md border border-gray-700">
              <div className="text-text-sub">총 투자 건 수</div>
              <div>100건</div>
            </div>
          </div>
        </div>

        {/* <TestChart /> */}
        <InvestmentsOverview data={MOCK} />
      </div>

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
        <DataTable />
      </div>
    </div>
  );
}
