import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="relative min-h-screen bg-[#080816] text-white overflow-x-hidden">

      {/* One continuous background for the entire website */}
      <div className="fixed inset-0 pointer-events-none z-0">

        {/* Global purple glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px]
          rounded-full bg-purple-600/[0.10] blur-[150px]" />

        {/* Global cyan glow */}
        <div className="absolute top-[35%] -right-40 w-[600px] h-[600px]
          rounded-full bg-cyan-500/[0.08] blur-[150px]" />

        {/* Global blue glow */}
        <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px]
          rounded-full bg-blue-600/[0.08] blur-[150px]" />

        {/* Continuous grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />

      </div>

      {/* All sections share the same background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </main>
  );
}

export default App;