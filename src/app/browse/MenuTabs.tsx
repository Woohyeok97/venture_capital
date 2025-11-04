'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// component
import { Landmark } from 'lucide-react';
import Link from 'next/link';

const MENU_ITEMS = [
  {
    label: '투자/M&A',
    value: 'investments',
    href: '/browse/investments',
  },
  {
    label: 'IR',
    value: 'ir',
    href: '#',
  },
  {
    label: '스타트업',
    value: 'startups',
    href: '/browse/startups',
  },
  {
    label: '투자사',
    value: 'investors',
    href: '#',
  },
  {
    label: '펀드',
    value: 'funds',
    href: '#',
  },
  {
    label: '뉴스',
    value: 'news',
    href: '#',
  },
];

export function MenuTabs() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const [currentTab, setCurrentTab] = useState(segments[segments.length - 1]);

  useEffect(() => {
    setCurrentTab(segments[segments.length - 1]);
  }, [segments]);

  return (
    <div className="flex flex-col px-4 bg-[#1e242e] border-b-[1px] border-[#303946]">
      <div className="flex items-center gap-2 py-4">
        <div className="bg-[#303946] p-2 rounded-lg">
          <Landmark />
        </div>
        <div className="text-lg font-bold">데이터베이스</div>
      </div>

      <div className="flex gap-6 text-[#bebebe] font-bold">
        {MENU_ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={item.label}
            className={`cursor-pointer text-[#939fb2] ${currentTab === item.value ? 'text-foreground border-b-2 border-foreground' : 'hover:text-[#d9dfe8]'} `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
