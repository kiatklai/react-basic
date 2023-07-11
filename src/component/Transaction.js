import './transaction.css'
const Transaction =()=>{
  const expend = "交通費"
  const money = 1500
  return (
    <ul className='item'>
        <li>{expend}<span>-{money}</span></li>
        <li>日給<span>10500</span></li>
        <li>食費<span>-1000</span></li>
    </ul>
  );
}

export default Transaction