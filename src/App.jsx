// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import CartSummaryModal from './components/CartSummaryModal.jsx';
import CartDetailsModal from './components/CartDetailsModal.jsx';
import './styles/main.css';

// Cart Context for state management
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function App() {
  const [cart, setCart] = useState([]);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setShowSummaryModal(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar cartCount={cartCount} />
          <Home />
        </>
      ),
    },
    {
      path: '/shop',
      element: (
        <>
          <Navbar cartCount={cartCount} />
          <Shop addToCart={addToCart} />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <Navbar cartCount={cartCount} />
          <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} totalAmount={totalAmount} />
        </>
      ),
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, totalAmount }}>
      <RouterProvider router={router} />
      {showSummaryModal && (
        <CartSummaryModal
          totalAmount={totalAmount}
          onViewItems={() => {
            setShowSummaryModal(false);
            setShowDetailsModal(true);
          }}
          onClose={() => setShowSummaryModal(false)}
        />
      )}
      {showDetailsModal && (
        <CartDetailsModal
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </CartContext.Provider>
  );
}

export default App;