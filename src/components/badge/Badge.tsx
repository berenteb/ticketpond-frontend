import { clsx } from 'clsx';

interface BadgeProps {
  text: string;
  color: BadgeColors;
}

export function Badge({ text = 'Ismeretlen', color = BadgeColors.GRAY }: BadgeProps) {
  return (
    <div className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', color)}>
      {text.toUpperCase()}
    </div>
  );
}

export enum BadgeColors {
  PRIMARY = 'bg-primary-100 text-primary-800',
  RED = 'bg-secondary-100 text-secondary-800',
  GREEN = 'bg-green-100 text-green-800',
  YELLOW = 'bg-yellow-100 text-yellow-800',
  BLUE = 'bg-blue-100 text-blue-800',
  GRAY = 'bg-slate-100 text-slate-800',
}
