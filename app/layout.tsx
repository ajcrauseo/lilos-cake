// import Link from 'next/link';
import { Lobster_Two, Lato } from 'next/font/google';

// import { MdOutlineShoppingCart } from 'react-icons/md';

import './globals.css';

import NavbarMobile from '@components/NavbarMobile';
import NavbarDesktop from '@components/NavbarDesktop';
import Footer from '@components/Footer';

export const metadata = {
  title: "Lilo's Cake",
  description: "Tienda Online de Lilo's Cake",
};

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  variable: '--font-lobster-two',
  weight: ['400', '700'],
  preload: false,
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='es'
      className={`${lobsterTwo.variable} ${lato.variable} text-dark`}
    >
      <body className='bg-light'>
        <header>
          <NavbarMobile />
          <NavbarDesktop />
          {/* TODO: Implementar carrito de compras */}
          {/* <Link href='/carrito'>
            <MdOutlineShoppingCart className='fixed z-20 right-3 top-3 text-3xl' />
          </Link> */}
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
