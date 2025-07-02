import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="status-text">Loading products...</p>;
  if (error) return <p className="status-text error">Error: {error}</p>;

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">✨ Explore Our Collection</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search for stylish leggings, tops, etc..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
