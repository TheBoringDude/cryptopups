import { ReactNode } from 'react';

type RenderContentProps = {
  children: ReactNode;
};

export const RenderContent = ({ children }: RenderContentProps) => {
  return (
    <div className="shadow-lg rounded-lg p-8 my-12 w-5/6 sm:w-4/5 md:w-2/3 mx-auto">{children}</div>
  );
};
