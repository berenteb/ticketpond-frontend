import { Spinner } from '@/components/spinner/Spinner';
import { clsx } from 'clsx';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'subtle';
  iconBefore?: IconType;
  iconAfter?: IconType;
  isLoading?: boolean;
  size?: Size;
}

type ButtonProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button';
      })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        as?: 'link';
      })
  );

export function Button({
  as = 'button',
  variant = 'primary',
  iconAfter,
  iconBefore,
  isLoading,
  className,
  children,
  size = 'md',
  ...props
}: ButtonProps) {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;
  const isIconOnly = !children && (IconBefore || IconAfter);
  const iconSize = iconSizes[size];
  const classNames = clsx(
    'px-20 py-3 rounded-md transition-colors flex gap-3 items-center justify-center',
    {
      'px-3': isIconOnly,
      'bg-primary-500 hover:bg-opacity-80 text-white shadow-md shadow-primary-300': variant === 'primary',
      'border-2 border-primary-500': variant === 'secondary',
      'hover:bg-primary-500 hover:bg-opacity-20': variant === 'subtle' || variant === 'secondary',
    },
    className
  );
  const content = (
    <>
      {IconBefore && !isLoading && <IconBefore size={iconSize} />}
      {isLoading && <Spinner size='sm' />}
      {children}
      {IconAfter && <IconAfter size={iconSize} />}
    </>
  );

  if (as === 'link') {
    return (
      <Link className={classNames} {...(props as LinkProps)}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classNames} {...(props as any)}>
      {content}
    </button>
  );
}

const iconSizes: Record<Size, number> = {
  sm: 20,
  md: 30,
  lg: 40,
};
