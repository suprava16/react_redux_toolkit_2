import {configureStore} from "@reduxjs/toolkit"

import CounterSlice from "./store/ConterSlice"
import CurdSlice from "./store/CurdSlice"
const store=configureStore({
  reducer:{
    counting:CounterSlice,
    curd:CurdSlice
  }
})
export default store;