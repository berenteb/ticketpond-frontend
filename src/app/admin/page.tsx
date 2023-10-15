'use client';

import { DashTile } from '@/components/dash-tile/DashTile';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { TbBuildingStore, TbCalendarEvent, TbReceipt, TbTicket, TbUsers } from 'react-icons/tb';

export default withPageAuthRequired(function AdminLanding() {
  return (
    <div className='flex gap-5 flex-wrap'>
      <DashTile href='/admin/merchant' title='Kereskedők' icon={TbBuildingStore} color='#593C8F' />
      <DashTile href='/admin/customer' title='Vásárlók' icon={TbUsers} color='#171738' />
      <DashTile href='/admin/order' title='Rendelések' icon={TbReceipt} color='#089B94' />
      <DashTile href='/admin/experience' title='Élmények' icon={TbCalendarEvent} color='#DB5461' />
      <DashTile href='/admin/ticket' title='Jegyek' icon={TbTicket} color='#274690' />
    </div>
  );
});
