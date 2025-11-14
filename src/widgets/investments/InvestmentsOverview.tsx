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
import { Pie, PieChart, Cell, BarChart, YAxis, XAxis, Bar, CartesianGrid } from 'recharts';
// icons
import { ChartPie } from 'lucide-react';
// types
import { InvestmentType } from '@/entities/investments/investments.type';
// hooks
import useDataChart from '@/app/browse/investments/useDataChart';

export function formatDynamicUnit(value: number) {
  if (value >= 1_0000_0000) return `${Math.round(value / 1_0000_0000)}억`;
  if (value >= 1_0000) return `${Math.round(value / 1_0000)}만`;
  if (value >= 1000) return `${Math.round(value / 1000)}천`;
  return value.toString();
}

interface InvestmentsOverviewProps {
  data: InvestmentType[];
}
export default function InvestmentsOverview({ data }: InvestmentsOverviewProps) {
  const [chartKey, setChartKey] = useState<'investmentStep' | 'investmentType'>('investmentStep');

  const { chartData, chartConfig } = useDataChart<InvestmentType>({
    data,
    key: chartKey,
    amountKey: 'investmentAmount',
  });

  console.log('chartData', chartData);
  console.log('chartConfig', chartConfig);

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
          <div className="flex flex-col items-end gap-6 bg-gray-900 p-4 rounded-md border border-gray-700">
            <Select value={chartKey} onValueChange={setChartKey}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectItem value="investmentStep">투자 단계</SelectItem>
                <SelectItem value="investmentType">투자 유형</SelectItem>
                <SelectItem value="investmentCategory">투자 분야</SelectItem>
                <SelectItem value="investmentTechnology">투자 기술</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-col gap-8 px-10 w-full">
              <div className="flex justify-between gap-20">
                <div className="flex flex-col items-center basis-[70%] gap-6">
                  <div className="font-bold text-lg text-text-sub">투자금액 동향</div>
                  <ChartContainer
                    config={chartConfig}
                    className="aspect-square max-h-[200px] h-full w-full"
                  >
                    <BarChart
                      accessibilityLayer
                      data={chartData}
                      layout="vertical"
                      barCategoryGap={5}
                      margin={{
                        left: 10,
                        right: 20,
                      }}
                    >
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
                      <CartesianGrid vertical={true} horizontal={false} strokeOpacity={0.15} />

                      <YAxis
                        dataKey="name"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={value => chartConfig[value]?.label ?? value}
                      />
                      <XAxis
                        type="number"
                        dataKey="amount"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#a0a8c0', fontSize: 12 }}
                        tickFormatter={value => formatDynamicUnit(value)}
                      />

                      <Bar name="금액" dataKey="amount" radius={5}>
                        {chartData.map(item => (
                          <Cell key={item.name} fill={chartConfig[item.name]?.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </div>

                <div className="flex flex-col items-center basis-[30%] gap-6">
                  <div className="font-bold text-lg text-text-sub">투자비중 동향</div>
                  <ChartContainer
                    config={chartConfig}
                    className="aspect-square max-h-[200px] h-full w-full"
                  >
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent hideLabel />} />

                      <Pie
                        data={[...chartData].sort((a, b) => b.value - a.value)}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={100}
                        onClick={item => console.log('hi', item)}
                      >
                        {[...chartData]
                          .sort((a, b) => b.value - a.value)
                          .map((item, index) => (
                            <Cell key={`cell-${index}`} fill={chartConfig[item.name]?.color} />
                          ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </div>
              </div>

              <div className="flex justify-center gap-4 border-t border-gray-700 pt-4">
                {chartData.map(item => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="size-3 rounded-lg"
                      style={{ backgroundColor: chartConfig[item.name]?.color }}
                    />
                    <div className="text-text-sub text-sm">{item.name}</div>
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
