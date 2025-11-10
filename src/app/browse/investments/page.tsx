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

const MOCK: InvestmentType[] = [
  {
    investmentDate: {
      date: '2025-11-07',
      pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
    },
    investmentAmount: '13억원',
    investmentStep: 'Seed',
    investmentType: '투자',
    investmentTarget: '삼성전자',
  },
  {
    investmentDate: {
      date: '2025-02-01',
      pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
    },
    investmentAmount: '32억원',
    investmentStep: 'Pre-A',
    investmentType: '인수합병',
    investmentTarget: 'LG전자',
  },
  {
    investmentDate: {
      date: '2025-03-01',
      pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
    },
    investmentAmount: '50억원',
    investmentStep: 'Series A',
    investmentType: '투자',
    investmentTarget: 'SK하이닉스',
  },
  {
    investmentDate: {
      date: '2025-08-01',
      pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
    },
    investmentAmount: '71억원',
    investmentStep: 'M&A',
    investmentType: '인수합병',
    investmentTarget: '현대차',
  },
  {
    investmentDate: {
      date: '2025-09-01',
      pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
    },
    investmentAmount: '38억원',
    investmentStep: 'M&A',
    investmentType: '투자',
    investmentTarget: '네이버',
  },
];

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
              size={14}
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

// 'use client';
// import { useMemo } from 'react';
// import { ColumnDef } from '@tanstack/react-table';
// import Link from 'next/link';
// // components
// import { Info } from 'lucide-react';
// import { Checkbox } from '@/shared/ui/checkbox/checkbox';
// import { Input } from '@/shared/ui/input/input';
// import { Button } from '@/shared/ui/button/button';
// import { InvestmentsBrowse } from '@/widgets/guide/browse/InvestmentsBrowse';
// import { Badge } from '@/shared/ui/badge/badge';
// // hooks
// import useDataTable from '@/shared/lib/tanstack-table/hooks/useDataTable';
// import { useOverlay } from '@/widgets/overlay/OverlayProvider';
// import { TestChart } from './TestChart';

// const MOCK = [
//   {
//     investmentDate: {
//       date: '2025-11-07',
//       pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
//     },
//     investmentAmount: '13억원',
//     investmentStep: 'Seed',
//     investmentType: '투자',
//     investmentTarget: '삼성전자',
//   },
//   {
//     investmentDate: {
//       date: '2025-02-01',
//       pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
//     },
//     investmentAmount: '32억원',
//     investmentStep: 'Pre-A',
//     investmentType: '인수합병',
//     investmentTarget: 'LG전자',
//   },
//   {
//     investmentDate: {
//       date: '2025-03-01',
//       pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
//     },
//     investmentAmount: '50억원',
//     investmentStep: 'Series A',
//     investmentType: '투자',
//     investmentTarget: 'SK하이닉스',
//   },
//   {
//     investmentDate: {
//       date: '2025-08-01',
//       pressReleaseUrl: 'https://www.forbeskorea.co.kr/news/articleView.html?idxno=400967',
//     },
//     investmentAmount: '71억원',
//     investmentStep: 'M&A',
//     investmentType: '인수합병',
//     investmentTarget: '현대차',
//   },
// ];

// export default function InvestmentsPage() {
//   const { openOverlay } = useOverlay();

//   // 테이블 컬럼
//   const columns = useMemo(
//     (): ColumnDef<any>[] => [
//       {
//         id: 'select',
//         size: 30,
//         header: ({ table }) => (
//           <Checkbox
//             className="w-4 h-4"
//             checked={table.getIsAllRowsSelected()}
//             onCheckedChange={table.getToggleAllRowsSelectedHandler()}
//           />
//         ),
//         cell: ({ row }) => (
//           <Checkbox
//             className="w-4 h-4"
//             checked={row.getIsSelected()}
//             onCheckedChange={row.getToggleSelectedHandler()}
//           />
//         ),
//       },
//       {
//         header: '투자날짜',
//         accessorKey: 'investmentDate',
//         cell: ({ row }) => (
//           <div className="flex flex-col gap-1">
//             <div>{row.original.investmentDate.date}</div>
//             <Link
//               href={row.original.investmentDate.pressReleaseUrl}
//               target="_blank"
//               className="text-sm text-text-sub underline cursor-pointer"
//             >
//               보도자료
//             </Link>
//           </div>
//         ),
//       },
//       {
//         header: '투자금액',
//         accessorKey: 'investmentAmount',
//       },
//       {
//         header: '투자단계',
//         accessorKey: 'investmentStep',
//         cell: ({ row }) => <Badge>{row.original.investmentStep}</Badge>,
//       },
//       {
//         header: '투자종류',
//         accessorKey: 'investmentType',
//         cell: ({ row }) => <Badge>{row.original.investmentType}</Badge>,
//       },
//       {
//         header: '투자대상',
//         accessorKey: 'investmentTarget',
//       },
//     ],
//     [],
//   );
//   // 테이블 데이터
//   const rows = useMemo(() => MOCK, []);

//   const chartData = useMemo(() => {
//     const data = {};

//     rows.forEach(item => {
//       const type = item.investmentType;
//       data[type] = (data[type] || 0) + 1;
//     });

//     const colors = [
//       'red',
//       'var(--color-safari)',
//       'var(--color-firefox)',
//       'var(--color-edge)',
//       'var(--color-other)',
//     ];

//     const result = Object.keys(data).map((item, index) => ({
//       target: item,
//       number: data[item],
//       fill: colors[index % colors.length], // 색상 순환 적용
//     }));

//     return result;
//   }, [rows]);

//   const chartConfig = useMemo(() => {
//     // const config = { visitors: { label: 'Visitors' } }
//     const config = chartData.map(item => ({
//       [item.target]: {
//         label: item.target,
//         color: item.fill,
//       },
//     }));

//     const result = Object.assign([...config]);
//     return result;
//   }, [chartData]);

//   console.log('data:', chartData);
//   console.log('config:', chartConfig);

//   // 테이블 컴포넌트
//   const { DataTable } = useDataTable({ data: rows, columns });

//   return (
//     <div>
//       <div className="flex flex-col gap-4 p-4">
//         <div className="flex items-center gap-1">
//           <h1 className="text-xl font-bold">투자/M&A 탐색</h1>
//           <Info
//             size={14}
//             className="text-[#939fb2] cursor-pointer hover:text-[#f3f5f8]"
//             onClick={() => openOverlay(close => <InvestmentsBrowse close={close} />)}
//           />
//         </div>

//         <div className="flex items-center gap-4 text-sm font-bold">
//           <div className="flex items-center justify-between w-full max-w-80 p-4 bg-[#1e242e] rounded-md border border-[#303946]">
//             <div className="text-[#939fb2]">총 투자금액</div>
//             <div>100억+</div>
//           </div>
//           <div className="flex items-center justify-between w-full max-w-80 p-4 bg-[#1e242e] rounded-md border border-[#303946]">
//             <div className="text-[#939fb2]">총 투자 건 수</div>
//             <div>100건</div>
//           </div>
//         </div>
//       </div>
//       <TestChart data={chartData} config={chartConfig} />
//       <div className="bg-[#1e242e]">
//         <div className="flex gap-2 p-2">
//           <Input
//             placeholder="키워드로 투자/M&A 검색"
//             className="max-w-80 border-none bg-[#303946] placeholder:text-[#939fb2]"
//           />
//           <Button className="bg-[#66f]">다운로드</Button>
//           <Button className="bg-[#485567]">필터</Button>
//           <Button className="bg-[#485567] borde">열설정</Button>
//         </div>
//         <DataTable />
//       </div>
//     </div>
//   );
// }
