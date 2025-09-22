import React from 'react';
import ProductList from '../components/productlist';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Bienvenido a TechStore</h1>
        <p>Descubre los mejores productos tecnológicos</p>
      </div>
      
      <div className="featured-products">
        <h2>Productos Destacados</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;