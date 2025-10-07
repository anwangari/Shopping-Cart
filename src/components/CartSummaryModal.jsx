// src/components/CartSummaryModal.jsx
import { Link } from 'react-router-dom';

function CartSummaryModal({ totalAmount, onViewItems, onClose }) {
  return (
    <div className="cart-summary-modal">
      <button className="close-btn" onClick={onClose}>×</button>
      <p>Total Amount: ${totalAmount}</p>
      <button onClick={onViewItems}>View Items</button>
      <Link to="/cart">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default CartSummaryModal;