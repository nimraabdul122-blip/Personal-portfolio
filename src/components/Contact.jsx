import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Let's work together!</p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: <FaEnvelope />, label: 'Email', value: 'nimraabdul122@gmail.com', color: 'text-purple-400' },
            { icon: <FaPhone />, label: 'Phone', value: '03296106212', color: 'text-blue-400' },
            { icon: <FaLinkedin />, label: 'LinkedIn', value: 'https:www.linkedin.com/in/nimra-kareem-dev', color: 'text-cyan-400' },
            { icon: <FaGithub />, label: 'GitHub', value: 'https://github.com/nimraabdul122-blip', color: 'text-pink-400' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900/50 border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4 hover:border-purple-500/50 transition duration-300"
            >
              <div className={`text-3xl ${item.color}`}>{item.icon}</div>
              <div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm border-t border-purple-500/20 pt-8"
        >
          <p>© 2026 Nimra Kareem. Built with React.js & Tailwind CSS 💜</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact