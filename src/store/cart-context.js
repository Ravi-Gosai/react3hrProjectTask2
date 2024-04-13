import { createContext } from "react";

const CartContext = createContext({
    cartMedicine : [],
    addCartMedicineFun : (medicine)=>{}
})
export default CartContext;