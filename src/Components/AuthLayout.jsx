import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Loading} from "../Components"

function AuthLayout({
    authentication=true,children
}) {
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoading(false)
    },[authStatus,authentication,navigate])

  return (
    <div>
        {!loading? (
            <div>
                {children}
            </div>
        ) : (
            <div>
            <Loading/>
            </div>
        )

        }
    </div>
  )
}

export default AuthLayout