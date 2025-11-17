'use client';
// components
import { Checkbox } from '@/shared/ui/checkbox/checkbox';
import Link from 'next/link';
import { Badge } from '@/shared/ui/badge/badge';
// types
import { InvestmentType } from '@/entities/investments/investments.type';
import { ColumnDef } from '@tanstack/react-table';
// utils
import { formatDynamicUnit } from '@/shared/lib/utils/formatDynamicUnit';

export function createColumns(): ColumnDef<InvestmentType>[] {
  return [
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
      cell: ({ row }) => formatDynamicUnit(row.original.investmentAmount),
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
  ];
}
