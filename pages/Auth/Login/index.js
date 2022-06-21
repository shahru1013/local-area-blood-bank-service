import React from 'react';
import LoginForm from '../../../Components/LoginForm';
import Head from 'next/head';

export default function index() {
  return (
    <div className='login-container'>
      <Head>
        <title>Inter city blood bank/Login</title>
        <meta name="description" content="Login to find a blood donor in your area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm/>
    </div>
  )
}
