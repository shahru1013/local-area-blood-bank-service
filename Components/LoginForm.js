import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { validateFormData } from '../Functions';

export default function LoginForm() {
  const [redirectSignup, setRedirectSignup] = useState(false);
  const [validationErr, setValidationErr] = useState({});
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleLoginForm= async (e)=>{
     e.preventDefault();
     setValidationErr({});
     const validateResult = validateFormData(formData?.email, formData?.password);
     if(Object.keys(validateResult).length){ 
       setErrMessage(validateResult);
     }else{
       
     }
  }
  const setErrMessage=(message)=>{
      setValidationErr(message)
  }
  const handleInput=(e, type) =>{
     setFormData({
       ...formData,
       [type]: e.target.value
     })
  }
  useEffect(()=>{
    if(redirectSignup){
      router.push('/Auth/Signup');
    }

  },[redirectSignup])
  return (
    <div className="login-form-container">
    <div className="title-container">
      <div className="title">
        <span>LogIn</span>
      </div>
    </div>
    <div className="login-form">
      <form
        onSubmit={handleLoginForm}
        >
        <input placeholder="Email Address *" type="text" onChange={(e)=>handleInput(e,"email")} value={formData?.email || ""} required />
        <input type="password" placeholder="Password *"  onChange={(e)=>handleInput(e,"password")} value={formData?.password || ""} required />
        <input type="submit" />
      </form>
    </div>
    <div className="err-boundary">
        <h3>{validationErr?.mailErr}</h3>
        <h3>{validationErr?.passErr}</h3>
      </div>
    <div className="signup-button">
      <button
        onClick={() => {
          setRedirectSignup(true);
        }}
      >
        Don't have an account? sign up
      </button>
    </div>
    {/* {redirectSignup && <Navigate to="/signup" />} */}
  </div>
  )
}
