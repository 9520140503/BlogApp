import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import parse from "html-react-parser"
import { Button,Empty,FlipCard} from "../Components"

function AllPosts() {
  const [posts,setPosts] = useState([])
  
  useEffect(() => {
    appwriteService.getPosts()
    .then((fetchPost) => {
      if(fetchPost){
        console.log(fetchPost.documents)
        setPosts(fetchPost.documents || [])
      }
    })
    .catch(error => {
      console.error("Failed to fetch posts:", error)
    })
  },[])

  const handleDelete = (postId) => {
    setPosts((prev) => prev.filter((p) => p.$id !== postId))
  }

  if(posts.length === 0){
    return  <div className='flex flex-col justify-center w-fit mx-auto'>
       <h1 className='bg-clip-text bg-gradient-to-r from-purple-500 via-white to-orange-500 text-transparent text-center text-xl sm:text-3xl sm:font-bold'>There is not post to show</h1>
      <Empty />
    </div>
  }

  return (

 <div className=' w-fit mx-auto'>
   <h1 className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-300 text-transparent bg-clip-text text-center mb-5">
          Explore Your Posts
        </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  sm:gap-4 p-4 min-h-screen  w-fit mx-auto gap-2'>
  {posts.map((post) => (
    <div
      key={post.$id}
    >
      <FlipCard post={post} onDelete={handleDelete}/>
    </div>
  ))}
</div>
 </div>


  )
}

export default AllPosts