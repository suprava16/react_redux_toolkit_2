import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {updatedObj} from "../store/CurdSlice"

function UpdateEmployee() {
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.curd)

  // ----------------
  const[emp,setEmp]=useState(data.employee)

  // ----------------
  const update=(emp)=>{
    dispatch(updatedObj(emp))
  }
  return (
    <div>
       <input type="text" placeholder='enter id' value={emp.id} onChange={(e) => { setEmp({ ...emp, id: e.target.value }) }} />
      <input type="text" placeholder='enter name' value={emp.name} onChange={(e) => { setEmp({ ...emp, name: e.target.value }) }}/>
      <input type="text" placeholder='enter salary' value={emp.salary} onChange={(e) => { setEmp({ ...emp, salary: e.target.value }) }} />
      <button onClick={()=>update(emp)}>UPDATE EMPLOYEE</button>
    </div>
  )
}

export default UpdateEmployee