// components
export function InvestmentsBrowse() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">투자/M&A 탐색</h1>
      <p className="text-[#939fb2]">
        개별 투자 및 M&A에 대한 개괄적인 정보를 제공합니다. 기본적으로 최근에 일어난 투자 순으로
        정렬되어있습니다. 투자 날짜, 총 투자금액, 투자단계, 투자종류, 투자대상 및 기업 정보, 투자자
        및 기업 정보를 확인할 수 있습니다.
      </p>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-[#66f]">Q</span>
          <span>투자 날짜에 대해 궁금하신가요?</span>
        </div>
        <p className="text-[#939fb2]">해당 투자 라운드의 클로징 날짜입니다.</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-[#66f]">Q</span>
          <span>총 투자금액 / 투자 단계 / 투자 종류 에 대해 궁금하신가요?</span>
        </div>
        <p className="text-[#939fb2]">투자 상세 설명 확인하러 가기</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-[#66f]">Q</span>
          <span>투자대상 및 기업 정보 및 투자자 및 기업 정보에 대해 궁금하신가요?</span>
        </div>
        <p className="text-[#939fb2]">회사 프로필 상세 설명 확인하러 가기</p>
      </div>
    </div>
  );
}
