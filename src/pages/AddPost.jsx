import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input, RTE,Select } from '../Components'
import Animated from "./Animated"
import appwriteService from  "../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function AddPost({post}) {
  const {register,handleSubmit,control,getValues,watch,setValue} = useForm({
    defaultValues:{
      title:post?.title || "",
      slug:post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  })

  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()

  const submitPost = async(data) => {
      if(post){
        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]): null
        if(file){
          appwriteService.deleteFile(post.featuredImage)
        }
        const dbPost = await appwriteService.updatePost(post.$id,{
            ...data,featuredImage: file ? file.$id : undefined
        })
        if(dbPost){
          navigate('/all-posts')
          // TODO: ------
          console.log("Post added sucessfully")
        }

      }else{
        const file = await appwriteService.uploadFile(data.image[0])
        if(file){
          const fileId = file.$id
          data.featuredImage = fileId
          const dbPost = await appwriteService.createPost({...data,userId: userData.$id})

          if(dbPost){
           navigate('/all-posts')
            // TODO: ------
            console.log("Post added sucessfully")
          }
        }
      }
  }

   const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

  useEffect(() => {
    const subscription = watch((value,{name})=> {
        if(name === "title"){
          setValue("slug",slugTransform(value.title) ,{shouldValidate:true})
        }
    })
    return () => subscription.unsubscribe()
  },[watch,slugTransform,setValue])

  return (
    <form onSubmit={handleSubmit(submitPost)} className=' min-h-screen m-10 mt-4 flex flex-wrap md:flex-nowrap gap-x-3'>
      <div className=' w-full md:w-2/3 bg-gray-900 p-2 rounded-lg shadow-md shadow-blue-400'>
            <div>
              <Input
              label="Title"
              placeholder="Enter Title"
              className='m-2 p-1 w-1/2 rounded-md outline-0 bg-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500' 
              {...register("title",{
                required:true
              })}/>
            <Input
            label="Slug"
            placeholder="Slug"
            className='m-2 p-1 w-1/2 rounded-md outline-0 bg-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500' 
            {...register("slug",{
              required:true
            })}
            onInput={(e) => {setValue("slug",slugTransform(e.currentTarget.value),{ shouldValidate: true })}}
            /> 
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
      </div>
      <div className='w-full md:w-1/3 p-5 pt-1 bg-gray-900 rounded-lg mt-5 md:mt-0 h-fit shadow-lg shadow-blue-400' >
        <div className=' flex flex-col items-center text-xs sm:text-md'>
          <Input
        label="Featured Image:"
        type="file"
        className="m-4 text-green-400"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        {...register("image",{
          required: !post
        })}
        />

        <Select
        label="Status:"
        options={["","active","inactive"]}
        className="m-2 bg-orange-400 outline-none rounded-sm px-12 py-2"
        {...register("status",{
          required:true
        })}/>

       <button
          type="submit"
          className="bg-blue-900 text-fuchsia-400 p-2 w-1/3 rounded-md mt-6"
        >
          {post ? "Update" : "Submit"}
        </button>

        </div>
        <div className='flex justify-center hidden md:flex md:mt-10'>
          <Animated/>
        </div>

      </div>
          </form>
  )
}

export default AddPost