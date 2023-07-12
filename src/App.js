import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";
import { useState } from "react";

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"2rem"}}>収入支出プログラム</h1>

function App() {
  const [items,setItem] = useState([])
  const onAddNewItem = (newItem) =>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <div className="container">
      <Title/>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {items}/>
    </div>
  );
}

export default App;
