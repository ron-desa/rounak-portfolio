import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 max-w-4xl mx-auto flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-accent">Me</span>
        </h2>

        <p className="text-lg text-muted leading-relaxed">
          I’m an <span className="text-white font-medium">AI Engineer</span> who
          enjoys building systems that sit at the intersection of{" "}
          <span className="text-white">
            machine learning, human behavior, and healthcare
          </span>
          .
        </p>

        <p className="text-muted leading-relaxed">
          My work focuses on taking AI models beyond notebooks — designing
          pipelines that handle real-world data, temporal signals, and noisy
          annotations, and turning them into systems that can actually be
          evaluated, deployed, and trusted.
        </p>

        {/* <p className="text-muted leading-relaxed">
          I’ve worked on problems ranging from{" "}
          <span className="text-white">
            physiological signal–based engagement analysis
          </span>{" "}
          to <span className="text-white">medical imaging with MRI</span>, where
          correctness, interpretability, and robustness matter more than flashy
          metrics.
        </p> */}

        <p className="text-muted leading-relaxed">
          I’m particularly interested in roles where I can work close to real
          data, collaborate with domain experts, and build AI systems that have
          meaningful real-world impact.
        </p>
      </motion.div>
    </section>
  );
}
