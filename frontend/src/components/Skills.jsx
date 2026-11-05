import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", icon: "🟨", category: "Frontend" },
    { name: "TypeScript", icon: "🔷", category: "Frontend" },
    { name: "HTML5", icon: "📄", category: "Frontend" },
    { name: "CSS3", icon: "🎨", category: "Frontend" },
    { name: "Tailwind CSS", icon: "💨", category: "Frontend" },
    { name: "Bootstrap", icon: "🅱️", category: "Frontend" },
    { name: "Redux", icon: "🧠", category: "Frontend" },

    { name: "Node.js", icon: "🟩", category: "Backend" },
    { name: "Express.js", icon: "🚀", category: "Backend" },
    { name: "REST API", icon: "🔗", category: "Backend" },
    { name: "JWT Auth", icon: "🔐", category: "Backend" },

    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Database" },

    { name: "Git", icon: "🔧", category: "Tools" },
    { name: "GitHub", icon: "🐙", category: "Tools" },
    { name: "Vite", icon: "⚡", category: "Tools" },
    { name: "NPM", icon: "📦", category: "Tools" },
    { name: "Postman", icon: "📮", category: "Tools" },
    { name: "Docker", icon: "🐳", category: "Tools" },
    { name: "AWS", icon: "☁️", category: "Tools" },
    { name: "Linux", icon: "🐧", category: "Tools" },
    { name: "Figma", icon: "🎯", category: "Tools" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  // This filters the skills whenever the category changes.
  const filteredSkills = skills.filter((skill) => {
    return activeCategory === "All" ||
      skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-transparent text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold mb-4">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills.
            </span>
          </h2>

          <p className="text-gray-400 mt-6">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full border font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-400 text-gray-950 border-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-cyan-400 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="text-center text-gray-500 text-sm mb-8">
          Showing {filteredSkills.length} {activeCategory === "All" ? "technologies" : `${activeCategory} skills`}
        </p>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -7, scale: 1.03 }}
              className="min-h-[150px] p-5 rounded-2xl
                bg-[#111124]/80 border border-white/10
                hover:border-cyan-400/50
                hover:shadow-[0_10px_35px_rgba(34,211,238,0.10)]
                flex flex-col items-center justify-center
                text-center transition-colors"
            >
              <span className="text-4xl mb-4">
                {skill.icon}
              </span>

              <h3 className="text-gray-200 font-semibold text-sm">
                {skill.name}
              </h3>

              <p className="text-gray-500 text-xs mt-2">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}