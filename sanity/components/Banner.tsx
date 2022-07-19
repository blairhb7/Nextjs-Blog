import React from 'react'

function Banner() {
  return (
    <div className='bg-cover custom-img flex justify-between items-center  border-y border-gray-200 py-10 lg:py-0 '>
        <div className=' px-10 space-y-5 '>
            <h1 className='text-2xl w-44  max-w-xl font-serif sm:text-4xl md:text-3xl md:w-3/4 lg:w-full lg:text-6xl'>
                <span className='underline decoration-black decoration-4'>Movement</span> is a place to write, read, and connect</h1>
            <h2 className=' w-44 sm:text-sm sm:w-60 lg:text-xl lg:w-3/4'>It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full mr-40 xl:mr-26' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
    </div>
  )
}

export default Banner