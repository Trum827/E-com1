import React from 'react';

const categories = [
  {
    title: "Heartfelt Cat Trees",
    description: "Elegant and romantic designs for your feline friend",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80"
  },
  {
    title: "Loving Lounge Beds",
    description: "Soft and plush beds for sweet dreams",
    image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80"
  },
  {
    title: "Wall-Mounted Shelves",
    description: "Space-saving designs for active cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80"
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <button className="w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}