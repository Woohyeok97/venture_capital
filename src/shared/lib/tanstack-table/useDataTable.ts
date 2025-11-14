import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface Params<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function useDataTable<T>({ data, columns }: Params<T>) {
  // 테이블 객체
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
}
