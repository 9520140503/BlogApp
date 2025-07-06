import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6 text-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-semibold hover:opacity-80 transition">
          BlogPost
        </Link>

        {/* Internal Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-80 text-blue-300">
          <a href="https://github.com/9520140503" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/vishesh-raj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://www.instagram.com/vishesh_rajput_2344" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-60 mt-4">&copy; 2025 My BlogPost App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
