import Item from './Item'
import './transaction.css'
const Transaction =()=>{
  const data = [
    {title:"医療費",amount:"2000"},
    {title:"日給" ,amount:"12000"},
    {title:"食費" ,amount:"1500"},
    {title:"交通費" ,amount:"1300"},
    {title:"ボーナス" ,amount:"402000"}
  ]
  return (
    <ul className='item-list'>
      {data.map((element)=>{
        return <Item title={element.title} amount={element.amount}/>
      })}
    </ul>
  );
}

export default Transaction