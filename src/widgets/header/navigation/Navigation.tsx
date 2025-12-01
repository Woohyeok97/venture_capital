'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown/dropdown';
import { Button } from '@/shared/ui/button/button';
import Link from 'next/link';
// icons
import { Newspaper, LibraryBig, BadgeDollarSign, Layers } from 'lucide-react';
// constants
import { DATABASE_NAVIGATION_ITEMS, COLLECTION_NAVIGATION_ITEMS } from './constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const prevPath = useRef(path);

  // 페이지 url 변경 시 드롭다운 메뉴 닫기 effect
  useEffect(() => {
    if (prevPath.current !== path) {
      setIsOpen(false);
    }

    prevPath.current = path;
  }, [path]);

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer border-none">
            <Layers color="#5a55e6" />
            데이터베이스
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-gray-900 text-foreground" align="start">
          {DATABASE_NAVIGATION_ITEMS.map(item => (
            <DropdownMenuItem key={item.label} asChild className="cursor-pointer">
              <Link href={item.href} className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer">
            <LibraryBig color="#00cc7e" />
            모아보기
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#1e242e] text-foreground" align="start">
          {COLLECTION_NAVIGATION_ITEMS.map(item => (
            <DropdownMenuItem key={item.label} asChild className="cursor-pointer">
              <Link href={item.href} className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" className="cursor-pointer hover:bg-gray-700 hover:text-foreground">
        <Newspaper />
        <Link href="#">리포트/소식</Link>
      </Button>
      <Button variant="ghost" className="cursor-pointer hover:bg-gray-700 hover:text-foreground">
        <BadgeDollarSign color="#fbc31c" />
        <Link href="#">가격</Link>
      </Button>
    </div>
  );
}
