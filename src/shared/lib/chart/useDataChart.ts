'use client';

import { useMemo } from 'react';
// constants
import { CHART_COLORS } from './constants';

interface Params<T> {
  data: T[];
  key: keyof T; // 분류 기준 필드
  amountKey: keyof T; // 금액 기준 필드
}
export function useDataChart<T>({ data, key, amountKey }: Params<T>) {
  // 차트 데이터 -> 주입 받은 데이터를 차트 데이터로 변환 & 정렬
  const chartData = useMemo(() => {
    // 분류 기준 필드로 데이터를 묶고 -> 해당하는 개수(vlaue) / 금액(amount) 계산하여 반환
    const result: Record<string, { value: number; amount: number }> = {}; // 변환할 차트 데이터 객체

    data.forEach(item => {
      const category = String(item[key]); // 분류 필드의 값
      const amount = Number(item[amountKey]); // 금액 필드의 값

      // 아직 카테코리에 해당하는 값이 없으면 초기값 생성
      if (!result[category]) {
        result[category] = { value: 0, amount: 0 };
      }

      result[category].value += 1; // 건수
      result[category].amount += amount; // 금액
    });

    // 차트 데이터 배열로 변환 & 금액을 기준으로 내림차순 정렬
    return Object.entries(result)
      .map(([name, { value, amount }]) => ({
        name,
        value,
        amount,
      }))
      .sort((a, b) => b.amount - a.amount);
  }, [amountKey, data, key]);

  // 차트 설정 (카테코리별 색상 지정)
  const chartConfig = useMemo(() => {
    const config: Record<string, { label: string; color: string }> = {};

    chartData.forEach((item, index) => {
      config[item.name] = {
        label: item.name,
        color: CHART_COLORS[index % CHART_COLORS.length],
      };
    });

    return config;
  }, [chartData]);

  return { chartData, chartConfig };
}
