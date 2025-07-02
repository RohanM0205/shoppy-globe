import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} from '../redux/cartSlice';
import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart());

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000); // show for 5s
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>

      {/* ✅ Always show message if orderPlaced is true */}
      {orderPlaced && (
        <p className="order-success">🎉 Your order has been placed successfully!</p>
      )}

      {cartItems.length === 0 && !orderPlaced && (
        <p className="empty-text">Your cart is empty.</p>
      )}

      {cartItems.length > 0 && (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <div>
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-description">{item.description}</p>
                  </div>
                  <p className="cart-item-price">${item.price}</p>
                </div>

                <div className="cart-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button className="proceed-button" onClick={handleOrder}>
            ✅ Proceed to Buy
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
