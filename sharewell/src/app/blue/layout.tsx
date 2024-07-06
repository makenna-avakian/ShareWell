// app/green/layout.tsx
import { ReactNode } from 'react';

interface BlueLayoutProps {
  children: ReactNode;
}

const BlueLayout = ({ children }: BlueLayoutProps) => {
  return <>{children}</>;
};

export default BlueLayout;
