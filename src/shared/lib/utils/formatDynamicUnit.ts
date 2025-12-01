// 금액 단위 변경 유티함수
export function formatDynamicUnit(value: number) {
  if (value >= 1_0000_0000) return `${Math.round(value / 1_0000_0000)}억`;
  if (value >= 1_0000) return `${Math.round(value / 1_0000)}만`;
  if (value >= 1000) return `${Math.round(value / 1000)}천`;
  return value.toString();
}
