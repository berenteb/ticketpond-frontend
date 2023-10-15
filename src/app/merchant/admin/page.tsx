'use client';

import { DashTile } from '@/components/dash-tile/DashTile';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { TbCalendarEvent, TbId, TbReceipt, TbTicket } from 'react-icons/tb';

export default withPageAuthRequired(function MerchantAdminLanding() {
  return (
    <div className='flex gap-5 flex-wrap'>
      <DashTile href='/merchant/admin/profile' title='Profil' icon={TbId} color='#593C8F' />
      <DashTile href='/merchant/admin/order' title='Rendelések' icon={TbReceipt} color='#089B94' />
      <DashTile href='/merchant/admin/experience' title='Élmények' icon={TbCalendarEvent} color='#DB5461' />
      <DashTile href='/merchant/admin/ticket' title='Jegyek' icon={TbTicket} color='#274690' />{' '}
    </div>
  );
});
