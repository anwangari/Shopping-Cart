// src/components/ProductCard.jsx
import { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;