import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6">

        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition">
          Logo
        </Link>

        {/* Internal Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-60">&copy; 2025 My BlogPost App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
