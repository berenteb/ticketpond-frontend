'use client';

import { Button } from '@/components/button/Button';
import { TicketListItem } from '@/components/ticket-list-item/TicketListItem';
import { useTicketsForMerchant } from '@/hooks/useTicketsForMerchant';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default withPageAuthRequired(function AdminTicketList() {
  const { data } = useTicketsForMerchant();
  if (!data)
    return (
      <>
        <h2>Jegyek</h2>
        <p>Betöltés...</p>
      </>
    );
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2>Jegyek</h2>
        <Link href={`/merchant/admin/ticket/create`}>
          <Button>Új jegy</Button>
        </Link>
      </div>
      <ul className='flex flex-col gap-5'>
        {data.map((ticket) => (
          <li key={ticket.id}>
            <TicketListItem ticket={ticket} href={`/merchant/admin/ticket/${ticket.id}`} />
          </li>
        ))}
        {data.length === 0 && <p>Nem hoztál még létre jegyet.</p>}
      </ul>
    </>
  );
});
