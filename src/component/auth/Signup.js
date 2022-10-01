import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userSignup, adminSignupReset } from '../../redux/auth'
import {useNavigate} from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
    const {user, success, loading}  = useSelector((state) => state.user)
    //state for input field
    const [email, setemail] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [address, setaddress] = useState('')
    const [phone, setphone] = useState('')
    const [country, setcountry] = useState('')
    const [state, setstate] = useState('')
  const [photo, setphoto] = useState('')
  //preview 
  const [preview, setPreview] = useState(null);

    
   //function for onChange event
   const emailchange = (e) => {
    setemail(e.target.value)
    }
    
   const countrychange = (e) => {
    setcountry(e.target.value)
    }
    
   const statechange = (e) => {
    setstate(e.target.value)
    }
    
  const userchange = (e) => {
    setusername(e.target.value)
  }


  const passchange = (e) => {
    setpassword(e.target.value)
  }
  const addresschange = (e) => {
    setaddress(e.target.value)
  }

  const phonechange = (e) => {
    setphone(e.target.value)
 }
 
    const photochange = (e) => {
        setphoto(e.target.files[0])
      console.log(e.target.files[0])
      const fileobject = (URL.createObjectURL(e.target.files[0]))
      setPreview(fileobject)
      console.log('this is fileobject ; ' , fileobject)

    
    }
  
   const dispatch = useDispatch();//this will enable us call any action in the redux;
    
   //send data to the backend
//getting all state
   
const formdata = new FormData()

formdata.append('blogImage', photo)
formdata.append('email', email)
formdata.append('username', username)
formdata.append('password', password)
formdata.append('address', address)
formdata.append('phone', phone)
formdata.append('state', state)
formdata.append('country', country)

const submit = (e) => { 
    e.preventDefault()
      dispatch(userSignup(formdata))
     
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
                <label>Username</label>
                <input class="form-control" type="text" name="username" placeholder="johnny.s" onChange={userchange}  />
                </div>
                <div class="form-group mb-4">
                <label>Email</label>
                <input class="form-control" type="text" name='email' placeholder="user@example.com"  onChange={emailchange} value={email}/> 
                </div>
                <div class="form-group mb-4">
                <label>Password</label>
                         <input class="form-control" type="password" name='password' placeholder="••••••" onChange={passchange} value={password}/>
                </div>
                <div class="form-group">
                <label>Phone</label>
                         <input class="form-control" type="number" name='phone' placeholder="phone" onChange={phonechange} value={phone} /> 
                </div>
                <div class="form-group">
                <label>Address</label>
                         <input class="form-control" type="text" placeholder="Address" name='address' onChange={addresschange} value={address} />
                </div>
                <div class="form-group">
                <label>Country</label>
                         <input class="form-control" type="text" name='country' placeholder="country" onChange={countrychange}  /> 
                </div>
                <div class="form-group">
                <label>State</label>
                         <input class="form-control" type="text" name='state' placeholder="state" onChange={statechange}  /> 
                </div>
                <div class="form-group">
                <label>picture</label>
                    <input class="form-control" type="file" filename='blogImage' onChange={photochange} />
                    <div className='d-flex justify-content-center mt-3' >
                    {preview === null ? ''  : <img src={preview} class="img-fluid" alt="..." /> }
                    
                    </div>
                </div>
    
                <div class="row">
                 <div class="col d-flex justify-content-center">
                     <button class="btn btn-primary" type="submit">{loading === 'pending' ? 'Signing Up' : 'Signup' }</button>
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

export default Signup