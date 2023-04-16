import Link from 'next/link';
import Image from 'next/image';

import logo from '@public/logoLilosCake.png';
import cake from '@public/cake.png';
import triangule from '@public/triangule.png';

export default function Home() {
  return (
    <main className='min-h-screen relative bg-mobile bg-cover md:bg-desktop'>
      <Image alt='triangulo' src={triangule} className='w-96 absolute z-0' />

      <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen'>
        <Image
          src={logo}
          alt='Logo Lilos Cake'
          width={260}
          className='w-[260px] md:w-[300px]'
        />

        <Link
          href='/menu'
          className=' bg-primary font-lobsterTwo text-lg text-light text-center py-4 px-8 rounded-full w-56 md:col-start-1 md:self-baseline md:mt-24'
        >
          Conoce el menú
        </Link>

        <Image
          src={cake}
          alt='Cake'
          className='md:col-start-2 w-[320px] md:w-[400px]'
        />
      </div>

      <Image
        alt='triangulo'
        src={triangule}
        className='w-96 absolute z-0 bottom-0 right-0 rotate-180'
      />
    </main>
  );
}
