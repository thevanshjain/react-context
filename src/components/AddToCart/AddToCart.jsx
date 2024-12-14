import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CardContext";

function AddToCart({ product }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const increase = () => {
    addToCart(product);
  };
  const decrease = () => {
    removeFromCart(product);
  };
  let quantity = cart[product?.id] ? cart[product?.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add to cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>-</button>
        <div>{quantity}</div>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default AddToCart;
