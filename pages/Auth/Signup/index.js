import React from 'react';
import SignupForm from '../../../Components/SignupForm';
import Head from 'next/head';
export default function index() {
  return (
    <div className='login-container'>
       <Head>
        <title>Inter city blood bank/Signup</title>
        <meta name="description" content="Signup to be a blood donor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SignupForm/>
     </div>
  )
}
