import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('bg-white rounded-lg shadow-lg overflow-hidden', className)} {...props} />;
}
