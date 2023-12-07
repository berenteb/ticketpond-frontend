import { clsx } from 'clsx';
import { forwardRef, ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  suffix?: ReactNode;
  error?: string;
}

const Input = forwardRef(function Input(
  { label, type = 'text', error, className, suffix, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={clsx('inputGroup', className)}>
      <label htmlFor={props.name}>{label}</label>
      <div className='flex'>
        <input
          ref={ref}
          className={clsx({ invalid: !!error, 'rounded-r-none border-r-0': !!suffix })}
          type={type}
          {...props}
        />
        {suffix && (
          <div className='rounded-r-md bg-slate-50 border border-slate-200 justify-center flex items-center px-3'>
            {suffix}
          </div>
        )}
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
});

export { Input };
