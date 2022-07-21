import {sanityClient, urlFor} from "../../sanity"
import Header from "../../components/Header"
import { Posts } from "../../typings"
import { GetStaticProps } from "next"
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import Footer from "../../components/Footer"




interface IFormInput {
  _id:string;
  name: string;
  email:string;
  comment:string;
}

interface Props {
    post: Posts;
}

interface Props {
  posts: [Posts]
}


const Post = ({ post }: Props) => {

  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch('/api/createComments', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((err) => {
        setSubmitted(false)
        console.log('error', err)
      })
  }

  return (
    <main>
        <Header/>
        
        <div className=" grid grid-cols-1 lg:grid-cols-4">
          <div className=" col-span-3 overflow-y-scroll h-screen scrollbar-hide">
          <img className="w-full overflow-hidden h-96 object-cover" src={urlFor(post.mainImage).url()!} alt="" />
            <article className="max-w-3xl mx-auto p-5">
                <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
                <h2 className=" text-xl font-light text-gray-500 mb-2">{post.description}</h2>
                <div className="flex items-center space-x-2">
                    <img className=" h-10 w-10 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
                    <p className="font-extralight text-sm">
                        Blog post by {""} <span className="text-green-600">{post.author.name}</span> - Published at {new Date(post._createdAt).toString()}
                    </p>
                </div>
                <div className=" mt-10">
                    <PortableText
                        className=" m-1 leading-8 space-y-6 "
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        serializers={{
                            h1: (props: any) => (
                              <h1 className="my5 text-2xl font-bold" {...props} />
                            ),
                            h2: (props: any) => (
                              <h1 className="my5 text-xl font-bold" {...props} />
                            ),
                            li: ({ children }: any) => (
                              <li className="ml-4 list-disc"> {children}</li>
                            ),
                            link: ({ href, children }: any) => (
                              <a href={href} className="text-blue-500 hover:underline">
                                {' '}
                                {children}
                              </a>
                            ),
                          }}
                    />
                </div>
            </article>
            <div>
              <hr className="max-w-lg my-10 mx-auto border border-blue-500" />

              {submitted ? (
                <div className="flex flex-col p-10  my-10 bg-blue-500 w-full text-white items-center mx-auto">
                  <h3 className="text-3xl font-bold">Thank you for submitting your comment!</h3>
                  <p>Once it has been approved, it will appear below!</p>
                </div>
              ): (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
                <h3 className="text-sm text-blue-600">Enjoyed this article?</h3>
                <h4 className="text-3xl font-bold">Leave a comment below!</h4>
                <hr className="py-3 mt-2" />

                <input {...register("_id")} type="hidden" name="_id" value={post._id} />

                <label className="block mb-5">
                  <span className="text-gray-700">Name</span>
                  <input {...register("name", {required: true})} className="shadow border border-black  rounded py-2 px-3 form-input mt-1 block w-full ring-blue-500 outline-none focus:ring" placeholder="Enter Name" type="text" />
                </label>
                <label className="block mb-5">
                  <span className="text-gray-700">Email</span>
                  <input {...register("email", {required: true})} className="shadow border border-black  rounded py-2 px-3 form-input mt-1 block w-full ring-blue-500 outline-none focus:ring" placeholder="Enter Email" type="email" />
                </label>
                <label className="block mb-5">
                  <span className="text-gray-700">Comment</span>
                  <textarea {...register("comment", {required: true})} className="shadow border border-black  rounded py-2 px-3 form-textarea mt-1 block w-full ring-blue-500 outline-none focus:ring" placeholder="Enter Comment" rows={8} />
                </label>

                {/* errors will return when field validation fails*/ }
                <div className=" flex flex-col p-5">
                          {errors.name && (
                            <span className="text-red-500">- the Name Field is required</span>
                          )}
                           {errors.name && (
                            <span className="text-red-500">- the Email Field is required</span>
                          )}
                           {errors.name && (
                            <span className="text-red-500">- the Comment Field is required</span>
                          )}
                </div>
                <input type="submit" className="shadow bg-blue-600  hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white rounded font-bold py-2 px-4 cursor-pointer" />
              </form>

              )}
            </div>
          </div>
          <div className="border-x  col-span-1  border-x-gray-300  w-full m-auto">
          <div className='overflow-y-scroll xs:col-span-3 h-screen scrollbar-hide max-h-screen   '>
            <div className=" text-xs  text-center items-center   h-40 ">
                <h1 className='flex flex-col items-center text-center  uppercase font-extrabold text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-7xl '>Discover More</h1>
             
            </div>
            <div className="h-screen">
             <hr className="max-w-lg my-10 w-3/4 mx-auto border border-gray-200" />
              <h2 className='flex mx-auto font-bold justify-center text-center uppercase text-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl px-1 xl:text-4xl'>Connect With Us</h2>
                <Link className=" " href='https://twitter.com/MovementBlog1'><h2 className="flex mx-auto items-center cursor-pointer justify-center my-4 p-2 text-2xl border rounded-full  text-white bg-blue-500 sm:text-xl px-4 text-center w-3/4 ">Check Us Out On Twitter</h2></Link>
                <div className="flex flex-inline items-center justify-center">
                  <FontAwesomeIcon className="h-12 w-12 text-blue-500  m-0" icon={faTwitter} />
                  <Link href='/'>
                  <h1 className='px-5 font-bold uppercase text-3xl cursor-pointer'>Movement</h1>
                  </Link>
                </div>
                {/* Comments */}
                <div className="flex flex-col p-10 my-10 mx-2 h-auto shadow shadow-blue-500 space-y-2">
                    <h3 className="text-4xl">Comments</h3>
                    <hr className="pb-2"/>


                    {post.comments.map((comment) => (
                      <div key={comment._id} className="">
                        <p className=""><span className="text-blue-500 font-bold">{comment.name}</span>:  {comment.comment}</p>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Post
export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
    _id,
    slug{
    current
  }
  }`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((path: Posts) => ({
    params: { slug: path.slug.current },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=="post"&& slug.current==$slug][0]{
    _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
  'comments': *[
  _type=="comment" &&
  post._ref==^._id &&
  approved==true],
categories,
'allcategories':*[
  _type=="category"
],
description,
mainImage,
slug,
body
  }`
  const post = await sanityClient.fetch(query, { slug: params?.slug })

  if (!post || post.length === 0) {
    return { notFound: true }
  }
  return {
    props: {
      post,
    },
    revalidate: 500,
  }
}