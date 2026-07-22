import {TypeAnimation} from "react-type-animation"
import {Link} from "react-scroll"
import {motion} from "framer-motion"
import myImg from "../assets/images/My Img.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-24 pb-16">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
        >
          <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="wave"
              className="w-7 h-7"
            />
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              Hello, Welcome to my portfolio
            </p>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            I'm <span className="text-cyan-400">Hammad Gul</span>
          </h1>

          <div className="text-lg md:text-xl text-gray-300 font-medium mb-6 h-8">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React JS Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-justify text-sm leading-relaxed max-w-lg mb-8">
            Full Stack & MERN Stack Developer with 3+ years of experience building modern, scalable web apps — from responsive frontends to powerful backend APIs. Clean code, real results.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-7 py-3 bg-cyan-400 text-black text-sm font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-400/20"
            >
              See Projects
            </Link>
            <button
              onClick={() =>
                window.open(`${import.meta.env.BASE_URL}MERN_CV.pdf`, "_blank")
              }
              className="px-7 py-3 border border-cyan-400 text-cyan-400 text-sm font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
        >
          <div className="relative w-72 h-80 md:w-96 md:h-[480px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blur-2xl rounded-2xl" />
            <div className="relative w-full h-full rounded-2xl border border-cyan-400/30 overflow-hidden bg-gray-800">
              <img
                src={myImg}
                alt="Hammad Gul"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
