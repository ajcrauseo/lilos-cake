import Image from 'next/image';
import Link from 'next/link';

import logoLilosCake from '@public/logoLilosCake.png';

export default function LogoHeader() {
  return (
    <Link href='/' className='hidden fixed top-1 left-4 w-20 h-20 z-30 md:flex'>
      <Image
        src={logoLilosCake}
        alt="Logo Lilo's Cake"
        // className='bg-slate-400 rounded-full'
        priority
      />
    </Link>
  );
}
