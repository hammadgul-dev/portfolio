import {motion} from "framer-motion"
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLayout,
  FiShield,
  FiZap,
  FiCloud,
} from "react-icons/fi"

const services = [
  {
    icon: <FiLayout size={28} />,
    title: "Frontend Development",
    description:
      "Building responsive, fast, and modern UIs using React.js and Tailwind CSS — clean design with smooth user experience.",
  },
  {
    icon: <FiServer size={28} />,
    title: "Backend Development",
    description:
      "Building solid REST APIs with Node.js and Express.js — scalable, secure, and well-structured server-side code.",
  },
  {
    icon: <FiDatabase size={28} />,
    title: "Database Design",
    description:
      "Designing and managing MongoDB and PostgreSQL databases with proper schema structure, relationships, and optimized queries.",
  },
  {
    icon: <FiZap size={28} />,
    title: "API Integration",
    description:
      "Integrating third-party services like Stripe payments, Google OAuth, Resend email, and more into full-stack applications.",
  },
  {
    icon: <FiShield size={28} />,
    title: "Auth & Security",
    description:
      "Implementing secure JWT authentication, role-based access control, and best practices for web security.",
  },
  {
    icon: <FiCloud size={28} />,
    title: "Deployment & DevOps",
    description:
      "Containerizing applications with Docker and deploying scalable, production-ready apps on AWS.",
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#0d0d14] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What I Offer
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            End-to-end web development services built around your needs
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-cyan-400/40 hover:bg-white/8 transition-all duration-300 group"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: i * 0.1}}
              viewport={{once: true}}
            >
              <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
