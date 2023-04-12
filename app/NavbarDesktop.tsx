import Link from 'next/link';
import { HTMLAttributes } from 'react';

const NavbarDesktop = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className='hidden md:flex w-1/2 h-auto fixed z-20 top-0 right-0'>
      <ul className='w-full flex justify-around py-4 pl-10 font-lobsterTwo text-xl text-dark'>
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

export default NavbarDesktop;
