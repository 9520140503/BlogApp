import React, { useId } from 'react'
import { forwardRef } from 'react'

const Select = forwardRef( function Select({
    label,options=[],className="",...props
},ref) {

   const id = useId()

  return (
    <div>
        {label && <label className="text-white font-semibold" htmlFor={id}>{label}</label>}
        <select 
        id={id}
        {...props}
        ref={ref}
        className={`${className}`}>
            {options.map((option) =>(
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
    
  )})
  
export default Select