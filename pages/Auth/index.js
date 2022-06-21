import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link';
export default function() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();
  useEffect(()=>{
    isSignedIn?router.push('/Home'):router.push('/Auth/Login');
  },[isSignedIn])
  return (
   <></>
  )
}
