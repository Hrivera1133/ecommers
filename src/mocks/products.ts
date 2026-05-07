import { Product } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description:
      'Experience crystal clear sound with our high-end wireless headphones. Featuring noise cancellation and 40h battery life.',
    price: 299.99,
    category: 'Electronics',
    image: '/images/headphone.png',
    rating: { rate: 4.8, count: 120 },
  },
  {
    id: 2,
    name: 'Minimalist Luxury Watch',
    description:
      'A timeless piece for any occasion. Crafted with a silver case and genuine brown leather strap.',
    price: 150.0,
    category: 'Accessories',
    image: '/images/watch.png',
    rating: { rate: 4.5, count: 85 },
  },
  {
    id: 3,
    name: 'Sleek Urban Backpack',
    description:
      'Designed for the modern professional. Water-resistant fabric and hidden compartments for your tech.',
    price: 89.99,
    category: 'Lifestyle',
    image: '/images/backpack.png',
    rating: { rate: 4.7, count: 210 },
  },
  {
    id: 4,
    name: 'Smart Home Speaker',
    description:
      'High-fidelity audio with voice control. Seamlessly integrates with your smart home ecosystem.',
    price: 199.0,
    category: 'Electronics',
    image: '/images/speaker.png',
    rating: { rate: 4.6, count: 150 },
  },
  {
    id: 5,
    name: 'Premium Leather Wallet',
    description:
      'Minimalist bi-fold design handcrafted from genuine top-grain leather. RFID protection included.',
    price: 45.0,
    category: 'Accessories',
    image: '/images/wallet.png',
    rating: { rate: 4.9, count: 320 },
  },
  {
    id: 6,
    name: 'Designer Polarized Sunglasses',
    description:
      'Ultimate protection and style. Featuring high-performance polarized lenses and lightweight frames.',
    price: 120.0,
    category: 'Fashion',
    image: '/images/sunglasses.png',
    rating: { rate: 4.4, count: 95 },
  },
];
