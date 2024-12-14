import AddToCart from "../AddToCart/AddToCart";
import "./ProductsCard.css";

const ProductCard = ({ product, cart, addToCart, removeFromCart }) => {
  return (
    <div className="card">
      <div>{product.title}</div>
      <div>{product.price}</div>
      <AddToCart product={product} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}  />
    </div>
  );
};

export default ProductCard;
