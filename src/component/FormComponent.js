import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent =(props)=>{
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)
  const [formValid,setFormValid] = useState(false)

  const inputTitle=(event)=>{
    setTitle(event.target.value)
  }
  const inputAmount=(event)=>{
    setAmount(event.target.value)
  }
  const saveItem=(event)=>{
    event.preventDefault()
    const itemData = {
      id:uuidv4(),
      title:title,
      amount:Number(amount)
    }
    props.onAddItem(itemData)
    setTitle('')
    setAmount(0)
  }

  useEffect(()=>{
    const checkData = title.trim().length>0 && amount !==0
      setFormValid(checkData)
  },[title,amount])
  return(
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>リスト</label>
          <input type="text" placeholder="タイトルなどを入力ください" onChange={inputTitle} value={title}/>
        </div>
        <div className="form-control">
          <label>費用</label>
          <input type="number" placeholder="(+収入, -支出)" onChange={inputAmount} value={amount}/>
        </div>
        <div>
          <button type="submit" className='btn' disabled={!formValid}>追加する</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent