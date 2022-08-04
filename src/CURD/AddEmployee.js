import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {addData} from "../store/CurdSlice"
function AddEmployee() {
  // -----------------
  const dispatch = useDispatch();
  const data = useSelector((store) => store.curd)
  console.log(data)

  // -----------------
  const [emp, setEmp] = useState(data.employee)

  // ------------------------
  const addEmpList=(empdata)=>{
    dispatch(addData(empdata))
  }
  return (
    <div>
      <input type="text" placeholder='enter id' onChange={(e) => { setEmp({ ...emp, id: e.target.value }) }} />
      <input type="text" placeholder='enter name' onChange={(e) => { setEmp({ ...emp, name: e.target.value }) }}/>
      <input type="text" placeholder='enter salary' onChange={(e) => { setEmp({ ...emp, salary: e.target.value }) }} />
      <button onClick={()=>addEmpList(emp)}>ADD EMPLOYEE</button>
    </div>
  )
}

export default AddEmployee