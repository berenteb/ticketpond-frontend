import { clsx } from 'clsx';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes, PropsWithChildren } from 'react';

export function TextLink({ className, ...props }: PropsWithChildren<LinkProps> & HTMLAttributes<HTMLAnchorElement>) {
  return <Link className={clsx('hover:text-primary-500 hover:underline transition-colors', className)} {...props} />;
}
