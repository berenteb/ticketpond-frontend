'use client';

import { Button, ButtonProps } from '@/components/button/Button';
import { CartItemCountIndicator } from '@/components/cart/CartItemCountIndicator';
import { useAddToCartForCustomer } from '@/hooks/useAddToCartForCustomer';
import { useCart } from '@/hooks/useCart';
import { useMemo } from 'react';
import { TbShoppingCart } from 'react-icons/tb';

interface AddToCartButtonProps extends Omit<ButtonProps, 'onClick'> {
  ticketId: string;
}

export function AddToCartButton({ ticketId, iconBefore, ...props }: AddToCartButtonProps) {
  const { trigger, isMutating } = useAddToCartForCustomer();
  const { data, mutate } = useCart();
  const onClick = () => {
    trigger({ ticketId, quantity: 1 }).then(mutate);
  };
  const sameTicketCount = useMemo(
    () => data?.items.filter((item) => item.ticketId === ticketId).length ?? 0,
    [data?.items]
  );
  return (
    <div className='relative'>
      <Button isLoading={isMutating} onClick={onClick} iconBefore={iconBefore ?? TbShoppingCart} {...props} />
      <CartItemCountIndicator className='bg-primary-700' count={sameTicketCount} />
    </div>
  );
}