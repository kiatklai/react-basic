import { useState } from 'react'
import './FormComponent.css'

const FormComponent =()=>{
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)

  const inputTitle=(event)=>{
    setTitle(event.target.value)
  }
  const inputAmount=(event)=>{
    setAmount(event.target.value)
  }
  const saveItem=(event)=>{
    event.preventDefault()
    const itemData = {
      title:title,
      amount:Number(amount)
    }
    console.log(itemData)
    setTitle('')
    setAmount(0)
  }
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
          <button type="submit" className='btn'>追加する</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent