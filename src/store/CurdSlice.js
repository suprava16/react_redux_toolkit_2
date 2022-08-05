import {createSlice} from "@reduxjs/toolkit"

const CurdSlice=createSlice({
  name:"curd",
  initialState:{
    employee:{id:0,name:"",salary:""},
    employeeArray:[],
    index:0,
    status:false
  },
  reducers:{
      addData(state,action){
        console.log(action.payload)
        var temp=state.employeeArray
        temp.push(action.payload)
        state.employeeArray=temp
      },
      deleteData(state,action){
        console.log(action.payload)
        var temp=[...state.employeeArray]
        temp.splice(action.payload,1)
        state.employeeArray=temp

      },
      updateData(state,action){
        console.log(action.payload)
        state.status=true
        state.employee=action.payload[0]
        state.index=action.payload[1]
      },
      updatedObj(state,action){
        var temp=[...state.employeeArray]
        temp.splice(state.index,1,action.payload)
        state.employeeArray=temp
      }
  }
})
export const{addData,deleteData,updateData,updatedObj}=CurdSlice.actions
export default CurdSlice.reducer