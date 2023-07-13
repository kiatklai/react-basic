import { useContext } from "react"
import DataContext from "../data/DataContext"


const Reportcomponent=()=>{
  const {income , expense} = useContext(DataContext)
  return (
    <div>
      <p>収入：{income}</p>
      <p>支出：{expense}</p>
    </div>
  )
}

export default Reportcomponent