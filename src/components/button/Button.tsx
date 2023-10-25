import { Spinner } from '@/components/spinner/Spinner';
import { clsx } from 'clsx';
import React from 'react';
import { IconType } from 'react-icons';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'subtle';
  iconBefore?: IconType;
  iconAfter?: IconType;
  isLoading?: boolean;
  size?: Size;
}

export function Button({
  variant = 'primary',
  iconAfter,
  iconBefore,
  isLoading,
  disabled,
  className,
  children,
  size = 'md',
  ...props
}: ButtonProps) {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;
  const isIconOnly = !children && (IconBefore || IconAfter);
  const iconSize = iconSizes[size];
  return (
    <button
      className={clsx(
        'px-20 py-3 rounded-md transition-colors flex gap-3 items-center justify-center',
        {
          'px-3': isIconOnly,
          'bg-primary-500 hover:bg-opacity-80 text-white shadow-md shadow-primary-300': variant === 'primary',
          'border-2 border-primary-500': variant === 'secondary',
          'hover:bg-primary-500 hover:bg-opacity-20': variant === 'subtle' || variant === 'secondary',
        },
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {IconBefore && !isLoading && <IconBefore size={iconSize} />}
      {isLoading && <Spinner size='sm' />}
      {children}
      {IconAfter && <IconAfter size={iconSize} />}
    </button>
  );
}

const iconSizes: Record<Size, number> = {
  sm: 20,
  md: 30,
  lg: 40,
};
