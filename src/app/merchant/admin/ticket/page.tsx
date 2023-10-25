'use client';

import { Button } from '@/components/button/Button';
import { Spinner } from '@/components/spinner/Spinner';
import { TicketListItem } from '@/components/ticket-list-item/TicketListItem';
import { useMerchantTickets } from '@/hooks/merchant/ticket/useMerchantTickets';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default withPageAuthRequired(function MerchantTicketList() {
  const { data, isLoading } = useMerchantTickets();
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2>Jegyek</h2>
        <Link href={`/merchant/admin/ticket/create`}>
          <Button>Új jegy</Button>
        </Link>
      </div>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((ticket) => (
          <li key={ticket.id}>
            <TicketListItem ticket={ticket} href={`/merchant/admin/ticket/${ticket.id}`} />
          </li>
        ))}
        {data?.length === 0 && <p>Nem hoztál még létre jegyet.</p>}
      </ul>
    </>
  );
});
