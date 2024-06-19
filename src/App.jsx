import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Add from './components/Dashboard/Add'
import View from './components/Dashboard/View'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'

function App() {
  
    let [val,setVal ] = useState([
      {
        id:1,
        name:"Nagarajan",
        email:"naga@gmail.com",
        mobile:"987654321",
        batch:"FSD57"
      },
      {
        id:2,
        name:"Raj",
        email:"raj@gmail.com",
        mobile:"123456789",
        batch:"FSD57"
      },
      {
        id:3,
        name:"Arun",
        email:"arun@gmail.com",
        mobile:"789783378",
        batch:"FSD58"
      },
      {
        id:4,
        name:"Khaleel",
        email:"khaleel@gmail.com",
        mobile:"5432178789",
        batch:"FSD58"
      }
    ])

  return <> 

    <div id="wrapper">

        <BrowserRouter>
         <Sidebar/>
         <Routes>
            <Route path='/' element ={<Dashboard val={val} setVal={setVal}/>}/>
            <Route path='/add-user' element ={<Add val={val} setVal={setVal}/>}/>
            <Route path='/view-user/:id' element ={<View val={val} setVal={setVal}/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
         </Routes>
         </BrowserRouter>
            

     </div>
  </>

}

export default App