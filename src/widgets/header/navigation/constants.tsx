// types
import { NavigationItemType } from './types';
// icons
import {
  Search,
  ChartNoAxesCombined,
  Megaphone,
  Rocket,
  Users,
  CircleDollarSign,
  Newspaper,
  HandCoins,
  GitCompareArrows,
  FolderOpenDot,
  FolderSearch,
} from 'lucide-react';

// 데이터베이스 네비게이션 아이템
export const DATABASE_NAVIGATION_ITEMS: NavigationItemType[] = [
  {
    label: '통합검색',
    icon: <Search />,
    href: '#',
  },
  {
    label: '투자/M&A',
    icon: <ChartNoAxesCombined />,
    href: '/browse/investments',
  },
  {
    label: 'IR',
    icon: <Megaphone />,
    href: '#',
  },
  {
    label: '스타트업',
    icon: <Rocket />,
    href: '/browse/startups',
  },
  {
    label: '투자사',
    icon: <Users />,
    href: '#',
  },
  {
    label: '펀드',
    icon: <CircleDollarSign />,
    href: '#',
  },
  {
    label: '뉴스',
    icon: <Newspaper />,
    href: '#',
  },
  {
    label: '지원사업',
    icon: <HandCoins />,
    href: '#',
  },
];

// 모아보기 네비게이션 아이템
export const COLLECTION_NAVIGATION_ITEMS: NavigationItemType[] = [
  {
    label: '피어그룹 비교',
    icon: <GitCompareArrows />,
    href: '#',
  },
  {
    label: '내 컬렉션',
    icon: <FolderOpenDot />,
    href: '#',
  },
  {
    label: '공개 컬렉션',
    icon: <FolderSearch />,
    href: '#',
  },
];
