import { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      console.error('Error caught by boundary:', event.error);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong. Please try again or refresh the page.</h1>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;