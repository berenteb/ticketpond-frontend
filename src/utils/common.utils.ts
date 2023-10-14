import { hu } from 'date-fns/locale';
import format from 'date-fns/format';

export function formatDateHu(date: Date): string {
  return format(date, "yyyy-MM-dd'T'HH:mm", { locale: hu });
}
