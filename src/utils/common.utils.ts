import { hu } from 'date-fns/locale';
import format from 'date-fns/format';

export function formatDateHu(date: Date): string {
  return format(date, "yyyy-MM-dd'T'HH:mm", { locale: hu });
}

export function getSuffixedTitle(title: string, ...suffix: string[]): string {
  let suffixedTitle = title;
  suffix.forEach((s) => {
    suffixedTitle += ` | ${s}`;
  });
  suffixedTitle += ' | Ticketpond';
  return suffixedTitle;
}
