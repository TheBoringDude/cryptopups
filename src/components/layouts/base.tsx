import { ReactNode } from 'react';
import DefaultLayout from './Default';

type BaseLayoutProps = {
  title: string;
  children: ReactNode;
};

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <DefaultLayout pageTitle={title}>
      {/* header section */}
      <header></header>

      {children}

      {/* footer section */}
      <footer></footer>
    </DefaultLayout>
  );
};
