import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
        <ul className='flex text-sm gap-5 sm:gap-12 sm:text-md md:text-xl  md:font-semibold md:gap-'>
          {navItems.map((item) => (
            item.status?(
              <li key={item.slug}>
                <Link to={item.slug}>
                {item.name}
                </Link>
              </li>
            ) : (null)
          ))}
          {authStatus && (
            <li>
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header