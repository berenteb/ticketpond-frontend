'use client';

import { Button } from '@/components/button/Button';
import { CartTicketGroup } from '@/components/cart-item-card/CartTicketGroup';
import { useCart } from '@/hooks/useCart';
import { groupItemsByExperience } from '@/utils/cart.utils';
import Link from 'next/link';

export default function CartPage() {
  const { data, mutate } = useCart();
  const groupedItems = groupItemsByExperience(data?.items ?? []);
  return (
    <main>
      <h1>Kosár</h1>
      {groupedItems.length === 0 && (
        <div className='flex flex-col gap-5 items-center'>
          <h2>A kosár üres.</h2>
          <Link href='/'>
            <Button>Vásárlás folytatása</Button>
          </Link>
        </div>
      )}
      <ul>
        {groupedItems.map((groupedItem) => (
          <li key={groupedItem.experience.id}>
            <CartTicketGroup groupedItem={groupedItem} onCountChange={mutate} />
          </li>
        ))}
      </ul>
    </main>
  );
}
