import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { slug: '/', name: 'Home', status: true },
    { slug: '/signup', name: 'SignUp', status: !authStatus },
    { slug: '/login', name: 'Login', status: !authStatus },
    { slug: '/all-posts', name: 'All Posts', status: authStatus },
    { slug: '/create-post', name: 'Create Post', status: authStatus },
  ]

  return (
    <header className="w-full fixed top-4 z-50 px-4">
      <nav className="bg-gradient-to-r from-blue-900 via-black to-purple-950 text-white max-w-6xl mx-auto rounded-2xl shadow-lg shadow-green-500 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">
            <Link to="/">BlogPost</Link>
          </div>

          {/* Hamburger (shown on small screens) */}
          <button
            className="sm:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Navigation (hidden on small, shown on sm and up) */}
          <ul className="hidden sm:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) =>
              item.status ? (
                <li key={item.slug}>
                  <Link
                    to={item.slug}
                    className="px-4 py-2 rounded-full hover:bg-purple-800 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="px-4 py-2 rounded-full hover:bg-red-700 transition">
                <Logout />
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden  flex flex-col text-sm font-xs  w-full " >
            {navItems.map((item) =>
              item.status ? (
                <Link
                  key={item.slug}
                  to={item.slug}
                  className="w-full text-end px-4 py-2 rounded-md hover:bg-purple-800 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : null
            )}
            {authStatus && (
              <div
                className="w-full text-end px-4 py-2 rounded-md hover:bg-red-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <Logout />
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
