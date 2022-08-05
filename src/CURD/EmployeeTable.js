import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteData,updateData } from "../store/CurdSlice"
function EmployeeTable() {

  const dispatch = useDispatch()
  const data = useSelector((store) => store.curd)

  // -----------------
  const handleDelete = (index) => {
    dispatch(deleteData(index))
  }

  // ------------------
  const handleUpdate = (emp, index) => {
    dispatch(updateData([emp, index]))
  }
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
                <td ><button onClick={() => { handleDelete(i) }}>Delete</button></td>
                <td><button onClick={() => { handleUpdate(emp, i) }}>Update</button></td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable