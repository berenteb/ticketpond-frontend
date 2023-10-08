import { clsx } from 'clsx';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'subtle';
  iconBefore?: IconType;
  iconAfter?: IconType;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  iconAfter,
  iconBefore,
  isLoading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;
  const isIconOnly = !children && (IconBefore || IconAfter);
  return (
    <button
      className={clsx(
        'px-20 py-3 rounded-md transition-colors',
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
      {IconBefore && <IconBefore size={30} />}
      {children}
      {IconAfter && <IconAfter size={30} />}
    </button>
  );
}
