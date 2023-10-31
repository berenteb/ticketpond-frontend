import { Button } from '@/components/button/Button';
import { NotFound } from '@/components/not-found/NotFound';

export default function NotFoundPage() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center gap-10'>
        <h1>Hopp, ez az oldal nem található!</h1>
        <NotFound className='max-w-full w-52' />
        <Button as='link' href='/'>
          Máshol keresek élményt
        </Button>
      </div>
    </main>
  );
}
