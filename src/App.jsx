import React, {useReducer} from 'react'
import Sidebar from './components/Sidebar'
import Add from './components/Dashboard/Add'
import View from './components/Dashboard/View'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import DashboardContextComponent from './context/DashboardContext'
import NestedExample from './components/NestedExample'
import Profile from './components/NestedExample/Profile'
import Settings from './components/NestedExample/Settings'
import Feed from './components/NestedExample/Feed'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'
export const UserContext = React.createContext()
// getting the reducer function and intialValue from Reducer file
import reducer,{intialValue} from './components/utils/Reducer'

  
function App() {
  
    let [val,dispatch ] = useReducer(reducer,intialValue)
      

  return <> 

    <div id="wrapper">
        <UserContext.Provider value = {{val,dispatch}}>
        <BrowserRouter>
         <Sidebar/>
         <Routes>
            <Route path='/' element ={<DashboardContextComponent><Dashboard /></DashboardContextComponent>}/>
            <Route path='/add-user' element ={<Add />}/>
            <Route path='/view-user/:id' element ={<View />}/>
            <Route path='/nested-example' element ={<NestedExample />}>
              <Route path='profile' element ={<Profile />}/>
              <Route path='settings' element={<Settings />}/>
              <Route path='feed' element={<Feed />}/>
            </Route>
            <Route path='/useref' element={<UseRef />}/>
            <Route path='usereducer' element={<UseReducer />}/>
            {/* <Route path='*' element={<Navigate to='/'/>}/> */}
         </Routes>
         </BrowserRouter>
         </UserContext.Provider>
            

     </div>
  </>

}

export default App

