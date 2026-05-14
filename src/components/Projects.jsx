import {motion} from "framer-motion"
import {FaExternalLinkAlt} from "react-icons/fa"

const projects = [
  {
    title: "FreshCart",
    description:
      "Full-stack eCommerce platform with JWT auth, dual product catalog, smart search, advanced filtering, cart management, and Cloudinary image storage.",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "JWT",
      "Cloudinary",
    ],
    image: "/Project Images/FreshCart.png",
    live: "https://freshcart-frontend-tau.vercel.app",
    github: "https://github.com/hammadgul-dev/freshcart-backend",
  },
  {
    title: "Blogify",
    description:
      "Full-stack blog platform with JWT auth, Google OAuth, AI-powered descriptions & thumbnails, rich blog management, comment system, and dark/light mode.",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "Cloudinary",
      "Groq AI",
    ],
    image: "/Project Images/Blogify.png",
    live: "https://blogify-frontend-blue-seven.vercel.app",
    github: "https://github.com/hammadgul-dev/blogify",
  },
  {
    title: "Code Editor",
    description:
      "Real-time online code editor with live preview, multi-panel layout for HTML/CSS/JS, theme switcher, and copy to clipboard.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/Project Images/Code Editor.png",
    live: "https://hammadgul-dev.github.io/code-editor/",
    github: "#",
  },
  {
    title: "Advanced Product Page",
    description:
      "React product page with Redux state management, user login, product filtering & sorting, image upload, and LocalStorage persistence.",
    tags: ["React", "Redux", "React Router"],
    image: "/Project Images/Product Page.png",
    live: "https://hammadgul-dev.github.io/advance-product-page/",
    github: "#",
  },
  {
    title: "Music Player",
    description:
      "Lightweight music player with play/pause, next/prev navigation, volume control, keyboard shortcuts, and fully responsive UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/Project Images/Music Player.png",
    live: "http://hammadgul-dev.github.io/music-player/",
    github: "#",
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
              <div className="w-full h-44 bg-white/5 overflow-hidden p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex flex-col gap-2 flex-1">
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
