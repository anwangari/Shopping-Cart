// src/components/CartItem.jsx
function CartItem({ item, updateQuantity, removeItem }) {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.title} className="cart-item-image" />
        <div className="cart-item-details">
          <h4>{item.title}</h4>
          <p>${item.price.toFixed(2)} x {item.quantity}</p>
          <div className="quantity-controls">
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      </div>
    );
  }
  
  export default CartItem;