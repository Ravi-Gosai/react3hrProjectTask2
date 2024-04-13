import { useContext } from "react";
import CartModal from "../UI/CartModal";
import CartContext from "../store/cart-context";
const Cart = (props)=>{

    const cartCtx = useContext(CartContext)

    return (
        <CartModal>
            <ul>
                {cartCtx.cartMedicine.map((medi)=><li key={medi.id}>medicine name : {medi.medicinename}  and  quantity :{medi.quantity}</li>)} 
            </ul>
            <button type="button" onClick={()=>props.onClose(false)}> close </button>
            <button type="button"> order </button>
        </CartModal>
    )
}
export default Cart;