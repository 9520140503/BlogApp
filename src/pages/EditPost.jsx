import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddPost from './AddPost'
import appwriteService from "../appwrite/config"


function EditPost() {
  const [post,setPost] = useState()
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    appwriteService.getPost(slug)
    .then((post) => {
      if(post){
        setPost(post)
      }else{
        navigate('/')
      }
    })
  },[slug,navigate])

  return (
    <div>
      <AddPost post={post}/>
    </div>
  )
}

export default EditPost