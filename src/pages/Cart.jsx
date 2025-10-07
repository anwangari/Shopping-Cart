import { useCart } from '../App.jsx';
import CartItem from '../components/CartItem.jsx';

function Cart() {
  const { cart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <p className="empty-cart-subtitle">Start shopping to add items to your cart!</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalAmount}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>FREE</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;