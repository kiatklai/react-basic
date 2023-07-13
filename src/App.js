import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import Reportcomponent from "./component/ReportComponent";

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"2rem"}}>収入支出プログラム</h1>

function App() {
  const [items,setItem] = useState([])
  const onAddNewItem = (newItem) =>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <DataContext.Provider value={
      {
        income: 50000,
        expense: -8000
      }
    }>
      <div className="container">
        <Title/>
        <Reportcomponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
