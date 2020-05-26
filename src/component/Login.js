import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchLoginData from '../action/fetchLoginData'

function Login() {
    
   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
//    const [emp,setEmp]= useState()

    const loginData =useSelector(state => state.loginData)
    const dispatch = useDispatch()
     const getData = ()=> dispatch(fetchLoginData())


     useEffect(()=>{
         getData()
         
     },[])
    console.log(loginData.loginData)
   

   const handleSubmit =(e)=>{
       e.preventDefault();
 
    
       if(email === loginData.loginData.username && password ===  loginData.loginData.password ){
           console.log('Valid User data')
           window.location.href = "/employeedata"
           
       }else console.log('please enter volid data')


   }
    return (
        <div >
           <form onSubmit={handleSubmit} className="ml-5 border  p-3">
            <div className="form-group">
                <label >Email :</label>
                <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)}  aria-describedby="emailHelp" />
              
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
