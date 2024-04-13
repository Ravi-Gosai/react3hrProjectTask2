import { useContext, useState } from "react";
import MedicineListContext from "../store/medicine-lists-context";


const AddMedicineForm = props =>{
    const [medicineName, setMedicineName] = useState('')
    const [descprition, setDescprition] = useState('')
    const [price, setPrice] = useState('')

    const medicineCTX = useContext(MedicineListContext)

    const SubmitHandler = (e) =>{
        e.preventDefault()
        let obj = {
            medicinename: medicineName,
            descprition: descprition,
            price:price ,
            quantity : 1
        }
        // console.log(obj)
        // console.log(medicineCTX)
        medicineCTX.addMedicineFun(obj)
    }
    return(
        <form onSubmit={SubmitHandler}>
            <label htmlFor="medicinename"> Medicine Name</label>
            <input id="medicinename" type="text" onChange={(e)=>setMedicineName(e.target.value)}></input>

            <label htmlFor="descprition"> descprition</label>
            <input id="descprition" type="text" onChange={(e)=>setDescprition(e.target.value)}></input>

            <label htmlFor="price"> price</label>
            <input id="price" type="number" onChange={(e)=>setPrice(e.target.value)}></input>
            <button type="submit"> Add Medicine</button>
            <button type='button' onClick={()=>{props.onShow(true)}}> Your Cart </button>
        </form>
    )
}
export default AddMedicineForm;
