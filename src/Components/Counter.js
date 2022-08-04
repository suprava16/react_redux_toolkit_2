import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {addCount,subCount} from "../store/ConterSlice"

function Counter() {
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.counting)
console.log(data)

  const handleIncrement=()=>{
    dispatch(addCount())
  }
  const handleDecrement=()=>{
    dispatch(subCount())
  }
  return (
    <div>
      <button onClick={handleIncrement}>Increment counter</button>
      {data.count}
      <button onClick={handleDecrement}>Decrement Counter</button>
    </div>
  )
}

export default Counter