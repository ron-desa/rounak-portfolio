import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 max-w-4xl mx-auto flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Get in <span className="text-accent">Touch</span>
        </h2>

        <p className="text-muted text-lg max-w-2xl mx-auto">
          I’m open to AI Engineer roles, research-driven projects, and
          collaborations focused on applied machine learning and healthcare AI.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:raunakmukho@gmail.com"
            className="block text-xl font-medium hover:text-accent transition"
          >
            raunakmukho@gmail.com
          </a>

          <div className="flex justify-center gap-6 text-muted">
            <a
              href="https://www.linkedin.com/in/rounak-mukhopadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ron-desa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              GitHub
            </a>

            <a
              href="/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
