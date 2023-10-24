'use client';
import { Button } from '@/components/button/Button';
import { CartItemCountIndicator } from '@/components/cart/CartItemCountIndicator';
import { useCart } from '@/hooks/customer/cart/useCart';
import Link from 'next/link';
import { TbShoppingCart } from 'react-icons/tb';

export function Cart() {
  const { data } = useCart();
  const itemCount = data?.items.length ?? 0;
  return (
    <div className='relative'>
      <Link href={'/cart'}>
        <Button size='sm' variant='subtle' iconBefore={TbShoppingCart} />
      </Link>
      <CartItemCountIndicator count={itemCount} />
    </div>
  );
}
