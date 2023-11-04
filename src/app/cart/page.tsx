'use client';

import { Button } from '@/components/button/Button';
import { CartTicketGroup } from '@/components/cart-item-card/CartTicketGroup';
import { Title } from '@/components/title/Title';
import { useCart } from '@/hooks/customer/cart/useCart';
import { useCheckout } from '@/hooks/customer/cart/useCheckout';
import { groupItemsByExperience } from '@/utils/cart.utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { data, mutate } = useCart();
  const checkout = useCheckout();
  const router = useRouter();
  const groupedItems = groupItemsByExperience(data?.items ?? []);

  const onCheckout = async () => {
    checkout.trigger().then((url) => router.push(url));
  };
  return (
    <main>
      <Title>Kosár</Title>
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
      {groupedItems.length > 0 && <Button onClick={onCheckout}>Tovább a fizetéshez</Button>}
    </main>
  );
}
