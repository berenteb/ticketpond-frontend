import { CartItemDto, DeepTicketDto, ExperienceDto } from '@/api';

export function groupItemsByExperience(items: CartItemDto[]): GroupedCartItem[] {
  const groupedItems: GroupedCartItem[] = [];
  for (const item of items) {
    const existingItem = groupedItems.find((groupedItem) => groupedItem.experience.id === item.ticket.experience.id);
    if (existingItem) {
      const existingTicket = existingItem.ticketGroups.find((ticketGroup) => ticketGroup.ticket.id === item.ticket.id);
      if (existingTicket) {
        existingTicket.count++;
      } else {
        existingItem.ticketGroups.push({ ticket: item.ticket, count: 1 });
      }
    } else {
      groupedItems.push({ experience: item.ticket.experience, ticketGroups: [{ ticket: item.ticket, count: 1 }] });
    }
  }
  return groupedItems;
}

export type GroupedCartItem = { experience: ExperienceDto; ticketGroups: GroupedTicketItem[] };
export type GroupedTicketItem = { ticket: DeepTicketDto; count: number };
