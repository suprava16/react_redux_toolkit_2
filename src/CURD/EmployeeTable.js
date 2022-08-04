import React from 'react'
import { useDispatch, useSelector } from "react-redux"
function EmployeeTable() {

  const dispatch = useDispatch()
  const data = useSelector((store) => store.curd)
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SAlary</th>
          </tr>
        </thead>
        <tbody>
          {data.employeeArray.map((emp, i) => {
            return (
              <tr key={i}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable