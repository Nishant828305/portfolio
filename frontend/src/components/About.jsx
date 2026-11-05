import { motion } from "framer-motion";

export default function About() {

  const skills = [
    { name: "React.js", icon: "⚛", color: "text-cyan-400" },
    { name: "Node.js", icon: "⬡", color: "text-green-400" },
    { name: "Express.js", icon: "🚀", color: "text-gray-300" },
    { name: "MongoDB", icon: "🍃", color: "text-green-400" },
    { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: "✦", color: "text-cyan-300" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 px-6 bg-[#080816] text-white"
    >

      {/* Background Glow - Same as Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96
          bg-purple-600/15 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96
          bg-cyan-500/15 rounded-full blur-[120px]" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 uppercase tracking-[5px]
            text-sm font-semibold mb-4">
            Discover My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400
              via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me.
            </span>
          </h2>

          <div className="w-24 h-1 mx-auto mt-6 rounded-full
            bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            A little introduction to who I am, what I do,
            and what drives me to create.
          </p>

        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* About Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative p-8 md:p-10 rounded-3xl
              bg-[#111124]/80 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_70px_rgba(0,0,0,0.3)]
              hover:border-cyan-400/30 transition-colors duration-500"
          >

            <div className="absolute top-0 right-0 w-40 h-40
              bg-purple-500/10 blur-[70px] rounded-full" />

            <div className="relative">

              <div className="w-14 h-14 rounded-2xl
                bg-gradient-to-br from-cyan-400 to-blue-600
                flex items-center justify-center mb-7
                shadow-lg shadow-cyan-500/20">
                <span className="text-2xl font-black text-gray-950">N</span>
              </div>

              <p className="text-cyan-400 text-sm font-semibold
                uppercase tracking-widest mb-3">
                Who Am I?
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                I'm Nishant Kumar Mahato
              </h3>

              <p className="text-gray-400 leading-8 mb-5">
                A passionate MERN Stack Developer who loves building
                modern, responsive and scalable web applications.
                I enjoy transforming ideas into meaningful digital
                experiences.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                I specialize in React, Node.js, Express and MongoDB.
                My focus is on creating clean user interfaces,
                developing efficient backend APIs and writing
                maintainable code.
              </p>

              <p className="text-gray-400 leading-8">
                I believe in continuous learning, solving challenging
                problems and building projects that solve real-world needs.
              </p>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-3 mt-8">

                <span className="px-4 py-2 rounded-full text-xs
                  text-cyan-300 bg-cyan-400/10
                  border border-cyan-400/20">
                  Full Stack Development
                </span>

                <span className="px-4 py-2 rounded-full text-xs
                  text-purple-300 bg-purple-400/10
                  border border-purple-400/20">
                  Problem Solving
                </span>

              </div>

            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >

            <div>
              <p className="text-cyan-400 uppercase tracking-[4px]
                text-sm font-semibold mb-3">
                My Tech Stack
              </p>

              <h3 className="text-3xl font-bold">
                Tools &{" "}
                <span className="bg-gradient-to-r from-cyan-400
                  to-purple-500 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Technologies I use to turn ideas into working applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    scale: 1.04
                  }}
                  className="group min-h-32 flex flex-col
                    items-center justify-center gap-4
                    rounded-2xl bg-[#111124]/80
                    border border-white/10
                    hover:border-cyan-400/40
                    hover:shadow-[0_10px_35px_rgba(34,211,238,0.10)]
                    transition-colors duration-300"
                >

                  <span className={`text-3xl font-black ${skill.color}
                    group-hover:scale-125 transition-transform duration-300`}>
                    {skill.icon}
                  </span>

                  <span className="text-gray-300 text-sm font-semibold">
                    {skill.name}
                  </span>

                </motion.div>
              ))}

            </div>

            {/* Mindset Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl
                bg-gradient-to-r from-blue-600/15
                via-purple-600/15 to-cyan-500/15
                border border-white/10"
            >

              <h4 className="font-bold text-lg mb-2">
                <span className="text-cyan-400">✦</span>{" "}
                Always Learning, Always Building
              </h4>

              <p className="text-gray-400 text-sm leading-7">
                My goal is to keep improving my technical skills
                and build meaningful digital products.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}