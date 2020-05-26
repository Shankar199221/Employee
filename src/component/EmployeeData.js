import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchEmployeeData from '../action/fetchEmployeeData'
import Table from 'react-bootstrap/Table'

function EmployeeData() {
    
    const [data,setData]= useState()

    const empData =useSelector(state => state.empData)
    const dispatch = useDispatch()
     const getData = ()=> dispatch(fetchEmployeeData())


     useEffect(()=>{
         getData()
         setData(empData.employeeData)
     },[])
    console.log(data)
   

    return (
        <div>
            
             <Table responsive>
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
               {data&&  data.map((item)=>{
       return  <tr key={item.id}>
                    <td>1</td>
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
    )
}

export default EmployeeData
