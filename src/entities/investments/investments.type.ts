export interface InvestmentType {
  investmentDate: {
    date: string;
    pressReleaseUrl: string;
  };
  investmentAmount: string;
  investmentStep: 'Seed' | 'Pre-A' | 'Series A' | 'M&A';
  investmentType: '투자' | '인수합병';
  investmentTarget: string;
}
