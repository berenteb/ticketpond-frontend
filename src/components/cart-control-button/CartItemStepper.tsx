'use client';

import { Button } from '@/components/button/Button';
import { useAddToCartForCustomer } from '@/hooks/useAddToCartForCustomer';
import { useRemoveFromCartForCustomer } from '@/hooks/useRemoveFromCartForCustomer';
import React, { HTMLAttributes } from 'react';
import { TbMinus, TbPlus, TbTrash } from 'react-icons/tb';

interface CartItemStepperProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ticketId: string;
  count: number;
  onCountChange?: () => void;
}

export function CartItemStepper({ ticketId, count, onCountChange, ...props }: CartItemStepperProps) {
  const removeItem = useRemoveFromCartForCustomer();
  const addItem = useAddToCartForCustomer();
  const onIncrement = () =>
    addItem.trigger({ ticketId, quantity: 1 }).then(() => {
      if (onCountChange) onCountChange();
    });
  const onDecrement = () =>
    removeItem.trigger({ ticketId, quantity: 1 }).then(() => {
      if (onCountChange) onCountChange();
    });

  return (
    <div className='flex items-center gap-5 rounded-full border-slate-200' {...props}>
      <Button size='sm' variant='subtle' iconBefore={count === 1 ? TbTrash : TbMinus} onClick={onDecrement} />
      <p>{count}</p>
      <Button size='sm' variant='subtle' iconBefore={TbPlus} onClick={onIncrement} />
    </div>
  );
}
