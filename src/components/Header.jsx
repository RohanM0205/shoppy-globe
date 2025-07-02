import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const totalCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛍️ ShoppyGlobe
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            🏠 Home
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart
            {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
