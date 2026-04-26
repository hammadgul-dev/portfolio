import {useState, useEffect} from "react"
import {Link} from "react-scroll"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["home", "about", "skills", "projects", "services"]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-2xl text-white tracking-wide cursor-pointer"
          style={{fontFamily: "'Permanent Marker', cursive"}}
        >
          Hammad
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link} className="relative group">
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="!text-cyan-400"
                className="text-gray-300 hover:text-cyan-400 capitalize text-sm font-medium cursor-pointer transition-colors duration-200"
              >
                {link}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </li>
          ))}
        </ul>

        {/* Contact Me Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="hidden md:block px-5 py-2 border border-cyan-400 text-cyan-400 text-sm font-medium rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
        >
          Contact Me
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-md border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="!text-cyan-400"
                  className="text-gray-300 hover:text-cyan-400 capitalize text-sm font-medium cursor-pointer transition-colors duration-200 block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-center mt-2 px-5 py-2 text-sm font-medium rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
