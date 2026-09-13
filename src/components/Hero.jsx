import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import profileImg from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-lg font-medium mb-4 tracking-widest uppercase"
        >
          Hello World! 👋 I am
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Nimra Kareem
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          I am a{' '}
          <span className="text-purple-400 font-semibold">
            <ReactTyped
              strings={[
                'Frontend Developer',
                'React.js Developer',
                'UI/UX Enthusiast',
                'Problem Solver',
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building beautiful, responsive web applications
          using React.js, Tailwind CSS, and modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition duration-300"
          >
            Download CV
          </motion.button>
        </motion.div>

                {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-md opacity-70 scale-105" />
            {/* Image */}
            <img
              src={profileImg}
              alt="Nimra Kareem"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/50"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero