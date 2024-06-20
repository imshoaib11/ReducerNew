import React, {useState,useEffect,useContext} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import findIndexById from '../utils/Helper'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../../App';

function Add() {
    
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let {id} = useParams()
  let navigate = useNavigate()

  let {val,setVal} = useContext(UserContext)

    {/* //useEffect
    //1. Without dependency array - Triggers during the initial rendering and any state change happens
    // useEffect(()=>{
    //     console.log("Without Dependency Array")
    // })

    //2. With Empty Dependancy Array - Triggers only during the initial rendering
    // useEffect(()=>{
    //     console.log("With Empty Dependency Array")
    // },[])    

    //3. With Dependency Array - Triggers during initial rendering and changes of specified state
    // useEffect(()=>{
    //     console.log("With Dependency Array")
    // },[email,batch])    */}

    const getData = (id)=>{
        let index = findIndexById(val,id)
        if(index!==-1)
        {
            setName(val[index].name)
            setEmail(val[index].email)
            setMobile(val[index].mobile)
            setBatch(val[index].batch)
        }
        else
        {
            console.error(`Invalid Id: ${id}`)
            navigate('/dashboard')
        }
    }

    useEffect(()=>{
        if(id)
        {
            getData(id)
        }
    },[])

    const handleSubmit = ()=>{
        let index = findIndexById(val,id)
        let editedData = {id:val[index].id,name,email,mobile,batch}//forming the object

        let newArray = [...val]//deep copy
        newArray.splice(index,1,editedData)//replace the old data with edited data
        setVal(newArray)

        navigate('/')

    }

  return  <>
  <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
      <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">View User</h1>
          </div>
          <div className='row'>
          <Form>
                 <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
                </Form.Group>
               
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
          </div>
      </div>
  </div>
</div>
  </>
}

export default Add