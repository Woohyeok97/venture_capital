// components
import { Input } from '@/shared/ui/input/input';
import { UserRoundIcon, Landmark } from 'lucide-react';
import { Navigation } from './Navigation';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-4 bg-[#1e242e] border-b-[1px] border-[#303946]">
      <div className="flex items-center gap-4">
        <div className="text-lg font-bold">
          <Link href="/" className="flex items-center gap-1 text-[#bebebe] font-bold">
            <Landmark />
            Venture Capital
          </Link>
        </div>
        <Navigation />
      </div>

      <div className="flex justify-between items-center gap-4 h-full">
        <Input
          name="search"
          placeholder="기업, 서비스, 대표자, 키워드 검색"
          className="border-none bg-[#303946] placeholder:text-[#939fb2] w-[300px]"
        />
        <div className="bg-[#495568] rounded-full p-2 h-full">
          <UserRoundIcon />
        </div>
      </div>
    </div>
  );
}
