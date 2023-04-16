import LogoHeader from '@components/LogoHeader';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='relative bg-light'>
      <LogoHeader />
      {children}
    </main>
  );
}
