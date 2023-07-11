import Item from './Item'
import './transaction.css'
const Transaction =()=>{
  return (
    <ul className='item-list'>
      <Item title="医療費" amount="2000"/>
      <Item title="日給" amount="12000"/>
      <Item title="食費" amount="1500"/>
      <Item title="交通費" amount="1200"/>
      <Item title="ボーナス" amount="402000"/>
    </ul>
  );
}

export default Transaction