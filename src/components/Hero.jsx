export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 opacity-0.5"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        {/* Profile photo */}
        <img
          src={`${import.meta.env.BASE_URL}profile.jpeg`}
          alt="Rounak Mukhopadhyay"
          className="w-36 h-36 rounded-full mx-auto mb-6 border border-white/20 object-cover"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Rounak Mukhopadhyay
        </h1>

        <p className="text-xl text-accent mb-4">
          AI Engineer
        </p>

        <p className="text-muted text-lg leading-relaxed mb-8">
          I build end-to-end AI systems focused on human behavior,
          physiological signals, and medical imaging — from raw data
          to deployable models.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 border border-white/30 rounded-lg hover:border-accent transition">
            View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="px-6 py-3 border border-white/30 rounded-lg hover:border-accent transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
