'use client';

import { useState } from 'react';
// components
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/shared/ui/accordion/accordion';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/ui/chart/chart';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/shared/ui/select/select';
import { Pie, PieChart, Cell } from 'recharts';
// icons
import { ChartPie } from 'lucide-react';
// types
import { InvestmentType } from '@/entities/investments/investments.type';
// hooks
import useDataChart from '@/app/browse/investments/useDataChart';

const COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
];

interface InvestmentsOverviewProps {
  data: InvestmentType[];
}
export default function InvestmentsOverview({ data }: InvestmentsOverviewProps) {
  const [chartKey, setChartKey] = useState<'investmentStep' | 'investmentType'>('investmentStep');

  const { chartData, chartConfig } = useDataChart<InvestmentType>({
    data: data,
    key: chartKey,
  });

  return (
    <Accordion type="single" collapsible defaultValue="" className="">
      <AccordionItem value="overview" className="flex flex-col gap-4">
        <AccordionTrigger className="w-full font-bold border bg-[#252b44] border-[#8385ff] px-4 cursor-pointer hover:bg-[#2e355a]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ChartPie color="#03c168" size={20} />
              <div className="text-lg font-bold">한눈에 보기</div>
            </div>
            <div className="text-text-sub">투자/M&A 탐색 결과를 한눈에 보여줍니다.</div>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <div className="flex flex-col bg-gray-900 gap-4 p-4 rounded-md border border-gray-700">
            <div className="items-center">
              <Select value={chartKey} onValueChange={setChartKey}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="start">
                  <SelectItem value="investmentStep">투자 단계</SelectItem>
                  <SelectItem value="investmentType">투자 유형</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center h-[150px] gap-10">
              <ChartContainer config={chartConfig} className="aspect-square max-h-[150px] h-full">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={0}
                    outerRadius={70}
                    onClick={item => console.log('hi', item)}
                  >
                    {chartData.map((item, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="flex flex-col gap-4">
                {chartData.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center gap-6 font-bold"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="size-4 rounded-xs"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <div>{item.name}</div>
                    </div>
                    <div className="text-text-sub">{item.value}건</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
