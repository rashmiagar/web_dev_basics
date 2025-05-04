import { useState, useEffect } from 'react';
import './App.css';
import { Products } from './app/Products';
import NavBar from './app/NavBar';
import { CartProvider } from './app/Context/CartContext';


function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoaded(false);
      const repo = await fetch('https://fakestoreapi.com/products');
      const data = await repo.json();
      console.log(data);
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      console.error("Failed to fetch API", error);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
<CartProvider>
    <div className="flex flex-col">
      <NavBar/>
      {isLoaded ? (
        products.map((prod) => (
        <Products item={prod}  />
))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </CartProvider>
  );
}

export default App;
