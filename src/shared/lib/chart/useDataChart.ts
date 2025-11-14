'use client';

import { useMemo } from 'react';

// 차트 색상 목록
const COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
  'var(--chart-6)',
  'var(--chart-7)',
  'var(--chart-8)',
  'var(--chart-9)',
  'var(--chart-10)',
];

interface Params<T> {
  data: T[];
  key: keyof T;
  amountKey: keyof T;
}
export function useDataChart<T>({ data, key, amountKey }: Params<T>) {
  // 차트 데이터
  const chartData = useMemo(() => {
    const result = {};

    data.forEach(item => {
      const category = item[key];
      const amount = item[amountKey];

      if (!result[category]) {
        result[category] = { value: 0, amount: 0 };
      }

      result[category].value += 1;
      result[category].amount += amount;
    });

    return Object.entries(result)
      .map(([name, { value, amount }]) => ({
        name,
        value,
        amount,
      }))
      .sort((a, b) => b.amount - a.amount);
  }, [amountKey, data, key]);

  // 차트 설정
  const chartConfig = useMemo(() => {
    const config = {};

    chartData.forEach((item, index) => {
      config[item.name] = {
        label: item.name,
        color: COLORS[index % COLORS.length],
      };
    });

    return config;
  }, [chartData]);

  return { chartData, chartConfig };
}
