import ProductCard from '@components/ProductCard';
import { TProduct } from '@/index';

const getProducts = async () => {
  // SSR
  const response = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  // Incremental Static Regeneration (ISR)
  // const response = await fetch('https://lilos-cake.vercel.app/api/products', {
  //   next: {
  //     revalidate: 60,
  //   },
  // });

  const data = await response.json();

  return data;
};

export default async function MenuPage() {
  const productsData = getProducts();
  const [{ data: products }] = await Promise.all([productsData]);

  return (
    <div className='flex flex-col items-center p-6 pt-3 gap-6 relative md:pt-14'>
      <h2 className='mb-2 font-lobsterTwo text-3xl'>Menú</h2>
      <section className='w-full flex flex-wrap justify-center gap-6'>
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
