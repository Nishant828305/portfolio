import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center px-6 py-4
          rounded-2xl bg-gray-950/85 backdrop-blur-xl
          border border-white/10 shadow-xl">

          {/* Premium Logo + Brand */}
          <a href="#" className="flex items-center gap-3 group">

            <div className="w-11 h-11 rounded-xl
              bg-gradient-to-br from-cyan-400 to-blue-600
              flex items-center justify-center
              shadow-lg shadow-cyan-500/20
              group-hover:scale-110 group-hover:shadow-cyan-400/50
              transition-all duration-300">

              <span className="text-gray-950 font-black text-2xl">
                N
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold tracking-tight text-white">
                Nishant<span className="text-cyan-400">.dev</span>
              </h1>

              <span className="text-[9px] uppercase tracking-[3px] text-gray-400">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 text-sm font-medium
                hover:text-cyan-400 transition-all duration-300
                relative group"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 w-0 h-0.5
                  bg-cyan-400 group-hover:w-full
                  transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2
            px-5 py-2.5 rounded-full text-sm font-semibold
            bg-cyan-400 text-gray-950
            hover:bg-cyan-300 hover:shadow-lg
            hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Let's Talk <span>↗</span>
          </a>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl
            bg-gray-950/95 backdrop-blur-xl
            border border-white/10 shadow-xl
            flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400
                transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-400 text-gray-950 text-center
              font-semibold py-3 rounded-xl"
            >
              Let's Talk ↗
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}