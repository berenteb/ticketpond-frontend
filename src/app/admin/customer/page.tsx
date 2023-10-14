'use client';
import { CustomerListItem } from '@/components/customer-list-item/CustomerListItem';
import { useCustomers } from '@/hooks/useCustomers';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminCustomerList() {
  const { data } = useCustomers();
  if (!data) return <div>Loading...</div>;
  return (
    <main>
      <h1>Felhasználók</h1>
      <ul className='flex flex-col gap-5'>
        {data.map((customer) => (
          <li key={customer.id}>
            <CustomerListItem customer={customer} />
          </li>
        ))}
      </ul>
    </main>
  );
});
