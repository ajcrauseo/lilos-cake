'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdArrowForwardIos, MdClose } from 'react-icons/md';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <MdClose
          className='fixed z-40 left-3 top-3 text-3xl md:hidden'
          onClick={handleIsOpen}
        />
      )}
      {!isOpen && (
        <MdArrowForwardIos
          className={'fixed z-40 left-3 top-3 text-3xl md:hidden'}
          onClick={handleIsOpen}
        />
      )}

      {isOpen && (
        <nav className='w-screen h-auto fixed z-30 top-0 md:hidden'>
          <ul className='bg-secondary-a bg-opacity-50 backdrop-blur-sm w-full flex justify-around py-4 pl-10 font-lobsterTwo text-xl text-dark'>
            <li>
              <Link href='/' onClick={handleIsOpen}>Inicio</Link>
            </li>
            <li>
              <Link href='/menu' onClick={handleIsOpen}>Menú</Link>
            </li>
            <li>
              <Link href='/acerca' onClick={handleIsOpen}>Acerca de</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavbarMobile;
