import React from 'react'
import AddEmployee from './AddEmployee'
import EmployeeTable from './EmployeeTable'

function Employee() {
  return (
    <div>
      <h1>Employee Detail</h1>
      <AddEmployee/>
      <br/><br/>
      <EmployeeTable/>
    </div>
  )
}

export default Employee