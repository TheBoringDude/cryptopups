import { ReactNode } from 'react';

type RenderContentProps = {
  children: ReactNode;
  className?: string;
};

export const RenderContent = ({ children, className }: RenderContentProps) => {
  return (
    <div
      className={`shadow-xl border dark:border-gray-800 rounded-lg p-8 my-12 w-11/12 sm:w-4/5 md:w-2/3 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
