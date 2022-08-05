import React from 'react'
import AddEmployee from './AddEmployee'
import EmployeeTable from './EmployeeTable'
import UpdateEmployee from './UpdateEmployee'
import {useSelector} from "react-redux"
function Employee() {
  const data=useSelector((store)=>store.curd)
  return (
    <div>
      <h1>Employee Detail</h1>
      <AddEmployee/>
      <br/><br/>
      <EmployeeTable/>
      <br/><br/>
      {data.status===true &&
      <UpdateEmployee/>
      }
    </div>
  )
}

export default Employee