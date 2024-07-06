// app/green/layout.tsx
import { ReactNode } from 'react';

interface GreenLayoutProps {
  children: ReactNode;
}

const GreenLayout = ({ children }: GreenLayoutProps) => {
  return <>{children}</>;
};

export default GreenLayout;
