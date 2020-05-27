import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchLoginData from '../action/fetchLoginData'
import { useForm } from "react-hook-form";


function Login() {

   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const [emailerror,setEmailerror]= useState(false)
   const [passworderror,setPassworderror]= useState(false)
   const { register, watch, errors } = useForm();


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

            if(email === '' || (!/\S+@\S+\.\S+/.test(email)) ){
                console.log("enater volid credits")
                setEmailerror(true)
            }else setEmailerror(false)
            if(password === '' || password.length < 8 ){
                console.log("minimum 8 characters are Requied")
                setPassworderror(true)
            }else setPassworderror(false)
  
   }
    return (
        <div >
           <form onSubmit={handleSubmit} className="ml-3  p-3">
            <div className="form-group">
                <h1>Login Form</h1>
                <label >Email :</label>
                <input type="email" value={email} name="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}    />
                {emailerror ? <span className="text-danger">enater volid email Adress</span>: ''}
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" value={password} name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}    />
                {passworderror ? <span  className="text-danger"> minimum 8 characters are Requied</span>: ''}
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
