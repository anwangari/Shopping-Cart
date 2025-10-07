import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartSummaryModal({ totalAmount, onViewItems, onCheckout, onClose }) {
  return (
    <div className="cart-summary-modal">
      <button className="modal-close-btn" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="modal-content">
        <div className="total-amount">
          <span className="label">Total Amount:</span>
          <span className="amount">${totalAmount}</span>
        </div>
        <div className="modal-actions">
          <button className="view-items-btn" onClick={onViewItems}>
            View Items
          </button>
          <Link to="/cart" onClick={onClose}>
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CartSummaryModal.propTypes = {
  totalAmount: PropTypes.string.isRequired,
  onViewItems: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartSummaryModal;