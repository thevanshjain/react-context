import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const Products = ({cart, addToCart, removeFromCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://run.mocky.io/v3/8fa2a2d7-93fc-4ad8-b2d3-1c7338bae744`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Products;
