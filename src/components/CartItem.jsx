import PropTypes from 'prop-types';
import { useCart } from '../App.jsx';

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <div className="quantity-controls">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="quantity-btn"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="quantity-btn"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            className="remove-btn"
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;