'use client';
import { Button } from '@/components/button/Button';
import { CartItemCountIndicator } from '@/components/cart/CartItemCountIndicator';
import { useCart } from '@/hooks/customer/cart/useCart';
import { TbShoppingCart } from 'react-icons/tb';

export function Cart() {
  const { data } = useCart();
  const itemCount = data?.items.length ?? 0;
  return (
    <div className='relative'>
      <Button as='link' href='/cart' variant='subtle' iconBefore={TbShoppingCart} />
      <CartItemCountIndicator count={itemCount} />
    </div>
  );
}
