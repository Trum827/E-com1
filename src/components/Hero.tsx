import React from 'react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 to-transparent" />
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Share the Love – Modern Cat Furniture for You and Your Furry Valentine
            </h1>
            <button className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors">
              SHOP VALENTINE'S COLLECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}