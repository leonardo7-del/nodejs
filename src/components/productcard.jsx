import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, data } = product;
  const image = product.image || data?.image || '/images/placeholder.png';
  
  // Función para determinar si el producto tiene precio
  const hasPrice = data && (data.price || data.Price);
  const price = data ? (data.price || data.Price) : null;
  
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" loading="lazy" />
      </div>
      <h3 className="product-name">{name}</h3>
      
      {hasPrice && (
        <p className="product-price">
          ${typeof price === 'string' ? price : price?.toFixed(2)}
        </p>
      )}
      
      <div className="product-details">
        {data && Object.entries(data).map(([key, value]) => (
          key.toLowerCase() !== 'price' && key.toLowerCase() !== 'description' && (
            <p key={key} className="product-detail">
              <span className="detail-label">{key}:</span> {value}
            </p>
          )
        ))}
      </div>
      
      <Link to={`/product/${id}`} className="view-details-btn">
        Ver detalles
      </Link>
    </div>
  );
};

export default ProductCard;