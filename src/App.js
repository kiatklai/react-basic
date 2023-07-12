import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"2rem"}}>収入支出プログラム</h1>

function App() {
  return (
    <div className="container">
      <Title/>
      <FormComponent/>
      <Transaction/>
    </div>
  );
}

export default App;
