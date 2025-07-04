import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input, RTE,Select } from '../Components'


function AddPost({post}) {
  const {register,handleSubmit,control,getValues,watch,setValue} = useForm({
    defaultValues:{
      title:post?.title || "",
      slug:post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  })

  const submitPost = () => {

  }

  const slugTransorm = () => {

  }

  useEffect(() => {

  })

  return (
    <form onSubmit={handleSubmit(submitPost)} className='bg-blue-500 min-h-screen m-10 flex flex-wrap md:flex-nowrap gap-x-3'>
      <div className='bg-purple-900 w-full md:w-2/3'>
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
            onInput={(e) => {setValue("slug",slugTransorm(e.currentTarget.value),{ shouldValidate: true })}}
            /> 
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
      </div>
      <div className='bg-purple-900 w-full md:w-1/3 p-5'>
        <Input
        label="Featured Image:"
        type="file"
        className="m-4 text-green-400"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        {...register("featured image",{
          required: !post
        })}
        />

        <Select
        label="Status:"
        options={["","active","inactive"]}
        className="m-2 bg-orange-400 outline-none rounded-lg"
        {...register("status",{
          required:true
        })}/>

        <button type='submit'
         className='bg-black text-fuchsia-400 p-2 w-1/3 rounded-md mx-32 mt-6'>
          {post ? "Update":"Submit"}
         </button>

      </div>
          </form>
  )
}

export default AddPost