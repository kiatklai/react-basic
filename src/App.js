import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";
import { useState,useEffect } from "react";
import DataContext from "./data/DataContext";
import Reportcomponent from "./component/ReportComponent";

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"2rem"}}>収入支出プログラム</h1>

function App() {
  const [items,setItem] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) =>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
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
