import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
  name:"counter",
  initialState:{
    count:0
  },
  reducers:{
    addCount(state,action){ 
      state.count=state.count+1;
    },
    subCount(state,action){
      state.count=state.count-1
    }
  }
})
export const {addCount,subCount}=CounterSlice.actions
export default CounterSlice.reducer 
