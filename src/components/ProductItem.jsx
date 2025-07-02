import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <li className="product-card">
      <div className="product-card-body">
        <h4 className="product-title">{product.title}</h4>
        <p className="product-price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="details-button">
          View Details
        </Link>
      </div>
    </li>
  );
};

export default ProductItem;
