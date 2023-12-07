import { clsx } from 'clsx';
import React from 'react';

interface CartItemCountIndicatorProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number;
}

export function CartItemCountIndicator({ count, className, ...props }: CartItemCountIndicatorProps) {
  if (count === 0) return null;
  return (
    <div
      className={clsx(
        'absolute rounded-full shadow-lg -top-1 -right-1 bg-primary-500 w-5 h-5 flex items-center justify-center text-white text-xs',
        className
      )}
      {...props}
    >
      {count}
    </div>
  );
}
