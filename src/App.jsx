import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from './store/authSlice'
import authService from "./appwrite/auth"
import { Footer, Header, Loading } from './Components';
import { Outlet } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  //When the app loads, check if the user is logged in or not
  //If the user is logged in, dispatch the login action with user data
  //If the user is not logged in, dispatch the logout action
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => {setLoading(false)})
  },[])

  return !loading ? (
    <div>
      <Header/>
        <main className='bg-gradient-to-r from-blue-900 via-black to-purple-950 min-h-screen w-full '>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  ) : (
    <div>
      <Header/>
        <main>
          <div className="">
            <Loading/>
          </div>
        </main>
      <Footer/>
    </div>
  )
}

export default App