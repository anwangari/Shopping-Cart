import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { fetchProducts } from '../services/api.jsx';
import { useCart } from '../App.jsx';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="shop-page">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <h1 className="page-title">Shop Our Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;