import { Product } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal clear sound with our high-end wireless headphones. Featuring noise cancellation and 40h battery life.',
    price: 299.99,
    category: 'Electronics',
    image: '/images/headphone.png',
    rating: { rate: 4.8, count: 120 }
  },
  {
    id: 2,
    name: 'Minimalist Luxury Watch',
    description: 'A timeless piece for any occasion. Crafted with a silver case and genuine brown leather strap.',
    price: 150.00,
    category: 'Accessories',
    image: '/images/watch.png',
    rating: { rate: 4.5, count: 85 }
  },
  {
    id: 3,
    name: 'Sleek Urban Backpack',
    description: 'Designed for the modern professional. Water-resistant fabric and hidden compartments for your tech.',
    price: 89.99,
    category: 'Lifestyle',
    image: '/images/backpack.png',
    rating: { rate: 4.7, count: 210 }
  }
];
