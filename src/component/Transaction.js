import Item from './Item'
import './transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction =()=>{
  const data = [
    {title:"医療費",amount:2000},
    {title:"日給" ,amount:12000},
    {title:"食費" ,amount:1500}
  ]
  return (
    <ul className='item-list'>
      {data.map((element)=>{
        return <Item {...element} key={uuidv4()}/>
      })}
    </ul>
  );
}

export default Transaction