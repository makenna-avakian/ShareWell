// app/green/layout.tsx
import { ReactNode } from 'react';

interface RedLayoutProps {
  children: ReactNode;
}

const RedLayout = ({ children }: RedLayoutProps) => {
  return <>{children}</>;
};

export default RedLayout;
