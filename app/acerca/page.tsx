import Image from 'next/image';
import logoLilosCake from '@public/logoLilosCake.png';

export default function AcercaDePage() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center gap-4 p-6 pt-14 bg-mobile bg-cover md:bg-desktop md:pt-24 md:justify-start md:gap-12'>
      <h2 className='text-3xl font-lobsterTwo'>
        Acerca de Lilo{`'`}s Cake
      </h2>
      <section className='w-full flex flex-col items-center justify-center font-lato md:flex-row md:gap-12'>
        <Image src={logoLilosCake} alt="Logo Lilo's Cake" width={340} height={340} />
        <div>
          <p className='bg-light bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded text-black mb-4 md:w-[600px]'>
            Hola, soy Lili 👋, para mí es un placer que estés por aquí y poder
            saludarte.
          </p>
          <p className='bg-light bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded text-black mb-4 md:w-[600px]'>
            Soy quien los atiende y elabora sus postres y pedidos con amor. De
            mi apodo {`"Lili"`} salió el nombre Lilo{`'`}s Cake el cual, cómo
            casi todos los emprendimientos modernos, comenzó ésta idea en tiempo
            de pandemia pero se convirtió en mi sueño y pasión.
          </p>
          <p className='bg-light bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded text-black mb-4 md:w-[600px]'>
            Tengo 22 años y llevo 3 años en este hermoso mundo azucarado,
            aprendiendo, capacitándome, innovando y creando los postres más
            deliciosos para ustedes. Gracias por confiar en mi trabajo. Siempre
            es un placer ser parte de sus momentos dulces.
          </p>
        </div>
      </section>
    </main>
  );
}
