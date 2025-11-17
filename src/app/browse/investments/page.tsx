// components
import { InvestmentsHeader } from '@/widgets/page/investments/InvestmentsHeader';
import { InvestmentsOverview } from '@/widgets/page/investments/InvestmentsOverview';
import { InvestmentsTable } from '@/widgets/page/investments/InvestmentsTable/ui/InvestmentsTable';
// types
import { InvestmentType } from '@/entities/investments/investments.type';

export default async function InvestmentsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/investments`, {
    cache: 'no-store',
  });
  const data: InvestmentType[] = await response.json();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 p-4">
        <InvestmentsHeader />
        <InvestmentsOverview data={data} />
      </div>

      <InvestmentsTable data={data} />
    </div>
  );
}
