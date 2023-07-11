import Transaction from "./component/Transaction";
import './App.css';

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"2rem"}}>収入支出プログラム</h1>

function App() {
  return (
    <div className="container">
      <Title/>
      <Transaction/>
    </div>
  );
}

export default App;
