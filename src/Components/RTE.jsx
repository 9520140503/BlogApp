import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form'
import conf from '../config/conf'

export default function RTE({
    name,control,label,defaultValue=""
}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1 text-white'>
            {label}</label>}

        <Controller
        name={name || "content"}
        control={control}  //Control by parent
        render={({field: {onChange}}) => (
            <Editor
            apiKey={conf.tinymceApi}
            initialValue={defaultValue}
            init={{
                initialValue:defaultValue,
                height: 500,
                menubar: true,
                plugins:[
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
                 content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }'
                 }}
                 onEditorChange={onChange}/>
        )}
     />
    </div>
  )
}

