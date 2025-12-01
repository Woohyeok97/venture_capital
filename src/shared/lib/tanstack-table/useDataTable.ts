import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface Params<T> {
  data: T[]; // 테이블 데이터
  columns: ColumnDef<T>[]; // 테이블 컬럼 정의
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
