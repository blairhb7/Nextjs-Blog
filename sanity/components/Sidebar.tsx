import Link from 'next/link'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostSection from '../components/PostSection'
import { sanityClient, urlFor} from "../sanity"
import { Posts } from '../typings'



  


const Sidebar = () => {
  return (
    <div className='overflow-y-scroll h-screen scrollbar-hide max-h-screen   '>
            <div className=" text-xs  text-center items-center   h-40 ">
                <h1 className='flex flex-col items-center text-center text-4xl uppercase font-extrabold  '>Discover More</h1>
             
            </div>
            <div className="h-screen">
            <hr className="max-w-lg my-10 w-3/4 mx-auto border border-gray-200" />
              <h2 className='flex mx-auto font-bold justify-center text-lg text-bold'>What We're Reading Today</h2>
            </div>
    </div>
  )
    
  
}




export default Sidebar