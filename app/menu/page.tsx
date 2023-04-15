import ProductCard from '@components/ProductCard';
import { TProduct } from '@/index';

const getProducts = async () => {
  // SSR
  // const response = await fetch('http://localhost:3000/api/products', {
  //   cache: 'no-store',
  // });

  // Incremental Static Regeneration (ISR)
  const response = await fetch('http://localhost:3000/api/products', {
    next: {
      revalidate: 60
    }
  });

  const data = await response.json();

  return data;
};

export default async function Menu() {
  const productsData = getProducts();
  const [{ data: products }] = await Promise.all([productsData]);

  return (
    <main className='flex flex-col items-center pt-14 p-6 bg-light gap-6 relative'>
      <h2 className='mb-2 font-lobsterTwo text-3xl'>Menú</h2>

      {products.map((product: TProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
