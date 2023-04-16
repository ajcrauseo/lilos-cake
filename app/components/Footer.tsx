import Link from 'next/link';
import { BsInstagram, BsTiktok, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  // Links Redes Sociales
  const INSTAGRAM_URL = 'https://www.instagram.com/lilos.cake/';
  const TIKTOK_URL = 'https://www.tiktok.com/@lilos.cake';
  const WHATSAPP_URL = 'https://wa.link/tu8uzx';

  return (
    <footer className='bg-secondary-b flex flex-col px-6 py-10 gap-8 md:flex-row md:justify-around'>
      {/* Redes Sociales */}
      <section>
        <h3 className='font-lobsterTwo text-lg text-center mb-6'>
          Visita mis redes
        </h3>
        <div className='flex justify-around text-primary text-xl md:gap-16'>
          <Link href={INSTAGRAM_URL} target='_blank'>
            <BsInstagram />
          </Link>
          <Link href={TIKTOK_URL} target='_blank'>
            <BsTiktok />
          </Link>
          <Link href={WHATSAPP_URL} target='_blank'>
            <BsWhatsapp />
          </Link>
        </div>
      </section>
      {/* Navegacion */}
      <section>
        <h3 className='font-lobsterTwo text-lg text-center mb-6'>Ir a...</h3>
        <div className='flex flex-col items-center gap-4 text-primary text-sm md:flex-row md:gap-8'>
          <Link href='/'>Inicio</Link>
          <Link href='/menu'>Menú</Link>
          <Link href='/acerca'>Acerca de</Link>
        </div>
      </section>
    </footer>
  );
}
