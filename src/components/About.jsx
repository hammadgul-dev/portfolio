import {motion} from "framer-motion"
import {FaGraduationCap, FaBriefcase, FaCode} from "react-icons/fa"

let stats = [
  {icon: <FaBriefcase />, value: "3+", label: "Years Experience"},
  {icon: <FaCode />, value: "10+", label: "Projects Completed"},
  {icon: <FaCode />, value: "15+", label: "Technologies Used"},
]

let About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Who Am I?
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            className="flex-1"
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Hi, I'm <span className="text-cyan-400">Hammad Gul</span>
            </h3>
            <p className="text-gray-400 text-justify text-sm leading-relaxed mb-4">
              A Full Stack & MERN Stack Developer building modern, scalable web
              applications — from clean, responsive frontends to solid backend
              APIs.
            </p>
            <p className="text-gray-400 text-justify text-sm leading-relaxed mb-4">
              I work with React.js, Next.js, Node.js, Express.js, MongoDB, and
              PostgreSQL, along with TypeScript, Docker, AWS, Redis, JWT, REST
              APIs, TanStack Query, Redux Toolkit, and Tailwind CSS — always
              focused on clean code and quality output.
            </p>
            <p className="text-gray-400 text-justify text-sm leading-relaxed mb-8">
              Currently pursuing BS Computer Engineering at UET Peshawar, while
              working on client projects on the side. I'm always picking up new
              tools and skills — still learning, still building.
            </p>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-cyan-400 text-2xl mt-1">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  BS Computer Engineering
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  University of Engineering & Technology, Peshawar — 2024–2028
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 w-full grid grid-cols-1 gap-6"
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-cyan-400/40 transition-all duration-300 w-full"
              >
                <div className="text-cyan-400 text-3xl">{stat.icon}</div>
                <div>
                  <p className="text-white text-2xl font-bold">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default About
