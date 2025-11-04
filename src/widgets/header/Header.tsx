// components
import { Input } from '@/shared/ui/input/input';
import { UserRoundIcon } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#1e242e]">
      <div className="flex items-center gap-4">
        <div className="text-lg font-bold">Venture Capital</div>
        <Navigation />
      </div>

      <div className="flex justify-between items-center gap-4 h-full">
        <Input name="search" placeholder="기업, 서비스, 대표자, 키워드 검색" className="h-full" />
        <div className="bg-[#495568] rounded-full p-2 h-full">
          <UserRoundIcon />
        </div>
      </div>
    </div>
  );
}
