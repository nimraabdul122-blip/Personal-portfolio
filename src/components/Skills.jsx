import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss, SiRedux } from 'react-icons/si'

const skills = [
  { name: 'React.js', icon: <FaReact />, color: 'text-blue-400', level: 85 },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', level: 80 },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-400', level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', level: 85 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400', level: 85 },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-purple-400', level: 75 },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-400', level: 75 },
  { name: 'Figma', icon: <FaFigma />, color: 'text-pink-400', level: 70 },
]

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">

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
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
            >
              {/* Icon */}
              <div className={`text-5xl ${skill.color} mb-4 flex justify-center`}>
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold mb-3">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills