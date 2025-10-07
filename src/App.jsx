// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><Home /></>,
  },
  {
    path: '/shop',
    element: <><Navbar /><Shop /></>,
  },
  {
    path: '/cart',
    element: <><Navbar /><Cart /></>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;