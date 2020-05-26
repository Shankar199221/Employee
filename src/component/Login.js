import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchLoginData from '../action/fetchLoginData'
import {useForm} from 'react-hook-form';

function Login() {
   
   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const { register,errors } = useForm();


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
           <form onSubmit={handleSubmit} className="ml-3  p-3">
            <div className="form-group">
                <h1>Login Form</h1>
                <label >Email :</label>
                <input type="email" value={email} name="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}  aria-describedby="emailHelp"   ref={register({ required: true })}  />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" value={password} name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}   ref={register({ required: true })}  />
                {errors.password && <span>This field is required</span>}
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
