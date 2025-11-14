import investmentsData from '@/entities/investments/investments.data.json';
// components
import { InvestmentsHeader } from '@/widgets/page/investments/InvestmentsHeader';
import InvestmentsOverview from '@/widgets/page/investments/InvestmentsOverview';
import { InvestmentsTable } from '@/widgets/page/investments/InvestmentsTable/ui/InvestmentsTable';
// types
import { InvestmentType } from '@/entities/investments/investments.type';

const MOCK: InvestmentType[] = investmentsData; // Mock 데이터

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 p-4">
        <InvestmentsHeader />
        <InvestmentsOverview data={MOCK} />
      </div>

      <InvestmentsTable data={MOCK} />
    </div>
  );
}
