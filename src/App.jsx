import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
