'use client';

import Link from "next/link";

const Error  = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50'>
      <h1 className='text-6xl font-bold text-pink-700'>Error</h1>
      <p className='text-4xl font-medium'>Something went wrong...💦</p>
      <Link href="/" className='mt-4 text-xl text-indigo-600 hover:underline'>Go back Home</Link>
    </div>
  )
}

export default Error 
