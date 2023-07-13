import { useContext } from 'react'
import Item from './Item'
import './transaction.css'
import DataContext from '../data/DataContext'

const Transaction =(props)=>{
  const {items} = props
  const {income , expense} = useContext(DataContext)
  return (
    <div>
      <ul className='item-list'>
        {items.map((element)=>{
          return <Item {...element} key={element.id}/>
        })}
      </ul>
      <p>収入：{income}</p>
      <p>支出：{expense}</p>
    </div>
  );
}

export default Transaction