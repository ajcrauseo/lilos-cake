import Link from 'next/link';
import { HTMLAttributes } from 'react';

const NavbarMobile = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className='w-screen h-auto fixed z-20 top-0'>
      <ul className='bg-secondary-a bg-opacity-50 backdrop-blur-sm w-full flex justify-around py-4 pl-10 font-lobsterTwo text-xl text-dark'>
        <li>
          <Link href='/'>Inicio</Link>
        </li>
        <li>
          <Link href='/menu'>Menú</Link>
        </li>
        <li>
          <Link href='/acerca'>Acerca de</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
