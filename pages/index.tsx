import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hackbase</title>
        <meta name="description" content="Somthing using supabase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className='text-xl text-center my-20'>
        Hello World
      </p>
    </div>
  )
}
