// src/components/CartDetailsModal.jsx
import { useCart } from '../App.jsx';
import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';

function CartDetailsModal({ onClose }) {
  const { cart, updateQuantity, removeItem, totalAmount } = useCart();

  return (
    <div className="cart-details-modal">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
          ))}
          <p>Total: ${totalAmount}</p>
          <Link to="/cart">
            <button onClick={onClose}>Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartDetailsModal;