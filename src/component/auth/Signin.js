import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userSignin, adminSignupReset } from '../../redux/auth'

import {useNavigate, Link} from 'react-router-dom'

function Signin() {
  const navigate = useNavigate()
    const {user, success, loading}  = useSelector((state) => state.user)

    //state for input field
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    

    
   //function for onChange event
   const emailchange = (e) => {
    setemail(e.target.value)
    }
    
  const passchange = (e) => {
    setpassword(e.target.value)
  }

    const dispatch = useDispatch();//this will enable us call any action in the redux;
    
   //send data to the backend
//getting all state
   
const wholestate = {email, password}

    
const submit = (e) => { 
    e.preventDefault()
      dispatch(userSignin(wholestate))
     
      }
      
      // useEffect to navigate the user
      useEffect(() => {
        if (success === true) {
              navigate('/')
            }
            console.log('usefect working')
              return () => {
                dispatch(adminSignupReset())
            }
          }, [success])
  return (
    <div className="signUp-container">
    <div class="account section">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
            <div class="login-form border p-5">
                <div class="text-center heading">
                <h2 class="mb-2">Sign Up</h2>
                <p class="lead">Already have an account? <a href="/login"> Login now</a></p>
                </div>
    
                <form action="#"   onSubmit={submit} encType="multipart/form-data">
              
                <div class="form-group mb-4">
                <label>Email</label>
                <input class="form-control" type="text" name='email' placeholder="user@example.com"  onChange={emailchange} value={email}/> 
                </div>
                <div class="form-group mb-4">
                <label>Password</label>
                         <input class="form-control" type="password" name='password' placeholder="••••••" onChange={passchange} value={password}/>
                </div>
    
                <div class="row">
                 <div class="col d-flex justify-content-center">
                     <button class="btn btn-primary" type="submit">{loading === 'pending' ? 'Logging In' : 'Login' }</button>
                 </div>
      </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Signin