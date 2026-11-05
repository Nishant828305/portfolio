import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";

import pic from "../img/pic.jpg";

export default function Hero() {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent text-white px-6 pt-32 pb-20 flex items-center">

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-cyan-400 font-semibold tracking-[4px] uppercase text-sm mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Nishant
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Kumar Mahato.
              </span>
            </h1>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-gray-300"
          >
            MERN Stack Developer
            <span className="text-pink-400"> | </span>
            <span className="text-cyan-400">Problem Solver</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-gray-400 text-base md:text-lg leading-8 max-w-xl"
          >
            I build modern, scalable and beautiful web applications
            using React, Node.js, Express and MongoDB.
            Passionate about turning complex ideas into powerful
            digital experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5 pt-3"
          >
            <motion.a
              whileHover={{ scale: 1.07, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-[0_10px_35px_rgba(124,58,237,0.35)]"
            >
              Explore Projects ↗
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.07, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-7 py-4 rounded-xl font-bold border border-cyan-400/50 text-cyan-300 bg-cyan-400/5 backdrop-blur-xl"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-10 pt-8 border-t border-white/10"
          >
            {[
              ["MERN", "Tech Stack"],
              ["DSA", "Problem Solving"],
              ["Web", "Development"]
            ].map(([title, subtitle], i) => (
              <motion.div
                key={title}
                whileHover={{ y: -7, scale: 1.08 }}
              >
                <h3
                  className={`text-3xl font-black ${
                    i === 0
                      ? "text-cyan-400"
                      : i === 1
                      ? "text-purple-400"
                      : "text-pink-400"
                  }`}
                >
                  {title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT SIDE - 3D PROFILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 70 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center items-center py-10"
        >

          {/* IMAGE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-80 h-80 md:w-[430px] md:h-[430px] rounded-full bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 blur-[80px]"
          />

          {/* 3D IMAGE */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000
            }}
            whileHover={{ scale: 1.04 }}
            className="relative w-72 h-72 md:w-[390px] md:h-[390px] rounded-[40px] p-[3px] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-[0_25px_80px_rgba(124,58,237,0.35)]"
          >
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#111124] border border-white/10">
              <img
                src={pic}
                alt="Nishant Kumar Mahato"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* FLOATING CLEAN CODE CARD */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [-6, -3, -6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-2 md:-left-8 top-16 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            <div className="text-cyan-400 text-xl font-bold">
              {"</>"}
            </div>

            <p className="text-white text-sm font-semibold">
              Clean Code
            </p>
          </motion.div>

          {/* FLOATING MERN CARD */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [6, 3, 6]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-2 md:-right-8 bottom-16 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            <p className="text-xs text-gray-400">
              Specialization
            </p>

            <p className="text-white font-bold text-lg">
              MERN Stack
            </p>

            <div className="flex gap-1 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-purple-400" />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}