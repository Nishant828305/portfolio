
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "kumarnishantmahato123@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: email,
      link: `mailto:${email}`,
      action: "Send Email",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/Nishant828305",
      link: "https://github.com/Nishant828305",
      action: "View Profile",
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "Connect professionally",
      link: "https://www.linkedin.com/in/nishantkrmahato007/",
      action: "Connect",
    },
    {
      icon: "⚡",
      title: "LeetCode",
      value: "Nishant_kumar_mahato",
      link: "https://leetcode.com/u/Nishant_kumar_mahato/",
      action: "View Profile",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const senderEmail = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative pt-28 pb-8 px-6 bg-transparent text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Let's Connect
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            Have an interesting idea, project, or opportunity?
            I'd love to hear from you. Let's build something meaningful together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold mb-6">
              Let's talk about your next project.
            </h3>

            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#111124]/80 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-2xl">
                  {contact.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-white">
                    {contact.title}
                  </h4>

                  <a
                    href={contact.link}
                    target={contact.title === "Email" ? undefined : "_blank"}
                    rel={contact.title === "Email" ? undefined : "noopener noreferrer"}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                </div>

                <a
                  href={contact.link}
                  target={contact.title === "Email" ? undefined : "_blank"}
                  rel={contact.title === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={contact.action}
                  className="text-cyan-400 text-xl group-hover:translate-x-1 transition-transform"
                >
                  ↗
                </a>
              </motion.div>
            ))}

            {/* Copy Email */}
            <button
              type="button"
              onClick={copyEmail}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {copied ? "✓ Email copied!" : "Copy my email address 📋"}
            </button>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111124]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-7 md:p-9 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-2">
              Send Me a Message
            </h3>

            <p className="text-gray-400 text-sm mb-7">
              I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full p-4 rounded-xl bg-[#080816] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-4 rounded-xl bg-[#080816] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea..."
                  required
                  className="w-full p-4 rounded-xl bg-[#080816] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message ↗
              </button>

            </form>
          </motion.div>
        </div>

        {/* Availability */}
        <div className="text-center mt-20 mb-16">
          <span className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/5 border border-white/10 px-5 py-3 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to opportunities and collaboration
          </span>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <a href="#home" className="text-xl font-bold">
              Nishant<span className="text-cyan-400">.dev</span>
            </a>

            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Nishant.dev. All rights reserved.
            </p>

            <a
              href="#"
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Back to top ↑
            </a>

          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            Designed & Built with ❤️ by Nishant
          </p>
        </footer>

      </div>
    </section>
  );
}
