import { Spinner } from '@/components/spinner/Spinner';
import { clsx } from 'clsx';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'subtle';
  iconBefore?: IconType;
  iconAfter?: IconType;
  isLoading?: boolean;
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
  ...props
}: ButtonProps) {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;
  const isIconOnly = !children && (IconBefore || IconAfter);
  const classNames = clsx(
    'px-20 py-3 rounded-md transition-colors flex gap-3 items-center justify-center truncate',
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
      {IconBefore && !isLoading && <IconBefore size={20} />}
      {isLoading && <Spinner size='sm' />}
      {children}
      {IconAfter && <IconAfter size={20} />}
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
