// 메뉴탭 아이템 타입
export type MenuItemType = {
  label: '투자/M&A' | 'IR' | '스타트업' | '투자사' | '펀드' | '뉴스';
  value: 'investments' | 'ir' | 'startups' | 'investors' | 'funds' | 'news';
  href: string;
};
