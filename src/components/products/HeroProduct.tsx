import React from 'react';
import { Heart, Star, Check } from 'lucide-react';
import PriceTag from './PriceTag';
import ProductGallery from './ProductGallery';
import ProductFeatures from './ProductFeatures';

const images = [
  'https://images.unsplash.com/photo-1570018144715-43110363d70a?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80'
];

const features = [
  'Dual-use design: bed and tunnel in one',
  'Soft, plush donut-shaped bed',
  'Engaging tunnel for play and exercise',
  'Perfect for small spaces',
  'Machine washable material',
  'Promotes physical activity and mental stimulation'
];

const benefits = [
  { title: 'Cozy Comfort', description: 'Circular donut design for safe, warm rest' },
  { title: 'Physical Fun', description: 'Tunnel design keeps your kitty active and healthy' },
  { title: 'Mental Stimulation', description: 'Encourages exploration and problem-solving' }
];

export default function HeroProduct() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductGallery images={images} />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-rose-500 fill-current" />
              <span className="text-rose-500 font-medium">Valentine's Special</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Hide, Seek, & Snooze in Style! 🛏️🐾
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Dual-Use Cat Bed & Tunnel
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(256 reviews)</span>
            </div>
            <PriceTag price={49.99} originalPrice={69.99} />
            
            <div className="mb-6 space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-rose-700 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-rose-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border-2 border-rose-500 text-rose-500 py-3 rounded-full hover:bg-rose-50 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}