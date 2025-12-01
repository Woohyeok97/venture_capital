// components
import { MenuTabs } from '../../widgets/browse/ui/menuTabs/MenuTabs';

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
