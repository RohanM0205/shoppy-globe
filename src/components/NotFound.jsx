import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Not Found"
        className="notfound-image"
      />
      <h2 className="notfound-title">404 - Page Not Found</h2>
      <p className="notfound-text">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="go-home-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
