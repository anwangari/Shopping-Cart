// src/pages/Cart.jsx
import CartItem from '../components/CartItem.jsx';

function Cart({ cart, updateQuantity, removeItem, totalAmount }) {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
          ))}
          <p>Total: ${totalAmount}</p>
          <button>Checkout (Demo)</button> {/* No real checkout */}
        </>
      )}
    </div>
  );
}

export default Cart;