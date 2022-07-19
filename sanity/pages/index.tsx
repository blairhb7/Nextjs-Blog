import Link from 'next/link'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostSection from '../components/PostSection'
import { sanityClient, urlFor} from "../sanity"
import { Posts } from '../typings'
import { SunIcon} from "@heroicons/react/outline"
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/footer'



interface Props {
  posts: [Posts]
}


export default function Home({posts}: Props) {
  
  console.log(posts)
  return (
    <div className="max-w-screen-2xl h-screen mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
       <div className='grid overflow-hidden  relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='grid overflow-y-scroll h-screen scrollbar-hide col-span-2 grid-cols-1 p-3 sm:grid-cols-2 px-2 lg:grid-cols-2  gap-3 md:gap-6 md:py-4 2xl:grid-cols-3 '>
              {posts.map(post => (
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                  <div className='group w-full cursor-pointer border rounded-lg h-96 overflow-hidden'>
                    <img className='h-56 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' 
                    src={urlFor(post.mainImage).url()!} alt="" />
                    <div className='flex justify-between p-5 bg-white'>
                      <div className=''>
                        <p className='text-lg font-bold'>{post.title}</p>
                        <p className=' text-sd'>{post.description}  by <span className="text-orange-500 font-bold">{post.author.name}</span></p>
                      </div>
                      <img className='h-12 ml-1 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className=' sm:col-span-2 lg:col-span-1 overflow-y-scroll  scrollbar-hide  flex-col sm:inline-flex  border border-gray-200 w-full mt-4 mb-5 rounded-lg overflow-hidden '>
            <div className=" grid grid-cols-1 text-xs  text-center items-center m-8   ">
                <h1 className='flex flex-col items-center text-center text-7xl uppercase font-extrabold  '>Discover More</h1>
             
            </div>
            <div className="">
            <hr className="max-w-lg my-6 w-3/4 mx-auto border border-gray-200" />
              <h2 className='flex mx-auto font-bold justify-center text-lg text-bold'>What We're Reading Today</h2>
              {posts.map(post => (
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                  <div className=' group cursor-pointer rounded-lg h-14 '>
                    <div className='flex flex-inline w-full m-0 px-12 py-4 bg-white'>
                    <img className='h-12 mr-4 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="" />

                      <div className=''>
                        <p className='text-sm font-bold'>{post.title}</p>
                        <p className=' text-xs'>{post.description}  by {post.author.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              <div className=" flex flex-inline  mx-auto w-full">
                  <div className=" w-full">
                  <hr className="max-w-lg my-8 w-3/4 mx-auto border border-gray-200" />
                  <h2 className='flex mx-auto font-bold justify-center text-center uppercase text-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl'>Connect With Us</h2>
                  <Link className=" " href='https://twitter.com/MovementBlog1'><h2 className="flex mx-auto items-center cursor-pointer justify-center my-4 p-2 text-xl border rounded-full  text-white bg-blue-500 sm:text-2xl px-4 text-center w-3/4 ">Check Us Out On Twitter</h2></Link>
                  <div className="flex flex-inline items-center justify-center">
                  <FontAwesomeIcon className="h-12 w-12 text-blue-500  m-0" icon={faTwitter} />
                    <Link href='/'>
                    <h1 className='px-5 font-bold uppercase text-3xl cursor-pointer'>Movement</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    author ->{
      name,
      image
    },
    'allcategories':*[
      _type=="category"
    ],
  categories,
  description,
  mainImage
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}


