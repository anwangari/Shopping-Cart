import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Cart from '../pages/Cart.jsx';
// import CartSummaryModal from '../components/CartSummaryModal.jsx';
// import CartDetailsModal from '../components/CartDetailsModal.jsx';
// import { useCart } from '../App.jsx';

function AppRouter({ 
  cart, 
  showSummaryModal, 
  showDetailsModal, 
  setShowSummaryModal, 
  setShowDetailsModal 
}) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = (navigate) => {
    setShowSummaryModal(false);
    setShowDetailsModal(false);
    navigate('/cart');
  };

  const handleViewItems = () => {
    setShowSummaryModal(false);
    setShowDetailsModal(true);
  };

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
          <Shop />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <Navbar cartCount={cartCount} />
          <Cart />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* {showSummaryModal && (
        <CartSummaryModal
          totalAmount={totalAmount}
          onViewItems={handleViewItems}
          onCheckout={() => handleCheckout(() => window.location.href = '/cart')}
          onClose={() => setShowSummaryModal(false)}
        />
      )}
      {showDetailsModal && (
        <CartDetailsModal
          onClose={() => setShowDetailsModal(false)}
          onCheckout={() => handleCheckout(() => window.location.href = '/cart')}
        />
      )} */}
    </>
  );
}

export default AppRouter;