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
    <div className='relative flex flex-col items-center justify-between w-[320px] h-[450px] rounded-xl p-5 bg-secondary-a font-lobsterTwo text-dark shadow-lg md:hidden'>
      <div className='w-[280px] h-auto bg-slate-400'>
        <Image
          src={product.image.url}
          alt={product.name}
          width={280}
          height={280}
        />
      </div>
      <h3 className='text-2xl -mt-8 text-primary font-semibold text-center'>
        {product.name}
      </h3>
      <div className='w-full flex items-center justify-between px-4'>
        <p className='text-xl font-lato'>{product.price.formatted_with_symbol}</p>
        <button
          onClick={handleShowDescription}
          className='border-2 border-primary w-[130px] py-1 rounded-full text-lg'
        >
          Saber más...
        </button>
      </div>
      {showDescription && (
        <div className='bg-secondary-a bg-opacity-75 backdrop-blur-sm absolute top-0 h-full w-full rounded-xl p-5 shadow-lg text-dark'>
          <MdClose onClick={handleShowDescription} className='text-2xl mb-10' />
          <div className='flex flex-col h-3/4 justify-between text-center'>
            <div>
              <h3 className='text-2xl -mt-8 font-lato text-semibold'>{product.name}</h3>
              <p className='text-primary text-lg font-lato'>Detalles</p>
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{ __html: product.description }}
                className='text-xl font-lato'
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
