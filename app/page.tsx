// import Image from 'next/image';
import { Lobster_Two, Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '400' });
const lobsterTwo = Lobster_Two({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className={`${lobsterTwo.className} text-3xl`}>Lilo{"'"}s Cake</h1>
    </main>
  );
}
