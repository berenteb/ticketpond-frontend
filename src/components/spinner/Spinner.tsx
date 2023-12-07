import { clsx } from 'clsx';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Spinner({ className, size = 'md', ...props }: SpinnerProps) {
  return (
    <div
      className={clsx(
        'rounded-full  border-primary-100 border-r-primary-500 animate-spin',
        {
          'w-5 h-5 border-2': size === 'sm',
          'w-10 h-10 border-4': size === 'md',
          'w-20 h-20 border-8': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}
