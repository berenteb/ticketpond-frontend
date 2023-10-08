import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef(function Input(
  { label, type = 'text', error, className, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={clsx('inputGroup', className)}>
      <label htmlFor={props.name}>{label}</label>
      <input ref={ref} className={clsx({ invalid: !!error })} type={type} {...props} />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
});

export { Input };
