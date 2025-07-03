import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import {Button} from "../Components"
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import {login} from '../store/authSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

function Login() {
    const {handleSubmit,register} = useForm()
    const [error,setError]= useState('')
    const [loader,setLoader] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const loginHandle = async(data) => {
        setError("")
        setLoader(true)
        try {
            const userData = await authService.login(data)
            if(userData) {
                dispatch(login(userData))
                navigate('/')
                toast.success("Login Successful! 🎉")
            }
        } catch (error) {
            setError(error.message);
            toast.error("Something went wrong! ❌")
        }

        finally{
            setLoader(false)
        }
    }
    
  return (
    <div className='bg-[#0B1D51] w-full max-w-md mx-auto py-5 px-5 rounded-xl max-h-full'>
        <h2 className="text-center text-2xl font-bold text-white mb-8">Login</h2>
        <form 
        onSubmit={handleSubmit(loginHandle)}
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
            type='password'
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
                {loader? "Login...": "Login"}
            </Button>


            <p className='text-center'>OR</p>

            <Link to='/signup'
            className='bg-blue-900 text-green-400 rounded-lg p-1 w-1/2 mx-auto my-4 hover:scale-105 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-purple-700 text-center'>
            Signup
            </Link>

        </form>
    </div>
  )
}

export default Login