import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchLoginData from '../action/fetchLoginData'



function Login() {

   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const [emailerror,setEmailerror]= useState(false)
   const [passworderror,setPassworderror]= useState(false)
   


    const loginData =useSelector(state => state.loginData)
    const dispatch = useDispatch()
     const getData = ()=> dispatch(fetchLoginData())


     useEffect(()=>{
         getData()
         
     },[])
  
   

   const handleSubmit =(e)=>{
       e.preventDefault();
       if(email === loginData.loginData.username && password ===  loginData.loginData.password ){
           
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
        <div className="row">
           <form onSubmit={handleSubmit} className="form  p-3 ">
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
