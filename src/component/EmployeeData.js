import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchEmployeeData from '../action/fetchEmployeeData'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

function EmployeeData() {
    
    

    const empData =useSelector(state => state.empData)
    const dispatch = useDispatch()
     const getData = ()=> dispatch(fetchEmployeeData())


     useEffect(()=>{
         getData()
       
     },[])
   
   

    return (
        <div className="container">
            <div className="row"><Link to="/">
                <svg className="bi bi-arrow-bar-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L3.207 8l2.647-2.646a.5.5 0 0 0 0-.708z"/>
                    <path fill-rule="evenodd" d="M10 8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0 0 1h6.5A.5.5 0 0 0 10 8zm2.5 6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z"/>
                </svg>
                Back</Link></div>
           <div className="row">
             <Table responsive className="table-striped  table-bordered table-dark table-dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>PhoneNum</th>
                
                </tr>
            </thead>
            <tbody>
               {empData.employeeData &&  empData.employeeData.map((item)=>{
                 return  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenum}</td>
                        </tr>
            }) 
            }
                        
                        </tbody>
            </Table> 
            </div> 
        </div>
    )
}

export default EmployeeData
