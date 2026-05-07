import { MOCK_PRODUCTS } from '@/mocks/products';
import { ProductCard } from '@/components/molecules/ProductCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl mb-4">
          The Premium Collection
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl">
          Discover our curated selection of high-end tech and lifestyle
          accessories, designed for quality and performance.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
