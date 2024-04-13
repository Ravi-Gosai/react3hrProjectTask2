
import { useState } from 'react';
import './App.css';
import AddMedicineForm from './Component/AddMedicineForm';
import MedicineListContext from './store/medicine-lists-context';
import ListOfMedicine from './Component/ListOfMedicine';
import Cart from './Component/Cart';
import CartContextProvider from './store/cartContextprovider';

function App() {

  const [medicineLists , setMedicineList] = useState([])
  const [showCart,setShowCart]= useState(false)
const addMedicineFun = (medicine) =>{
  medicine.id = medicineLists.length + Math.random()
  console.log(medicine)
  setMedicineList([...medicineLists,medicine])
}


 const medicineListContext = {
  medicineLists : medicineLists,
  addMedicineFun : addMedicineFun
} 
  return (
   <>
   <MedicineListContext.Provider value={medicineListContext}>
    <CartContextProvider>
    {showCart && <Cart onClose={setShowCart}></Cart>}
    <AddMedicineForm onShow={setShowCart}></AddMedicineForm>
      {medicineLists.map((medicine)=><ListOfMedicine key={medicine.id} medicine={medicine}></ListOfMedicine>)}
      </CartContextProvider>
   </MedicineListContext.Provider>

   </>
  );
}

export default App;
