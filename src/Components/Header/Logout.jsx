import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {logout as logoutAction } from "../../store/authSlice"
import authService from '../../appwrite/auth'
import {Loading as Loader} from "../../Components"

function Logout() {
const dispatch = useDispatch()
const navigate  = useNavigate()
const [loader,setLoader] = useState(false)


const logout = async() => {
    setLoader(true)
    try {
        await authService.logout()
        dispatch(logoutAction())
        navigate('/')
    } catch (error) {
        console.log(error.message)
    } finally{
        setLoader(false)
    }
}
  return (
    <div>
        <button onClick={logout}>
            {loader? "LoggingOut✨" : "Logout"}
        </button>
    </div>
  )
}

export default Logout