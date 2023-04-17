'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { BsChevronRight, BsX } from 'react-icons/bs';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center md:hidden'>
      {isOpen && (
        <motion.div
          whileTap={{ scale: 1.5 }}
          onClick={handleIsOpen}
          className='fixed z-40 left-3 top-[14px] text-3xl md:hidden'
        >
          <BsX />
        </motion.div>
      )}
      {!isOpen && (
        <motion.div
          whileTap={{ scale: 1.5 }}
          className='fixed z-40 left-3 top-[14px] text-2xl md:hidden'
          onClick={handleIsOpen}
        >
          <BsChevronRight />
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className='w-screen h-auto fixed z-30 top-0 md:hidden'
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.4 }}
          >
            <ul className='bg-secondary-a bg-opacity-50 backdrop-blur-sm w-full flex justify-around items-center py-4 pl-10 font-lobsterTwo text-xl text-dark'>
              <motion.li whileTap={{ scale: 0.9 }}>
                <Link href='/' onClick={handleIsOpen}>
                  Inicio
                </Link>
              </motion.li>
              <motion.li whileTap={{ scale: 0.9 }}>
                <Link href='/menu' onClick={handleIsOpen}>
                  Menú
                </Link>
              </motion.li>
              <motion.li whileTap={{ scale: 0.9 }}>
                <Link href='/acerca' onClick={handleIsOpen}>
                  Acerca de
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
