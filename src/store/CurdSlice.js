import {createSlice} from "@reduxjs/toolkit"

const CurdSlice=createSlice({
  name:"curd",
  initialState:{
    employee:{id:0,name:"",salary:""},
    employeeArray:[]
  },
  reducers:{
      addData(state,action){
        console.log(action.payload)
        var temp=state.employeeArray
        temp.push(action.payload)
        state.employeeArray=temp
      }
  }
})
export const{addData}=CurdSlice.actions
export default CurdSlice.reducer