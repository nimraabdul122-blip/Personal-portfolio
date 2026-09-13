
import { motion } from "framer-motion"
import { FaBriefcase, FaCertificate } from "react-icons/fa"

const experiences = [
  {
    date: "Oct 2025 — Jan 2026",
    title: "Front-End Developer Intern",
    company: "FY Industries Pvt Ltd",
    location: "Lahore, Pakistan",
    icon: FaBriefcase,
    gradient: "from-purple-500 to-blue-500",
    dateColor: "text-purple-400",
    points: [
      "Built responsive React.js and Tailwind CSS interfaces.",
      "Integrated REST APIs and converted Figma designs into functional interfaces.",
      "Contributed to agile development workflows.",
    ],
  },
  {
    date: "Feb 2026 — May 2026",
    title: "Full Stack Web Development",
    company: "NAVTTC",
    location: "Government Sponsored Program",
    icon: FaCertificate,
    gradient: "from-blue-500 to-cyan-500",
    dateColor: "text-blue-400",
    points: [
      "Worked with React.js, JavaScript, HTML, and CSS.",
      "Learned Node.js and database concepts.",
      "Developed real-world web development projects.",
    ],
  },
  {
    date: "June 2024 — August 2024",
    title: "Full Stack Web Development",
    company: "Peak Solutions",
    location: "",
    icon: FaCertificate,
    gradient: "from-cyan-500 to-blue-500",
    dateColor: "text-cyan-400",
    points: [
      "Worked with PHP, JavaScript, HTML, and CSS.",
      "Learned database concepts and web development fundamentals.",
      "Participated in real-world project development.",
    ],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-5xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Journey
          </p>

          <h2 className="mb-5 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Experience
          </h2>

          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            A timeline of my professional experience, training, and practical
            journey in web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-cyan-500/10 md:block" />

          <div className="space-y-10">

            {experiences.map((experience, index) => {
              const Icon = experience.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative flex gap-5 md:gap-8"
                >

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${experience.gradient} text-lg text-white shadow-lg shadow-purple-500/20 ring-8 ring-gray-950`}
                    >
                      <Icon />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex-1 rounded-2xl border border-white/10 bg-gray-900/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-purple-500/5 md:p-7"
                  >

                    {/* Date */}
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${experience.dateColor}`}
                    >
                      {experience.date}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300 md:text-2xl">
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <p className="mt-1 text-sm font-medium text-gray-400">
                      {experience.company}

                      {experience.location && (
                        <span> — {experience.location}</span>
                      )}
                    </p>

                    {/* Points */}
                    <ul className="mt-5 space-y-3">
                      {experience.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex gap-3 text-sm leading-6 text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </motion.div>
                </motion.div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

