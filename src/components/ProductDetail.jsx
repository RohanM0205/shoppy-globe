import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch product');
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  if (loading) return <p className="status-text">Loading product...</p>;
  if (error) return <p className="status-text error">Error: {error}</p>;
  if (!product) return <p className="status-text">No product found.</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <h2 className="product-title">{product.title}</h2>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <p className="product-description">{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {showMessage && (
          <p className="success-message">🎉 Product added to cart!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
