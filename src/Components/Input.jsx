import {forwardRef, useId} from "react"

const Input = forwardRef(function Input({
    label,type="text",className='',...props
},ref){
    const id = useId()
    return <div>
        {label && <label className="text-white" htmlFor={id}>{label}</label>}
        <input type={type}
        className={className}
        ref={ref}
        {...props}
        id={id} />
    </div>
})

export default Input