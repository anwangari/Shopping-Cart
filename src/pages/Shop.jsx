import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { fetchProducts } from '../services/api.jsx';

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;