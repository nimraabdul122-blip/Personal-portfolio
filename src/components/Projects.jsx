import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Admin Dashboard',
    description: 'Fully responsive admin dashboard with sidebar navigation, stats cards, revenue chart and orders table.',
    tech: ['React.js', 'Tailwind CSS', 'Recharts', 'React Router'],
    github: 'https://github.com/nimraabdul122-blip',
    color: 'from-purple-500 to-blue-500',
  },
  {
    title: 'AI Chatbot',
    description: 'AI powered chatbot integrated with Google Gemini API with real-time responses and typing animation.',
    tech: ['React.js', 'Tailwind CSS', 'Gemini API'],
    github: 'https://github.com/nimraabdul122-blip',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'ShopSphere',
    description: 'E-commerce platform with product categories, search, cart management and real-time cart functionality.',
    tech: ['React.js', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/nimraabdul122-blip',
    color: 'from-pink-500 to-purple-500',
  },
  {
    title: 'SkyPulse',
    description: 'Real-time weather app with geolocation-based search and dynamic weather updates.',
    tech: ['JavaScript', 'OpenWeatherMap API'],
    github: 'https://github.com/nimraabdul122-blip',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Netflix Clone',
    description: 'Pixel-perfect Netflix UI clone with responsive design and dynamic content rendering.',
    tech: ['React.js', 'CSS'],
    github: 'https://github.com/nimraabdul122-blip',
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'FitTrack Pro',
    description: 'Fitness management platform with 10+ modules including user registration and workout plans.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/nimraabdul122-blip',
    color: 'from-green-500 to-cyan-500',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Things I have built</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition duration-300"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition duration-300 text-sm"
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects