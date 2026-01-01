import { motion } from "framer-motion";

export default function Background() {
  return (
    <section
      id="background"
      className="min-h-screen px-6 py-24 max-w-4xl mx-auto flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Background
        </h2>

        <div className="space-y-8">
          {/* Experience */}
          <BackgroundItem
            title="AI Engineer / Research Fellow"
            subtitle="BITS Pilani, Goa · 2024 – 2025"
            description="Worked on AI-driven systems for monitoring student stress and learning engagement, focusing on multimodal data, physiological signals, and deployable ML pipelines."
          />

          {/* Education */}
          <BackgroundItem
            title="MSc in Bioinformatics"
            subtitle="Postgraduate Degree"
            description="Focused on computational biology, machine learning, and in-silico analysis, with strong emphasis on data-driven research and applied modeling."
          />

          {/* Focus */}
          <BackgroundItem
            title="Applied AI & Healthcare Focus"
            subtitle="Project & Research Experience"
            description="Hands-on experience across medical imaging (MRI), physiological time-series data, and human-centered AI systems where robustness and interpretability matter."
          />
        </div>
      </motion.div>
    </section>
  );
}

function BackgroundItem({ title, subtitle, description }) {
  return (
    <div className="bg-panel rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-accent text-sm mt-1">{subtitle}</p>
      <p className="text-muted mt-3 leading-relaxed">{description}</p>
    </div>
  );
}
