import { DropdownMenu } from '@/components/dropdown-menu/DropdownMenu';
import { TextLink } from '@/components/text-Link/TextLink';
import { usePermissions } from '@/hooks/customer/profile/usePermissions';
import { Permission } from '@/utils/permission.utils';

export function AdminMenu() {
  const permissions = usePermissions();
  const isAdmin = permissions.data?.includes(Permission.ADMIN_ALL);
  const isMerchant = permissions.data?.includes(Permission.MERCHANT_ALL);

  if (isAdmin && isMerchant)
    return (
      <DropdownMenu
        title='Admin'
        items={[
          { title: 'Kereskedő admin', href: '/merhcant/admin' },
          { title: 'Szuperdmin', href: '/admin' },
        ]}
      />
    );

  if (isAdmin) return <TextLink href={'/admin'}>Szuperadmin</TextLink>;
  if (isMerchant) return <TextLink href={'/merchant/admin'}>Kereskedő admin</TextLink>;

  return null;
}
