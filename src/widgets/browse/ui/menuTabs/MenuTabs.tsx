'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// component
import { Landmark } from 'lucide-react';
import Link from 'next/link';
// constants
import { MENU_ITEMS } from './constants';

export function MenuTabs() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const [currentTab, setCurrentTab] = useState(segments[segments.length - 1]); // 현재 탭

  // url 변경 시 현재 탭 업데이트 effect
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
        {MENU_ITEMS.map(item => (
          <Link
            href={item.href}
            key={item.value}
            className={`cursor-pointer text-[#939fb2] pb-2 ${currentTab === item.value ? 'text-foreground border-b-2 border-foreground' : 'hover:text-[#d9dfe8]'} `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
