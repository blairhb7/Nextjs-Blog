import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
            <h1 className='font-bold uppercase text-3xl cursor-pointer'>Movement</h1>
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
        </div>
      </div>
      <div className=' flex items-center space-x-5 text-black'>
        <h3>Home</h3>
        <Link className=" cursor-pointer" href='https://twitter.com/MovementBlog1'><h3 className=' cursor-pointer border px-4 py-1 rounded-full border-blue-600 hover:text-white hover:bg-blue-500'>Follow Us On Twitter</h3></Link>
      </div>
    </header>
  )
}

export default Header
