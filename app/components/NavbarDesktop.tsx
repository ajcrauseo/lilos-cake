'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const NavbarDesktop = () => {
  return (
    <nav className='hidden md:flex w-1/3 h-auto fixed z-30 top-0 right-0 bg-secondary-b bg-opacity-80 backdrop-blur-sm rounded-bl-lg'>
      <ul className='w-full flex justify-around py-4 font-lobsterTwo text-xl text-dark'>
        <motion.li
          whileHover={{
            color: '#7C3C33',
          }}
        >
          <Link href='/'>Inicio</Link>
        </motion.li>
        <motion.li
         whileHover={{
          color: '#7C3C33',
        }}
        >
          <Link href='/menu'>Menú</Link>
        </motion.li>
        <motion.li
         whileHover={{
          color: '#7C3C33',
        }}
        >
          <Link href='/acerca'>Acerca de</Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
