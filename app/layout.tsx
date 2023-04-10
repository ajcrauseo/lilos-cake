import './globals.css';

export const metadata = {
  title: "Lilo's Cake",
  description: 'Tienda Online de Lilo\'s Cake',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
