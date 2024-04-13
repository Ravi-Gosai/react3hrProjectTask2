import { useContext, useState } from "react";
import CartContext from "../store/cart-context";


const ListOfMedicine = (props)=>{
    const [quantity,setQuantity] = useState(1)
    const cartCTX = useContext(CartContext)

    const submitHandlerForQuantity = (e)=>{
        e.preventDefault()
        props.medicine.quantity = quantity;
        cartCTX.addCartMedicineFun(props.medicine)
        // console.log(props.medicine)
        // console.log(cartCTX.addCartMedicineFun)
        // setQuantity(1)


    }
    return <div>
        <form onSubmit={submitHandlerForQuantity}>
            <h2><li>
       name : {props.medicine.medicinename}  |  description :  {props.medicine.descprition} | price :{props.medicine.price}
       <input value ={quantity} style={{width:'40px'}} type="number" onChange={(e)=>setQuantity(e.target.value)}/>
       <button  type="submit" > Add to cart</button>
    </li></h2>
       </form>
    </div>
}
export default ListOfMedicine;