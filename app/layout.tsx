import { Lobster_Two, Lato } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: "Lilo's Cake",
  description: "Tienda Online de Lilo's Cake",
};

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  variable: '--font-lobster-two',
  display: 'swap',
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' className={`${lobsterTwo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
