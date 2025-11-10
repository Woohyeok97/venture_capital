import { useMemo } from 'react';
import { TrendingUp } from 'lucide-react';
import { Pie, PieChart, Cell } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/ui/chart/chart';

const COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
];

interface Params<T> {
  data: T[];
  key: keyof T;
}

export default function useDataChart<T>({ data, key }: Params<T>) {
  const chartData = useMemo(() => {
    const result = {};

    data.forEach(item => {
      const category = item[key];
      result[category] = (result[category] || 0) + 1;
    });

    return Object.entries(result).map(([name, value]) => ({
      name,
      value,
    }));
  }, [data, key]);

  const chartConfig = useMemo(() => {
    return {
      value: { label: 'Count', color: 'var(--chart-1)' },
    };
  }, []);

  // const DataChart = () => {
  //   return (
  //     <Card className="flex flex-col">
  //       <CardHeader className="items-center pb-0">
  //         <CardTitle>Pie Chart - Donut</CardTitle>
  //         <CardDescription>데이터 기준: {String(key)}</CardDescription>
  //       </CardHeader>

  //       <CardContent className="flex-1 pb-0">
  //         <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
  //           <PieChart>
  //             <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
  //             <Pie
  //               data={chartData}
  //               dataKey="value"
  //               nameKey="name"
  //               innerRadius={60}
  //               outerRadius={100}
  //               className="cursor-pointer"
  //               onClick={item => console.log('hi', item)}
  //             >
  //               {chartData.map((_, index) => (
  //                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //               ))}
  //             </Pie>
  //           </PieChart>
  //         </ChartContainer>
  //       </CardContent>

  //       <CardFooter className="flex-col gap-2 text-sm">
  //         <div className="flex items-center gap-2 leading-none font-medium">
  //           이번 달 트렌드 상승 5.2% <TrendingUp className="h-4 w-4" />
  //         </div>
  //         <div className="text-text-sub leading-none">최근 {data.length}건의 데이터 기반</div>
  //       </CardFooter>
  //     </Card>
  //   );
  // };

  return { chartData, chartConfig };
}

// import { useMemo } from 'react';
// import { TrendingUp } from 'lucide-react';
// import { Pie, PieChart, Cell } from 'recharts';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/shared/ui/card/card';
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from '@/shared/ui/chart/chart';

// const COLORS = [
//   'var(--chart-1)',
//   'var(--chart-2)',
//   'var(--chart-3)',
//   'var(--chart-4)',
//   'var(--chart-5)',
// ];

// interface Params<T> {
//   data: T[];
//   key: keyof T;
// }

// export default function useDataChart<T>({ data, key }: Params<T>) {
//   const chartData = useMemo(() => {
//     const result = {};

//     data.forEach(item => {
//       const category = item[key];
//       result[category] = (result[category] || 0) + 1;
//     });

//     return Object.entries(result).map(([name, value]) => ({
//       name,
//       value,
//     }));
//   }, [data, key]);

//   const chartConfig = useMemo(() => {
//     return {
//       value: { label: 'Count', color: 'var(--chart-1)' },
//     };
//   }, []);

//   const DataChart = () => {
//     return (
//       <Card className="flex flex-col">
//         <CardHeader className="items-center pb-0">
//           <CardTitle>Pie Chart - Donut</CardTitle>
//           <CardDescription>데이터 기준: {String(key)}</CardDescription>
//         </CardHeader>

//         <CardContent className="flex-1 pb-0">
//           <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
//             <PieChart>
//               <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//               <Pie
//                 data={chartData}
//                 dataKey="value"
//                 nameKey="name"
//                 innerRadius={60}
//                 outerRadius={100}
//                 className="cursor-pointer"
//                 onClick={item => console.log('hi', item)}
//               >
//                 {chartData.map((_, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ChartContainer>
//         </CardContent>

//         <CardFooter className="flex-col gap-2 text-sm">
//           <div className="flex items-center gap-2 leading-none font-medium">
//             이번 달 트렌드 상승 5.2% <TrendingUp className="h-4 w-4" />
//           </div>
//           <div className="text-text-sub leading-none">최근 {data.length}건의 데이터 기반</div>
//         </CardFooter>
//       </Card>
//     );
//   };

//   return { DataChart };
// }
