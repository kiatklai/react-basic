import './FormComponent.css'

const FormComponent =()=>{
  const inputTitle=(event)=>{
    console.log(event.target.value)
  }
  const inputAmount=(event)=>{
    console.log(event.target.value)
  }
  const saveItem=(event)=>{
    event.preventDefault()
    console.log("data was save")
  }
  return(
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>リスト</label>
          <input type="text" placeholder="タイトルなどを入力ください" onChange={inputTitle}/>
        </div>
        <div className="form-control">
          <label>費用</label>
          <input type="number" placeholder="(+収入, -支出)" onChange={inputAmount}/>
        </div>
        <div>
          <button type="submit" className='btn'>追加する</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent