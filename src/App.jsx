import { useState, createContext, useContext } from 'react';
import AppRouter from './router/AppRouter.jsx';
import './styles/main.css';

// Cart Context for state management
const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
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
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setShowSummaryModal(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + delta) } 
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartContextValue = {
    cart,
    addToCart,
    updateQuantity,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <AppRouter
        cart={cart}
        showSummaryModal={showSummaryModal}
        showDetailsModal={showDetailsModal}
        setShowSummaryModal={setShowSummaryModal}
        setShowDetailsModal={setShowDetailsModal}
      />
    </CartContext.Provider>
  );
}

export default App;