import { Product, ProductCategory } from '../types/product';

export const categories: ProductCategory[] = [
  {
    id: 'cat-trees',
    name: 'Cat Trees & Furniture',
    description: 'Modern cat trees that blend seamlessly with your home',
    image: 'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5016.jpg?v=1685597517'
  },
  {
    id: 'beds',
    name: 'Beds & Hideaways',
    description: 'Cozy retreats for peaceful cat naps',
    image: 'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_4996.jpg?v=1685597517'
  },
  {
    id: 'scratchers',
    name: 'Scratching Posts',
    description: 'Beautiful scratching solutions your cats will love',
    image: 'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_4999.jpg?v=1685597517'
  }
];

export const featuredProducts: Product[] = [
  {
    id: 'hide-seek-snooze',
    name: 'Hide, Seek, & Snooze in Style! 🛏️🐾',
    price: 49.99,
    originalPrice: 69.99,
    description: 'Dual-Use Cat Bed & Tunnel - the ultimate cozy combo for sleep and playtime',
    category: 'beds',
    images: [
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_4996.jpg?v=1685597517',
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_4997.jpg?v=1685597517',
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_4998.jpg?v=1685597517'
    ],
    features: [
      'Dual-use design: bed and tunnel in one',
      'Soft, plush donut-shaped bed',
      'Engaging tunnel for play and exercise',
      'Perfect for small spaces',
      'Machine washable material',
      'Promotes physical activity and mental stimulation'
    ]
  },
  {
    id: 'modern-cat-tree',
    name: 'Modern Cat Tree with Platforms',
    price: 199.99,
    originalPrice: 249.99,
    description: 'A sleek, modern cat tree featuring multiple platforms and sisal-wrapped posts',
    category: 'cat-trees',
    images: [
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5016.jpg?v=1685597517',
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5017.jpg?v=1685597517',
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5018.jpg?v=1685597517'
    ],
    features: [
      'Multiple platforms for lounging',
      'Sisal-wrapped posts for scratching',
      'Sturdy construction',
      'Easy assembly',
      'Perfect for multiple cats'
    ]
  }
];

export const recommendedProducts: Product[] = [
  {
    id: 'wall-mounted-set',
    name: 'Wall-Mounted Cat Playground',
    price: 149.99,
    originalPrice: 199.99,
    description: 'Create a vertical paradise with this modular wall-mounted set',
    category: 'cat-trees',
    images: [
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5019.jpg?v=1685597517',
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5020.jpg?v=1685597517'
    ]
  },
  {
    id: 'modern-scratcher',
    name: 'Modern Wave Scratcher',
    price: 79.99,
    originalPrice: 99.99,
    description: 'Sleek wave-shaped scratcher that doubles as modern art',
    category: 'scratchers',
    images: [
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_4999.jpg?v=1685597517',
      'https://cdn.shopify.com/s/files/1/0764/5514/6015/files/IMG_5000.jpg?v=1685597517'
    ]
  }
];