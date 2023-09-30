import { clsx } from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'subtle';
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx('px-20 py-3 rounded-md transition-colors', {
        'bg-primary-500 hover:bg-opacity-80 text-white shadow-md shadow-primary-300': variant === 'primary',
        'border-2 border-primary-500': variant === 'secondary',
        'hover:bg-primary-500 hover:bg-opacity-20': variant === 'subtle' || variant === 'secondary',
      })}
      {...props}
    />
  );
}
