import React,{ useContext } from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import findIndexById from '../utils/Helper'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../App'
import { DashboardContext } from '../../context/DashboardContext'
import { Actions} from '../utils/Actions'
function Dashboard() {

    let navigate = useNavigate()

    let {data} = useContext(DashboardContext)
    console.log(data)

    let {val,dispatch} = useContext(UserContext)

  return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        </div>
                    <div className="row">
                        {
                            data.map((e,i) => {
                             return <Card data ={e} key={i}/>
                            })
                        }
                    </div>  
                    <div className = "row">
                    <Table striped bordered hover>
                        <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Actions</th>
                        </thead>  
                        <tbody>
                            {
                                val.map((e)=>{
                                    return <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                        <td>
                                            <Button variant ="primary"onClick={()=>navigate(`/view-user/${e.id}`)}>Edit</Button>
                                            &nbsp;&nbsp;
                                            <Button variant="danger" onClick={()=>dispatch({type:Actions.DELETE_USER,payload:e.id})}>Delete</Button>
                                        </td>
                                    </tr> 
                                })
                            }
                        </tbody>   
                        </Table>                   

                    </div>


             </div>
        </div>
  </>
}

export default Dashboard