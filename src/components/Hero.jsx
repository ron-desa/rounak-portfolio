import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Rounak{" "}
          <span className="text-accent">Mukhopadhyay</span>
        </h1>

        {/* Role */}
        <h2 className="mt-4 text-xl md:text-2xl text-muted font-medium">
          AI Engineer
        </h2>

        {/* One-liner */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          I build end-to-end AI systems focused on{" "}
          <span className="text-white font-medium">
            human behavior, physiological signals, and medical imaging
          </span>
          — from raw data to deployable models.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-black font-semibold hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/rounak-portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-600 text-white hover:border-accent hover:text-accent transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}



