import React from 'react';
import { motion } from "framer-motion";

function Home() {
  const icons = [
    { emoji: '📚', label: 'books' },
    { emoji: '🧠', label: 'mind' },
    { emoji: '💡', label: 'idea' },
    { emoji: '✍️', label: 'write' },
    { emoji: '🌐', label: 'connect' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12  overflow-hidden">
      <div className="max-w-4xl text-center text-white space-y-10">

        {/* Animated Icon Row */}
        <div className="flex justify-center space-x-4 text-4xl sm:text-5xl mb-4">
          {icons.map((icon, idx) => (
            <motion.span
              key={idx}
              role="img"
              aria-label={icon.label}
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            >
              {icon.emoji}
            </motion.span>
          ))}
        </div>

        {/* Gradient Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-300 text-transparent bg-clip-text drop-shadow-lg animate-pulse">
          Welcome to My BlogPost App
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90">
          A place to express your thoughts, explore powerful stories, and connect with curious minds.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: '📝 Write Blogs',
              desc: 'Share your experiences, stories, or tutorials with the world.',
            },
            {
              title: '📚 Read Posts',
              desc: 'Explore insightful articles and ideas from passionate writers.',
            },
            {
              title: '💬 Share Ideas',
              desc: 'Engage in discussions and connect with fellow thinkers.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/40"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-200 transition">
                {item.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
