import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import 'style/index.css'



export default function FirstPost() {
  return (
    <>
    <Head>
    <title>First Post</title>
    </Head>
 
    
    <Script src="https://connect.facebook.net/en_US/sdk.js
     " strategy='lazyonload'
       onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
       }>

    </Script>
        <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p className="description">
            We talk about everything tech <code>pages/index.js</code>
        </p>
      
      
    </>
    
  )
}
