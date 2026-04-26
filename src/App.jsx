import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
