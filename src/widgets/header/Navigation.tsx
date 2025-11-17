// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown/dropdown';
import { Button } from '@/shared/ui/button/button';
import Link from 'next/link';
import {
  Search,
  Megaphone,
  Rocket,
  PiggyBank,
  CircleDollarSign,
  Newspaper,
  ChartNoAxesCombined,
  GitCompareArrows,
  LibraryBig,
  FolderOpenDot,
  FolderSearch,
  HandCoins,
  BadgeDollarSign,
  Layers,
} from 'lucide-react';

export function Navigation() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer">
            <Layers color="#5a55e6" />
            데이터베이스
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#1e242e] text-foreground" align="start">
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <Search />
              통합검색
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/browse/investments" className="flex items-center gap-2">
              <ChartNoAxesCombined />
              투자/M&A
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <Megaphone />
              IR
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/browse/startups" className="flex items-center gap-2">
              <Rocket />
              스타트업
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <PiggyBank />
              투자사
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <CircleDollarSign />
              펀드
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <Newspaper />
              뉴스
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <HandCoins />
              지원사업
            </Link>
          </DropdownMenuItem>
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
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <GitCompareArrows />
              피어그룹 비교
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <FolderOpenDot />내 컬렉션
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="#" className="flex items-center gap-2">
              <FolderSearch />
              공개 컬렉션
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" className="cursor-pointer">
        <Newspaper />
        <Link href="#">리포트/소식</Link>
      </Button>
      <Button variant="ghost" className="cursor-pointer">
        <BadgeDollarSign color="#fbc31c" />
        <Link href="#">가격</Link>
      </Button>
    </div>
  );
}
