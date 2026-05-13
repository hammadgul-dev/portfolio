import {useState} from "react"
import {motion} from "framer-motion"
import {FiMail, FiMapPin, FiPhone} from "react-icons/fi"

const Contact = () => {
  const [form, setForm] = useState({name: "", email: "", message: ""})
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({name: "", email: "", message: ""})
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Have a project in mind? Let's talk and build something great.
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-cyan-400 text-xl mt-1">
                <FiMail />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Email</p>
                <p className="text-gray-400 text-sm mt-1">
                  hammadgul140413@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-cyan-400 text-xl mt-1">
                <FiPhone />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Phone</p>
                <p className="text-gray-400 text-sm mt-1">+92 313 3178585</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-cyan-400 text-xl mt-1">
                <FiMapPin />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Location</p>
                <p className="text-gray-400 text-sm mt-1">
                  Nowshera, KPK, Pakistan
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors duration-200"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors duration-200 resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 bg-cyan-400 text-black text-sm font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
