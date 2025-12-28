import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        Selected <span className="text-accent">Projects</span>
      </motion.h2>

      <div className="space-y-12">
        <Project
          title="Low Emotional Engagement Detection"
          summary="End-to-end multimodal AI system to detect low emotional engagement using physiological signals and behavioral annotations."
          stack={["Python", "Physiological Signals", "Time-Series", "ML"]}
        >
          <CaseStudyLowEngagement />
        </Project>

        <Project
          title="Lumbar Spine Degeneration Classification"
          summary="MRI-based multi-label classification system for identifying lumbar spine degeneration conditions."
          stack={["MRI", "CNN", "Medical Imaging", "Healthcare AI"]}
        >
          <CaseStudySpine />
        </Project>
      </div>
    </section>
  );
}

function Project({ title, summary, stack, children }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-panel rounded-xl p-6 border border-white/10"
    >
      <motion.div layout>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted mb-4">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-accent text-sm font-medium hover:underline"
        >
          {open ? "Hide Case Study" : "View Case Study"}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 border-t border-white/10 pt-6"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


function CaseStudyLowEngagement() {
  return (
    <div className="space-y-4 text-muted">
      <p>
        <strong className="text-white">Problem:</strong>  
        Detect moments of low emotional engagement during video-based learning
        using physiological signals and temporal annotations.
      </p>

      <p>
        <strong className="text-white">Data:</strong>  
        Multimodal time-series signals (heart rate, GSR) synchronized with
        user-level annotations sampled at fixed intervals.
      </p>

      <p>
        <strong className="text-white">Approach:</strong>  
        Designed a preprocessing pipeline for signal normalization, windowing,
        and alignment across modalities before training ML classifiers.
      </p>

      <p>
        <strong className="text-white">Model:</strong>  
        Classical ML models with engineered temporal features, evaluated using
        accuracy and macro-F1 to handle class imbalance.
      </p>

      <p>
        <strong className="text-white">Outcome:</strong>  
        Built a deployable inference pipeline and visualized predictions over
        video timelines to highlight engagement drops.
      </p>
    </div>
  );
}

function CaseStudySpine() {
  return (
    <div className="space-y-4 text-muted">
      <p>
        <strong className="text-white">Problem:</strong>  
        Automate detection of lumbar spine degeneration conditions from MRI
        scans across multiple vertebral levels.
      </p>

      <p>
        <strong className="text-white">Data:</strong>  
        Sagittal MRI slices with multi-label clinical annotations indicating
        spinal canal stenosis and related conditions.
      </p>

      <p>
        <strong className="text-white">Approach:</strong>  
        Structured the data per vertebral level and trained supervised CNN
        models for condition-wise prediction.
      </p>

      <p>
        <strong className="text-white">Model:</strong>  
        Deep learning classification models evaluated using validation accuracy
        and macro F1-score.
      </p>

      <p>
        <strong className="text-white">Outcome:</strong>  
        Achieved stable validation performance and built a scalable training
        pipeline for medical imaging tasks.
      </p>
    </div>
  );
}
