function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to ShopHub</h1>
        <p className="hero-subtitle">Your one-stop destination for quality products</p>
        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Shop with confidence using secure payment methods</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>Curated selection of high-quality items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;