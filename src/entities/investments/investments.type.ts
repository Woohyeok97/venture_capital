export interface InvestmentType {
  investmentDate: {
    date: string;
    pressReleaseUrl: string;
  };
  investmentAmount: number; // 투자 금액
  investmentStep: 'Seed' | 'Pre-A' | 'Series A' | 'M&A'; // 투자 단계
  investmentType: '투자' | '인수합병'; // 투자 유형
  investmentTarget: string; // 투자 대상 기업 이름
  investmentCategory: '바이오/의료' | '금융' | '우주/항공' | '환경/에너지' | '반도체' | '콘텐츠'; // 투자 대상 분야
  investmentTechnology: '제조' | '인공지능' | '클라우드' | '연구개발' | '인터넷' | '프로그램'; // 투자 대상 기술
}
