import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-300 text-center lg:text-left">
  <div className="container p-6 text-gray-800">
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="mb-6 md:mb-0">
        <h5 className="font-medium mb-2 text-4xl text-blue-500 uppercase">Movement</h5>

        <p className="mb-4">
        <span className=' decoration-black decoration-4'>Movement</span> is a place to write, read, and connect! Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </div>

      <div className="mb-6 md:mb-0">
        <div className="px-6 pt-10">
            <form action="">
            <div className="grid grid-cols-1 md:grid-cols-3 gird-cols-1 gap-4 xl:flex xl:justify-center  xl:items-center">
                <div className="md:ml-auto md:mb-6 ">
                <p className="text-gray-800 sm:text-sm">
                    <strong>Sign up for our newsletter</strong>
                </p>
                </div>

                <div className="md:mb-6">
                <input
                    type="text"
                    className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none
                    "
                    id="exampleFormControlInput1"
                    placeholder="Email address"/>
                </div>

                <div className="md:mr-auto mb-6">
                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
                </div>
            </div>
            </form>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center bg-black text-gray-200 p-4" >
    © 2021 Copyright:
  </div>
</footer>
  )
}

export default Footer