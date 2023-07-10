const Title =()=><h1 style={{color:"red",textAlign:"center",fontSize:"3rem"}}>収入支出プログラム</h1>
const Description =()=><p>一日の情報</p>

const Transaction =()=>{
  const expend = "交通費"
  const money = 1500
  return (
    <ul>
      <li>{expend}<span>-{money}</span></li>
        <li>日給<span>10500</span></li>
        <li>食費<span>-1000</span></li>
    </ul>
  );
}

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
