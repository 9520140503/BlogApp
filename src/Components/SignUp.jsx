import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import Input from './Input'
import {Button} from "../Components"
import { useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import authService from "../appwrite/auth"
import { toast } from 'react-toastify'
import {login} from "../store/authSlice"


function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")
    const [loader,setLoader] = useState(false)

    const create = async(data) => {
        setError("")
        setLoader(true)
        try {
            console.log(data)
            const userData = await authService.createAccount(data)
            if(userData){
                if(userData){
                dispatch(login(userData))
                toast.success("Login Successful! 🎉")
                navigate('/')
            }
            }
        } catch (error) {
            setError(error.message)
             toast.error("Something went wrong! ❌")
        }finally{
            setLoader(false)
        }
    }

  return (
    <div className='bg-[#0B1D51] w-full max-w-md mx-auto py-5 px-5 rounded-xl max-h-full'>
        <h2 className="text-center text-2xl font-bold text-white mb-8">Sign up to create account</h2>
        <form 
        onSubmit={handleSubmit(create)}
        className='bg-white px-4 py-2 flex flex-col w-full rounded-lg'>
            <Input
            label="Name"
            placeholder="Enter your name"
            className="bg-black/70 max-w-xl w-full p-2 text-white rounded-md mb-5"
            {...register("name", { required: "Name is required" })}
            />
            <Input
            label="Email"
            type='email'
            placeholder="Enter your email"
            className="bg-black/70 max-w-xl w-full p-2 text-white rounded-md mb-5"
            {...register("email",{
                required:"Email is required",
                validate: (value) =>
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                        "Enter a valid email address",
            })}/>

            <Input
            label="Password"
            placeholder="Enter your password"
            className="bg-black/70 max-w-xl w-full p-2 text-white rounded-md mb-4"
            {...register("password",{
                required:"Password is required"
            })}
            />

            {/* Error Show */}
            {error && <p className='text-red-500'>{error}</p>}

            <Button 
            type='submit' 
            className='bg-blue-900 text-green-400 rounded-lg p-1 w-1/2 mx-auto my-4 hover:scale-105 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-purple-700'>
                {loader? "Creating...": "SignUp"}
            </Button>

            <p className='text-center'>Already have an account?</p>

            <Link to='/login'
            className='bg-blue-900 text-green-400 rounded-lg p-1 w-1/2 mx-auto my-4 hover:scale-105 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-purple-700 text-center'>
            Login
            </Link>

        </form>
    </div>
  )
}

export default SignUp