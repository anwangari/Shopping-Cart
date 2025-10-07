import { Link, useLocation } from 'react-router-dom';

function Navbar({ cartCount }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">ShopHub</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/shop" 
            className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}
          >
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/cart" 
            className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;