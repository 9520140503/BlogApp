import React, { useEffect, useState } from 'react';
import parse from "html-react-parser";
import { Link } from 'react-router-dom';
import { Button } from "../Components";
import appwriteService from "../appwrite/config"

function FlipCard({ post,onDelete }) {
    const [imageUrl,setUrl] = useState(null)

    useEffect(() => {
      if(post.featuredImage){
        appwriteService.getFileView(post.featuredImage)
        .then((url) => {
          if(url){
            setUrl(url)
          }
        }).catch(error => {
           console.error("Image failed to load:",error.message);
        })
      }
    },[post.featuredImage])

    const handleDelete = async() => {
      try {
        await  appwriteService.deletePost(post.$id)
        onDelete(post.$id)
      } catch (error) {
        console.error(" failed to delete:", error.message);
      }
    }

  return (
    <div className="group w-[250px] h-[254px] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front - Shown by default, floats */}
        <div className="absolute inset-0 z-20 rounded-md bg-gradient-to-r flex items-center justify-center [backface-visibility:hidden] hover:shadow-md hover:shadow-orange-500">
          <div className=" text-white text-lg font-semibold">
            💀 Hover Me
          </div>
        </div>

        {/* Back - Shows on hover */}
        <div className="absolute inset-0 z-10 [transform:rotateY(180deg)] bg-[#151515] text-white rounded-md flex flex-col justify-between p-3 [backface-visibility:hidden]">
          <div className="relative z-1">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-fit h-[120px] object-fill rounded mb-2 mx-auto"
            />
            <h3 className="text-base font-semibold truncate mb-1">{post.title}</h3>
            <div className="text-xs text-gray-300 overflow-y-auto max-h-[50px] mb-1">
              {post.content && parse(post.content)}
            </div>
            <div className="flex fixed bottom-5 w-full gap-4">
              <Button
                type="submit"
                onClick={handleDelete}
                className="text-green-400 bg-pink-800 p-1 w-1/3 rounded-md text-xs"
              >
                Delete
              </Button>
              <Link
                to={`/edit-post/${post.$id}`}
                className="text-pink-400 bg-green-800 p-1 px-3 rounded-md text-xs flex items-center justify-center w-1/3 "
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
