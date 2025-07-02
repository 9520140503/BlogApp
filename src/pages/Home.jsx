import React from 'react'

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-black to-purple-950 px-4">
      <div className="max-w-3xl text-center text-white space-y-8 py-16">
        
        {/* Gradient Heading */}
        <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-300 text-transparent bg-clip-text">
          Welcome to My BlogPost App
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl max-w-xl mx-auto">
          A place to express your thoughts, read amazing blogs, and connect with curious minds like yours.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-purple-500 shadow-md ease-in-out">
            <h3 className="text-xl font-semibold mb-2">📝 Write Blogs</h3>
            <p className="text-sm text-white/80">Share your experiences, stories, or tutorials with the world.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-purple-500 shadow-md ease-in-out">
            <h3 className="text-xl font-semibold mb-2">📚 Read Posts</h3>
            <p className="text-sm text-white/80">Explore interesting articles and ideas from diverse authors.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-purple-500 shadow-md ease-in-out">
            <h3 className="text-xl font-semibold mb-2">💬 Share Ideas</h3>
            <p className="text-sm text-white/80">Join the discussion and connect with fellow thinkers.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
