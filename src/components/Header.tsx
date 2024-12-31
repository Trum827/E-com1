import React from 'react';
import { Heart, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  return (
    <>
      <div className="bg-rose-500 text-white text-sm py-2">
        <p className="text-center">
          SHARE THE LOVE THIS VALENTINE'S DAY - SHOP NOW | FREE RETURNS WITHIN 45 DAYS
        </p>
      </div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <h1 className="ml-2 text-2xl font-semibold text-gray-900">
                Kallahan's Cat Cave
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-rose-500">Shop</a>
              <a href="#" className="text-gray-700 hover:text-rose-500">About Us</a>
              <a href="#" className="text-gray-700 hover:text-rose-500">Support</a>
              <a href="#" className="text-gray-700 hover:text-rose-500">Blog</a>
              <a href="#" className="text-rose-500 font-medium">Valentine's Bundles</a>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}