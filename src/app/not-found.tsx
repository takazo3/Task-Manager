import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50'>
      <h1 className='text-8xl font-bold text-pink-700'>404</h1>
      <p className='text-4xl font-medium'>Page is not found.</p>
      <Link href="/" className='mt-4 text-xl text-indigo-600 hover:underline'>Go back Home</Link>
    </div>
  )
}

export default NotFoundPage
