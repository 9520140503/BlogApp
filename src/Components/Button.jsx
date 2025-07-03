
import React from 'react'

export default function Button({
    children,
    type='button',
    className='',
    ...props

}) {
  return (
   <button type={type} className={className} {...props}>
    {children}
   </button>
  )
}
