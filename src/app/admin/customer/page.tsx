'use client';
import { CustomerListItem } from '@/components/customer-list-item/CustomerListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useAdminCustomers } from '@/hooks/admin/customer/useAdminCustomers';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminCustomerList() {
  const { data, isLoading } = useAdminCustomers();
  return (
    <>
      <h2>Felhasználók</h2>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((customer) => (
          <li key={customer.id}>
            <CustomerListItem customer={customer} />
          </li>
        ))}
      </ul>
    </>
  );
});
