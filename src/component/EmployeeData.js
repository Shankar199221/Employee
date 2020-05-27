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
    console.log(empData.employeeData)
   

    return (
        <div className="container">
            <div className="row"><Link to="/">Back</Link></div>
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
