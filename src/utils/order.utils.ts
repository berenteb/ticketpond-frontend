import { DeepOrderItemDto, ExperienceDto, OrderDto } from '@/api';
import { BadgeColors } from '@/components/badge/Badge';

export function groupItemsByExperience(items: DeepOrderItemDto[]): GroupedItems[] {
  const grouped: GroupedItems[] = [];
  items.forEach((item) => {
    const existing = grouped.find((group) => group.experience.id === item.ticket.experience.id);
    if (existing) {
      existing.items.push(item);
    } else {
      grouped.push({ experience: item.ticket.experience, items: [item] });
    }
  });
  return grouped;
}

export type GroupedItems = { experience: ExperienceDto; items: DeepOrderItemDto[] };

export const OrderStatusBadgeText: Record<OrderDto['orderStatus'], string> = {
  PENDING: 'Folyamatban',
  PAID: 'Érvényes',
  CANCELLED: 'Lemondva',
};

export const PaymentStatusBadgeText: Record<OrderDto['paymentStatus'], string> = {
  UNPAID: 'Fizetésre vár',
  FAIL: 'Sikertelen fizetés',
  SUCCESS: 'Sikeres fizetés',
};

export const OrderStatusBadgeColor: Record<OrderDto['orderStatus'], BadgeColors> = {
  PENDING: BadgeColors.YELLOW,
  PAID: BadgeColors.GREEN,
  CANCELLED: BadgeColors.RED,
};

export const PaymentStatusBadgeColor: Record<OrderDto['paymentStatus'], BadgeColors> = {
  UNPAID: BadgeColors.YELLOW,
  FAIL: BadgeColors.RED,
  SUCCESS: BadgeColors.GREEN,
};
