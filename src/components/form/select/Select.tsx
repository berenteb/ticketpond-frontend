import { clsx } from 'clsx';
import { forwardRef, ReactNode } from 'react';

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  suffix?: ReactNode;
  error?: string;
}

const Select = forwardRef(function Select(
  { label, error, className, suffix, ...props }: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  return (
    <div className={clsx('inputGroup', className)}>
      <label htmlFor={props.name}>{label}</label>
      <div className='flex'>
        <select ref={ref} className={clsx({ invalid: !!error, 'rounded-r-none border-r-0': !!suffix })} {...props} />
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

export { Select };
