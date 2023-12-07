'use client';

import { Button } from '@/components/button/Button';
import { CartItemCountIndicator } from '@/components/cart/CartItemCountIndicator';
import { useAddToCart } from '@/hooks/customer/cart/useAddToCart';
import { useCart } from '@/hooks/customer/cart/useCart';
import { useMemo } from 'react';
import { TbShoppingCart } from 'react-icons/tb';

interface AddToCartButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  ticketId: string;
}

export function AddToCartButton({ ticketId, ...props }: AddToCartButtonProps) {
  const { trigger, isMutating } = useAddToCart();
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
      <Button isLoading={isMutating} onClick={onClick} iconBefore={TbShoppingCart} {...props} />
      <CartItemCountIndicator className='bg-primary-700' count={sameTicketCount} />
    </div>
  );
}
