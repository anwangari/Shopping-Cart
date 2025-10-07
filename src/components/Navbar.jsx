// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/main.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Shopping Cart App</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;