'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { Button } from '@/components/atoms/Button';
import { useCartStore } from '@/stores/cartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-lg font-bold text-black">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="text-sm text-zinc-600 line-clamp-2 mb-4 h-10">
          {product.description}
        </p>
        <Button
          fullWidth
          onClick={() => addItem(product)}
          className="shadow-sm active:scale-95"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
