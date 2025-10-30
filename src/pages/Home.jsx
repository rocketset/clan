import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import NewProducts from '../components/home/NewProducts';
import ProductCarousel from '../components/home/ProductCarousel';
import PointOfSale from '../components/home/PointOfSale';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <NewProducts />
      <ProductCarousel />
      <PointOfSale />
    </div>
  );
};

export default Home;