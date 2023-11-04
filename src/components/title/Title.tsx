import { getSuffixedTitle } from '@/utils/common.utils';

interface TitleProps {
  children: string | string[];
}

export function Title({ children }: TitleProps) {
  if (Array.isArray(children)) children = children.join(' ');
  return <title>{getSuffixedTitle(children)}</title>;
}
