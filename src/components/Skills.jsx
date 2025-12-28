import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical <span className="text-accent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <SkillBlock
            title="AI & Machine Learning"
            items={[
              "Supervised & Unsupervised Learning",
              "CNNs, Classical ML Models",
              "Feature Engineering",
              "Model Evaluation (Accuracy, Macro-F1)",
            ]}
          />

          <SkillBlock
            title="Multimodal & Signal Data"
            items={[
              "Physiological Signals (HR, GSR)",
              "Time-Series Preprocessing & Windowing",
              "Multimodal Data Alignment",
              "Annotation Handling & Synchronization",
            ]}
          />

          <SkillBlock
            title="Medical Imaging"
            items={[
              "MRI-based Image Analysis",
              "Multi-label Classification",
              "Healthcare Data Pipelines",
              "Clinical AI Use-Cases",
            ]}
          />

          <SkillBlock
            title="Engineering & Tooling"
            items={[
              "Python, NumPy, Pandas",
              "Flask-based APIs",
              "Git & Linux",
              "Experiment Reproducibility",
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="bg-panel rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <ul className="space-y-2 text-muted">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-accent mt-1">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
