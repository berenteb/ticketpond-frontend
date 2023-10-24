'use client';

import { TicketListItem } from '@/components/ticket-list-item/TicketListItem';
import { useAdminTickets } from '@/hooks/admin/ticket/useAdminTickets';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminTicketList() {
  const { data } = useAdminTickets();
  if (!data)
    return (
      <>
        <h2>Jegyek</h2>
        <p>Betöltés...</p>
      </>
    );
  return (
    <>
      <h2>Jegyek</h2>
      <ul className='flex flex-col gap-5'>
        {data.map((ticket) => (
          <li key={ticket.id}>
            <TicketListItem ticket={ticket} href={`/admin/ticket/${ticket.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
