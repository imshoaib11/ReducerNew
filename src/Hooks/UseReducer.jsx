import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

let initialValue = {
    name:"Nagarajan",
    count:0,
}

function reducer(state,action) {
        switch (action.type) 
            {
                case "INCREMENT": return{
                    ...state,
                    count: state.count+1
                }
                case 'DECREMENT': return{
                    ...state,
                    count: state.count-1
                }
                case "RESET": return{
                    ...state,
                    count: 0
                }
                case "RENAME": return{
                    ...state,
                    name: action.payload
                }
            }

}

function UseReducer() {
    let [state, dispatch] = useReducer(reducer, initialValue)
  return <>
  <div className='container'>
    <br></br>
    <div className='row'>
        <input type='text' onChange={(e)=>dispatch({type:"RENAME",payload:e.target.value})} />
    </div>
    <h2>Name is {state.name} </h2>
    <div className=''>
        <Button variant='primary' onClick={()=>dispatch({type:"DECREMENT"})}>-</Button>
        &nbsp;&nbsp;
        {state.count}
        <Button variant='secondary' onClick={()=>dispatch({type:"INCREMENT"})}>+</Button>
        &nbsp;&nbsp;
        <Button variant='danger' onClick={()=>dispatch({type:"RESET"})}>Reset</Button>
    </div>
    </div>
  
  </>
}

export default UseReducer