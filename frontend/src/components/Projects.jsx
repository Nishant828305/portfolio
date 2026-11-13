
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/projects`,
        );
        setProjects(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Unable to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            A collection of projects where I turn ideas into practical,
            scalable and user-friendly applications.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-cyan-400 py-16">
            Loading projects...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center text-red-400 py-16">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center text-gray-400 py-16">
            No projects available yet.
          </div>
        )}

        {/* Project Grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project._id || index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden bg-[#111124]/80 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#17172d]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title || "Project preview"}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Project Preview
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111124] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider text-cyan-300 bg-black/50 border border-cyan-400/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7 min-h-20">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  {Array.isArray(project.technologies) &&
                    project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={`${tech}-${i}`}
                            className="text-xs text-cyan-300 bg-cyan-400/10 border border-cyan-400/10 px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  {/* Buttons */}
                  <div className="flex items-center gap-3 mt-7 pt-5 border-t border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg border border-white/15 text-gray-200 hover:bg-white hover:text-black transition-all"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
