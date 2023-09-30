import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticketpond',
  description: 'Ticket sales for your event',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='hu'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
