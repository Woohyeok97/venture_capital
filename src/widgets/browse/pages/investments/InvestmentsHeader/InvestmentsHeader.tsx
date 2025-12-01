'use client';
// components
import { Info } from 'lucide-react';
import { InvestmentsGuide } from '@/widgets/browse/pages/investments/InvestmentsHeader/InvestmentsGuide/InvestmentsGuide';
// hooks
import { useOverlay } from '@/app/providers/OverlayProvider';

export function InvestmentsHeader() {
  const { openOverlay } = useOverlay();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">투자/M&A 탐색</h1>
        <Info
          size={16}
          className="text-text-sub cursor-pointer hover:text-foreground"
          onClick={() => openOverlay(close => <InvestmentsGuide close={close} />)}
        />
      </div>

      <div className="flex items-center gap-4 text-sm font-bold">
        <div className="flex items-center justify-between w-full max-w-80 p-4 bg-gray-900 rounded-md border border-gray-700">
          <div className="text-text-sub">총 투자금액</div>
          <div>100억+</div>
        </div>
        <div className="flex items-center justify-between w-full max-w-80 p-4 bg-gray-900 rounded-md border border-gray-700">
          <div className="text-text-sub">총 투자 건 수</div>
          <div>100건</div>
        </div>
      </div>
    </div>
  );
}
