import { SVGProps } from 'react';

export function Logo({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width ?? '30'}
      height={height ?? '30'}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='200' height='200' fill='#6153CC' />
      <path
        d='M41.6162 92.5129L58.9451 92.5129'
        stroke='white'
        strokeWidth='12.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M111.829 92.2649C106.547 97.5467 98.1168 97.6805 93 92.5637'
        stroke='white'
        strokeWidth='12.5'
        strokeLinecap='round'
      />
      <path
        d='M145.589 92.5129L162.918 92.5129'
        stroke='white'
        strokeWidth='12.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M41.6163 156.314L41.6163 57.8548C41.6163 53.2589 43.442 48.8512 46.6918 45.6014C49.9416 42.3516 54.3492 40.5259 58.9451 40.5259L84.9384 40.5259C84.9384 45.1218 86.7642 49.5295 90.014 52.7793C93.2637 56.029 97.6714 57.8548 102.267 57.8548C106.863 57.8548 111.271 56.029 114.521 52.7793C117.77 49.5295 119.596 45.1218 119.596 40.5259L145.589 40.5259C150.185 40.5259 154.593 42.3516 157.843 45.6014C161.093 48.8512 162.918 53.2589 162.918 57.8548L162.918 156.314'
        stroke='white'
        strokeWidth='12.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.0201 157.303C24.7173 158.644 27.6736 159.384 30.6845 159.47C34.0593 159.54 37.4005 158.788 40.4197 157.279C43.4388 155.769 46.0451 153.547 48.0134 150.805C49.9817 148.063 52.588 145.841 55.6071 144.331C58.6263 142.822 61.9675 142.07 65.3423 142.141C68.717 142.07 72.0583 142.822 75.0774 144.331C78.0966 145.841 80.7028 148.063 82.6711 150.805C84.6394 153.547 87.2457 155.769 90.2648 157.279C93.284 158.788 96.6252 159.54 100 159.47C103.375 159.54 106.716 158.788 109.735 157.279C112.754 155.769 115.361 153.547 117.329 150.805C119.297 148.063 121.903 145.841 124.923 144.331C127.942 142.822 131.283 142.07 134.658 142.141C138.032 142.07 141.374 142.822 144.393 144.331C147.412 145.841 150.018 148.063 151.987 150.805C153.955 153.547 156.561 155.769 159.58 157.279C162.599 158.788 165.941 159.54 169.315 159.47C172.326 159.384 175.283 158.644 177.98 157.303'
        stroke='white'
        strokeWidth='12.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}