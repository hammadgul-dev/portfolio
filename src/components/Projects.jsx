import {motion} from "framer-motion"
import {FaExternalLinkAlt} from "react-icons/fa"

const projects = [
  {
    title: "FreshCart",
    description:
      "A full-stack eCommerce platform with JWT authentication, product management, cart system, order tracking, and TanStack Query for data fetching.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "TanStack Query"],
    live: "https://freshcart-frontend-tau.vercel.app",
  },
  {
    title: "Blogify",
    description:
      "A full-stack blog platform with JWT auth, rich text editor, category filtering, and Resend email integration.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Resend", "TanStack Query"],
    live: "#",
  },
  {
    title: "Task Manager",
    description:
      "A feature-rich task manager with category-wise filtering, add, delete, and update tasks — built with vanilla HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "#",
  },
  {
    title: "Music Player",
    description:
      "A responsive music player with play/pause, next/previous track, volume control, and keyboard shortcuts.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "#",
  },
  {
    title: "Advance Product Page",
    description:
      "A React product page with Redux state management, filtering, image uploads, and detailed product views.",
    tags: ["React", "Redux", "Vanilla CSS"],
    live: "#",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            My Recent Work
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Things I've built with passion and purpose
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-cyan-400/40 transition-all duration-300 group"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: i * 0.1}}
              viewport={{once: true}}
            >
              {/* Project Image */}
              <div className="w-full h-44 bg-white/5 overflow-hidden">
                {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="flex items-center gap-2 text-sm text-white border border-white/20 px-4 py-2 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 cursor-pointer w-fit mt-2"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </button>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            className="flex flex-col items-center justify-center text-center mt-10 gap-4"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <p className="text-gray-400 text-sm">
              Want to see more of my work?
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/hammadgul-dev", "_blank")
              }
              className="px-6 py-2 border border-cyan-400 text-cyan-400 text-sm rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              View All Projects on GitHub
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
