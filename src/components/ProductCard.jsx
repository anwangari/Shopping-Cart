import { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button 
            onClick={handleDecrement} 
            className="quantity-btn" 
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="quantity-input"
            aria-label="Quantity"
          />
          <button 
            onClick={handleIncrement} 
            className="quantity-btn" 
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;