'use client';

import { TProduct } from '@/index';
import Image from 'next/image';
import { useState } from 'react';

import { MdClose } from 'react-icons/md';

type Props = {
  product: TProduct;
};

const ProductCard = ({ product }: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className='relative w-[320px] h-[450px] grid grid-rows-5 grid-cols-2 rounded-xl p-5 bg-secondary-a font-lobsterTwo text-dark shadow-xl md:w-[460px] md:h-[220px] md:grid-cols-4 md:p-2'>
      {/* IMAGEN */}
      <div className='w-[280px] h-auto bg-slate-400 rounded row-span-3 md:w-[180px] md:h-auto md:row-span-5 md:col-span-2 md:place-self-center'>
        <Image
          src={product.image.url}
          alt={product.name}
          width={280}
          height={280}
          className='rounded md:w-[200px] md:h-auto'
        />
      </div>
      {/* TITULO */}
      <h3 className='col-span-2 self-end text-2xl text-primary font-semibold text-center md:row-span-1 md:self-center md:text-xl'>
        {product.name}
      </h3>
      {/* DETALLES */}

      <div
        dangerouslySetInnerHTML={{ __html: product.description }}
        className='hidden px-2 col-span-2 row-span-3 place-self-center text-center font-lato md:flex'
      ></div>

      <p className='row-span-1 col-span-1 self-end pb-1 ml-2 text-xl font-lato md:col-start-4 md:row-start-5 md:place-self-center md:text-lg'>
        {product.price.formatted_with_symbol}
      </p>

      <button
        onClick={handleShowDescription}
        className='row-span-1 col-span-1 place-self-end border-2 border-primary w-[130px] py-1 mr-2 rounded-full text-lg md:hidden'
      >
        Saber más...
      </button>

      {/* DETALLES MOBILE */}
      {showDescription && (
        <div className='bg-secondary-a bg-opacity-80 backdrop-blur-sm absolute top-0 h-full w-full rounded-xl p-5 shadow-lg text-dark md:hidden'>
          <MdClose onClick={handleShowDescription} className='text-2xl mb-10' />
          <div className='flex flex-col h-3/4 justify-between text-center'>
            <div>
              {/* TITULO */}
              <h3 className='text-2xl -mt-8 font-lato text-semibold'>
                {product.name}
              </h3>
              <p className='text-primary text-lg font-lato'>Detalles</p>
            </div>
            {/* DESCRIPCION */}
            <div>
              <p
                dangerouslySetInnerHTML={{ __html: product.description }}
                className='text-xl font-lato text-black'
              ></p>
            </div>

            <p className='text-2xl text-primary font-lato'>
              Precio: {product.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
