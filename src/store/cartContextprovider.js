import { useState } from "react";
import CartContext from "./cart-context";



const CartContextProvider =(props)=>{

const [cartMedicine, setCartMedicine] = useState([])

const addCartMEdicineFun = (medicine) => {
        console.log(medicine)
      const checkMedicine = cartMedicine.find((medi)=>medi.id === medicine.id)
        if(checkMedicine === undefined ){
            setCartMedicine([...cartMedicine, medicine])
        }else{
            setCartMedicine(()=>{

                const index = cartMedicine.findIndex((medi)=>medi.id === medicine.id)
                // console.log(index)
                const currItem = [...cartMedicine]
                currItem[index].quantity =  +(currItem[index].quantity) + +checkMedicine.quantity
                console.log(currItem[index].quantity)
                return currItem
            })


            
        }
      
} 

    const cartContext = {
        cartMedicine : cartMedicine,
        addCartMedicineFun :addCartMEdicineFun
    }

    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )

}
export default CartContextProvider;