import "./App.css";
import CartContext from "./context/CardContext";
import Products from "./components/Products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({});
  const addToCart = (product) => {
    console.log("increase");
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  };
  const removeFromCart = (product) => {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      return;
    }
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="App">
        <Products
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </CartContext.Provider>
  );
}

export default App;
