import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";
import { useState,useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";
import { BrowserRouter as Router,Switch,Route,Link, Routes } from "react-router-dom";

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"2rem"}}>収入支出アプリ</h1>

function App() {
  const initData = [
    {id:1,title:"ローン",amount:-100000},
    {id:2,title:"給料",amount:300000}
  ]
  const [items,setItem] = useState(initData)

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
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={{income: reportIncome,expense: reportExpense}}>
      <div className="container">
        <Title/>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">全ての情報</Link>
              </li>
              <li>
                <Link to="/insert">保存</Link>
              </li>
            </ul>
              <Routes>
                <Route path='/' element={<ReportComponent/>}></Route>
                <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}></Route>
              </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
    
  );
}

export default App;
