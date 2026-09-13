import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

function About() {
  return (
    <section id="about" className="py-20 px-6 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 blur-md opacity-50 scale-105" />
              <img
                src={profileImg}
                alt="Nimra Kareem"
                className="relative w-80 h-80 object-cover rounded-2xl border-2 border-purple-500/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Front-End Developer & React Enthusiast
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a passionate Front-End Developer and BS Software Engineering 
              graduate from Virtual University, Lahore. I specialize in building 
              beautiful, responsive web applications using React.js, Tailwind CSS, 
              and modern web technologies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I completed my internship at FY Industries Pvt Ltd where I built 
              real client projects and worked in a professional agile team. 
              I am passionate about creating pixel-perfect UIs and solving 
              real-world problems through code.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { number: '5+', label: 'Projects' },
                { number: '1+', label: 'Internship' },
                { number: '2+', label: 'Certifications' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
                >
                  <h4 className="text-2xl font-bold text-purple-400">{stat.number}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.a
              href="/Nimra_Kareem_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About