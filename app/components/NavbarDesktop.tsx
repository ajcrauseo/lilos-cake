import Link from 'next/link';

const NavbarDesktop = () => {
  return (
    <nav className='hidden md:flex w-1/2 h-auto fixed z-30 top-0 right-0'>
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
    </nav>
  );
};

export default NavbarDesktop;
