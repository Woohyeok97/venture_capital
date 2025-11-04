// components
import { MenuTabs } from './MenuTabs';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MenuTabs />
      {children}
    </div>
  );
}
