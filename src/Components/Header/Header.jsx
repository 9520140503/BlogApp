import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navItems =[
    {
      slug: '/',
      name: 'Home',
      status: true
    },
    {
      slug: '/signup',
      name: 'SignUp',
      status: !authStatus
    },
    {
      slug: '/login',
      name: 'Login',
      status: !authStatus
    },
    {
      slug: '/all-posts',
      name: 'All Posts',
      status: authStatus
    },
    {
      slug: '/create-post',
      name: 'Create Post',
      status: authStatus
    }
  ]
  return (
    <div className='w-full bg-gradient-to-r from-blue-900 via-black to-purple-950 text-white flex justify-around items-center py-4  shadow-lg shadow-green-500 fixed top-0 z-50'>
      <div className='sm:text-xl  md:text-2xl font-semibold sm:font-bold text-green-400 lg:text-3xl'>
        <Link to={'/'}>
          BlogPost
        </Link>
      </div>
      <div>
        <ul className='flex items-center justify-center text-xs gap-5 sm:gap-8 md:text-md  md:font-semibold md:gap-20'>
          {navItems.map((item) => (
            item.status?(
              <li key={item.slug}>
                <Link to={item.slug} className='hover:bg-purple-900 p-2 rounded-lg duration-500'>
                {item.name}
                </Link>
              </li>
            ) : (null)
          ))}
          {authStatus && (
            <li className='hover:bg-purple-900 p-2 rounded-lg duration-500 cursor-pointer'>
              <Logout/>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header