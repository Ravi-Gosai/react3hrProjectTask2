import { createContext } from "react";

const MedicineListContext = createContext({
    medicineLists : [],
    addMedicineFun : (medicine)=>{}
})
export default MedicineListContext