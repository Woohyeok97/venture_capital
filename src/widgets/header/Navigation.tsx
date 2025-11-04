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
  Landmark,
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
            <Search />
            <Link href="#">통합검색</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <ChartNoAxesCombined />
            <Link href="#">투자/M&A</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Megaphone />
            <Link href="#">IR</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Rocket />
            <Link href="#">스타트업</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Landmark />
            <Link href="#">투자사</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <CircleDollarSign />
            <Link href="#">펀드</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Newspaper />
            <Link href="#">뉴스</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <HandCoins />
            <Link href="#">지원사업</Link>
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
            <GitCompareArrows />
            <Link href="#">피어그룹 비교</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <FolderOpenDot />
            <Link href="#">내 컬렉션</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <FolderSearch />
            <Link href="#">공개 컬렉션</Link>
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
