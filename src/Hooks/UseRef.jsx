import React, { useEffect, useRef, useState } from 'react'
function UseRef() {

    let count = useRef(0)
    const [input, setInput] = useState("")
    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()

    useEffect(()=>{
        ref1.current.focus()
        count.current = count.current+1
    })

    const handleSubmit = ()=>{
        let otp = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
        if (otp.length ===4 && otp === '1234'){
            alert(`Your OTP is ${otp}`)
            ref1.current.value=""
            ref2.current.value=""
            ref3.current.value=""
            ref4.current.value=""
            ref1.current.focus()
        }
        else
            alert(`Your OTP is invalid`)
    }
    let verify = (key)=>{
        if(key>=0 && key<=9){
            return true
    }
        else
            return false
    }
  return <>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <label>Name</label>
                        <input type='text' className='col-4' onChange = {(e)=>setInput(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <p>The enter output is {input}</p>
                        <h2>The component is rendered for {count.current} times</h2>
                    </div>
                    <div className='row'>
                        <h2>Enter the OTP here</h2>
                    </div>
                    <div className='row'>
                        <input type='number' className='col-3'ref={ref1} onKeyUp ={(e)=>{
                            if(verify(e.key))
                                ref2.current.focus()
                        }}></input>
                        <input type='number' className='col-3'ref={ref2} onKeyUp={(e)=>{
                            if(verify(e.key))
                                ref3.current.focus()
                        }} onKeyDown={(e)=>{
                            if(e.key === "Backspace" && ref4.current.value === "")
                                ref1.current.focus()
                        }}></input>
                        <input type='number' className='col-3'ref={ref3} onKeyUp={(e)=>{
                            if(verify(e.key))
                                ref4.current.focus()
                        }} onKeyDown={(e)=>{
                            if(e.key === "Backspace" && ref4.current.value === "")
                                ref2.current.focus()
                        }}></input>
                        <input type='number' className='col-3'ref={ref4} onKeyUp={(e)=>{
                            if(verify(e.key))
                                handleSubmit()
                        }} onKeyDown={(e)=>{
                            if(e.key === "Backspace" && ref4.current.value === "")
                                ref3.current.focus()
                        }}></input>
                        
                    </div>
                </div>
            </div>
  </>
} 

export default UseRef