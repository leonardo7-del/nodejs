import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const CategoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorías predefinidas basadas en los productos
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'phones', name: 'Teléfonos', keywords: ['iphone', 'pixel', 'galaxy'] },
    { id: 'audio', name: 'Audio', keywords: ['airpods', 'beats'] },
    { id: 'computers', name: 'Computadoras', keywords: ['macbook'] },
    { id: 'wearables', name: 'Wearables', keywords: ['watch'] },
    { id: 'tablets', name: 'Tablets', keywords: ['ipad'] }
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProductsByCategory = (categoryId) => {
    if (categoryId === 'all') {
      return products;
    }
    
    const category = categories.find(cat => cat.id === categoryId);
    if (!category || !category.keywords) return [];
    
    return products.filter(product => 
      category.keywords.some(keyword => 
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const filteredProducts = filterProductsByCategory(activeCategory);

  if (loading) return <div className="loading">Cargando categorías...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="categories-page">
      <h1>Categorías</h1>
      
      <div className="categories-container">
        <div className="categories-sidebar">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="category-products">
          <h2>{categories.find(cat => cat.id === activeCategory)?.name || 'Todos los productos'}</h2>
          
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-results">No hay productos en esta categoría</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;