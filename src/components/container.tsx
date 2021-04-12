import { ReactNode } from 'react';

type ContainerLayouts = 'w-4/5' | 'w-5/6' | 'w-11/12' | 'w-full';

type ContainerProps = {
  layouts?: ContainerLayouts;
  children: ReactNode;
  className?: string;
};

export const Container = ({ layouts = 'w-11/12', children, className }: ContainerProps) => {
  return <div className={`${layouts} mx-auto${className ? ` ${className}` : ''}`}>{children}</div>;
};
