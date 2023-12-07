import { MobileNavbar } from '@/components/navbar/MobileNavbar';
import { Navbar } from '@/components/navbar/Navbar';
import { UserProvider } from '@auth0/nextjs-auth0/client';
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
      <UserProvider>
        <body className={inter.className}>
          <Navbar />
          <MobileNavbar />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
