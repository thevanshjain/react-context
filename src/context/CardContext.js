import { createContext } from "react";

const CartContext = createContext({
    cart:{},
    addToCart: () => {}, 
    removeToCart: () => {}
})

export default CartContext