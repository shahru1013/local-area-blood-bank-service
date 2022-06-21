import React, { useState, useEffect } from "react";
import { validateFormData } from "../Functions";
import { useRouter } from "next/router";

export default function SignupForm() {
  const [formData, setFormData] = useState({});
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [validationErr, setValidationErr] = useState({});
  const router = useRouter();

  const handleSignUpForm= async (e)=>{
     e.preventDefault();
     setValidationErr({});
     const validateResult = validateFormData(formData?.email, formData?.password, formData?.name);
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
    if(redirectLogin){
      router.push('/Auth/Login');
    }

  },[redirectLogin])
  return (
    <div className="login-form-container">
      <div className="title-container">
        <div className="title">
          <span>SignUp</span>
        </div>
      </div>
      <div className="login-form">
        <form
          onSubmit={handleSignUpForm}
        >
          <input placeholder="Full Name *" type="text" required onChange={(e)=>handleInput(e, "name")}/>
          <input placeholder="Email Address *" type="text" required onChange={(e)=>handleInput(e, "email")}/>
          <input type="password" placeholder="Password *" required onChange={(e)=>handleInput(e, "password")}/>
          <input type="submit" value="SignUp"/>
        </form>
      </div>
      <div className="err-boundary">
          <h3>{validationErr?.mailErr}</h3>
          <h3>{validationErr?.passErr}</h3>
          <h3>{validationErr?.nameErr}</h3>
        </div>
      <div className="signup-button">
        <button
          onClick={() => {
            setRedirectLogin(true);
          }}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
