import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetchProductById(id);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el producto');
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <div className="loading">Cargando detalles del producto...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Producto no encontrado</div>;

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-button">
        &larr; Volver a la lista
      </Link>
      
      <div className="product-detail-card">
        <h2 className="product-detail-name">{product.name}</h2>
        
        <div className="product-detail-info">
          {product.data ? (
            Object.entries(product.data).map(([key, value]) => (
              <div key={key} className="detail-item">
                <span className="detail-key">{key}:</span>
                <span className="detail-value">
                  {typeof value === 'number' ? 
                    (key.toLowerCase().includes('price') ? `$${value.toFixed(2)}` : value) : 
                    value}
                </span>
              </div>
            ))
          ) : (
            <p className="no-data">No hay información adicional disponible</p>
          )}
        </div>
        
        <div className="product-actions">
          <button className="add-to-cart-btn">Añadir al carrito</button>
          <button className="favorite-btn">Añadir a favoritos</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;