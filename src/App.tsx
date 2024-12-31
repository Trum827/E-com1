import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/products/ProductCategories';
import FeaturedProducts from './components/products/FeaturedProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;