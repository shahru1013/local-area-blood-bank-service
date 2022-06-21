import Head from 'next/head'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Inter city blood bank.</title>
        <meta name="description" content="Find blood donator in your nearest area." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={()=>{
          router.push("/Auth")
        }}>
           Go to auth
        </button>
      </div>
    </div>
  )
}
