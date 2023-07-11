import Transaction from "./component/Transaction";

const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"3rem"}}>収入支出プログラム</h1>
const Description =()=><p>一日の情報</p>

function App() {
  return (
    <div>
      <Title/>
      <Description/>
      <Transaction/>
    </div>
  );
}

export default App;
