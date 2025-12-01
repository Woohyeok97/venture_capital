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
import { ChartPie } from 'lucide-react';
// types
import { InvestmentType } from '@/entities/investments/investments.type';
// hooks
import { useDataChart } from '@/shared/lib/chart/useDataChart';
// utils
import { formatDynamicUnit } from '@/shared/lib/utils/formatDynamicUnit';

// 차트 카테고리 목록
const CHART_KEYS: { label: string; key: keyof InvestmentType }[] = [
  { label: '투자 단계', key: 'investmentStep' },
  { label: '투자 유형', key: 'investmentType' },
  { label: '투자 분야', key: 'investmentCategory' },
  { label: '투자 기술', key: 'investmentTechnology' },
];

interface InvestmentsOverviewProps {
  data: InvestmentType[];
}
export function InvestmentsOverview({ data }: InvestmentsOverviewProps) {
  const [chartKey, setChartKey] = useState<keyof InvestmentType>('investmentStep'); // 현재 차트 카테고리

  // 차트 데이터 & 차트 설정
  const { chartData, chartConfig } = useDataChart<InvestmentType>({
    data,
    key: chartKey,
    amountKey: 'investmentAmount',
  });

  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="overview" className="flex flex-col gap-4">
        {/* 차트 아코디언 헤더 */}
        <AccordionTrigger className="w-full font-bold border bg-[#252b44] border-[#8385ff] px-4 cursor-pointer hover:bg-[#2e355a]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ChartPie color="#03c168" size={20} />
              <div className="text-lg font-bold">한눈에 보기</div>
            </div>
            <div className="text-text-sub">투자/M&A 시장의 흐름을 한눈에 보여줍니다.</div>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <div className="flex flex-col items-end gap-6 bg-gray-900 p-4 rounded-md border border-gray-700">
            {/* 차트 카테고리 선택 셀렉트 */}
            <Select
              value={chartKey}
              onValueChange={value => setChartKey(value as keyof InvestmentType)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start">
                {CHART_KEYS.map(item => (
                  <SelectItem key={item.key} value={item.key}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 차트 영역 */}
            <div className="flex flex-col gap-8 px-10 w-full">
              <div className="flex justify-between gap-20">
                {/* 금액 차트 */}
                <div className="flex flex-col items-center basis-[70%] gap-4">
                  <div className="font-bold text-lg text-text-sub">금액 동향</div>
                  <ChartContainer
                    config={chartConfig}
                    className="aspect-square max-h-[180px] h-full w-full"
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

                      {/* Y축(이름)*/}
                      <YAxis
                        dataKey="name"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={value => chartConfig[value]?.label ?? value}
                      />

                      {/* X축(금액) */}
                      <XAxis
                        type="number"
                        dataKey="amount"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#a0a8c0', fontSize: 12 }}
                        tickFormatter={value => formatDynamicUnit(value)} // 금액 단위 변환
                      />

                      {/* 차트 막대 */}
                      <Bar name="금액" dataKey="amount" radius={5}>
                        {chartData.map(item => (
                          <Cell key={item.name} fill={chartConfig[item.name]?.color} /> // 색상 지정(차트설정)
                        ))}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </div>

                {/* 비중 차트 */}
                <div className="flex flex-col items-center basis-[30%] gap-4">
                  <div className="font-bold text-lg text-text-sub">비중 동향</div>
                  <ChartContainer
                    config={chartConfig}
                    className="aspect-square max-h-[180px] h-full w-full"
                  >
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent hideLabel />} />

                      <Pie
                        data={[...chartData].sort((a, b) => b.value - a.value)} // 비중이 큰거부터 내림차순 정렬
                        dataKey="value" // 파이 크기
                        nameKey="name"
                        innerRadius={50} // 내부 반경
                        outerRadius={90} // 외부 반경
                      >
                        {[...chartData]
                          .sort((a, b) => b.value - a.value)
                          .map((item, index) => (
                            <Cell key={`cell-${index}`} fill={chartConfig[item.name]?.color} /> // 금액 차트 요소와 동일한 색상 지정
                          ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </div>
              </div>

              {/* 범례 영역 */}
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
