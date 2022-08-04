import React from 'react'
import Counter from "./Components/Counter"
import store from './store'
import { Provider } from "react-redux"
import Employee from './CURD/Employee'

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Counter/> */}
        <Employee />
      </Provider>

    </div>
  )
}

export default App

// this.state={
//   emp:{id:0,name:"",salary:""}
// }
// handleChange=(event)=>{
// this.setState({
//   emp:{...this.state.emp,id:event.target.value}
// })
// }
// onchange(this.handleChnage)