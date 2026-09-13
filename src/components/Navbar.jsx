import { motion } from 'framer-motion'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-purple-500/20 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
        >
          &lt;Nimra /&gt;
        </motion.h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-purple-400 cursor-pointer transition duration-300 text-sm font-medium"
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition duration-300"
        >
          Hire Me
        </motion.button>

      </div>
    </motion.nav>
  )
}

export default Navbar