// icons
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <div className="bg-gray-900 py-8 px-4 font-bold border-t border-gray-700">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Landmark />
          Venture Capital
        </div>
        <div className="text-text-sub text-sm">한국 스타트업 투자 데이터베이스</div>
      </div>
    </div>
  );
}
