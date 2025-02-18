import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata = {
  title: 'Smart Shop - Sua Loja Online',
  description: 'Encontre os melhores produtos pelos melhores preços',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
