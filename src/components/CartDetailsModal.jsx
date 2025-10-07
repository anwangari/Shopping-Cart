import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCart } from '../App.jsx';
import CartItem from './CartItem.jsx';

function CartDetailsModal({ onClose, onCheckout }) {
  const { cart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="cart-details-modal">
        <div className="modal-header">
          <h2>Your Cart</h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="modal-body">
          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
        {cart.length > 0 && (
          <div className="modal-footer">
            <div className="total-section">
              <span className="total-label">Total:</span>
              <span className="total-amount">${totalAmount}</span>
            </div>
            <Link to="/cart" onClick={onClose}>
              <button className="checkout-btn">Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

CartDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default CartDetailsModal;