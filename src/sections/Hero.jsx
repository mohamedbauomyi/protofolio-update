import { Section } from "../components/Section";

export const Hero = ({ isDark = true }) => {
  return (
    <Section id="home" hero className="pt-20 sm:pt-24 relative overflow-hidden bg-transparent">
      {isDark && (
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="aurora-bg"></div>
        </div>
      )}

      <div className="relative z-10 min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center py-8">
        <div className={`px-4 py-1.5 rounded-full mb-6 sm:mb-8 animate-float ${isDark ? "glass-panel border-white/10" : "glass-panel-light"}`}>
          <span className={`text-[0.65rem] sm:text-xs font-bold tracking-[0.2em] uppercase ${isDark ? "text-white/80" : "text-gray-600"}`}>
            Mohamed Bauomyi
          </span>
        </div>

        <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <h1 className={`hero-title font-bold text-transparent bg-clip-text bg-gradient-to-b ${isDark ? "from-white to-white/40 drop-shadow-lg" : "from-gray-900 to-gray-500"}`}>
            Web<br />Developer
          </h1>

          <p className={`text-base sm:text-lg md:text-xl max-w-[min(100%,36rem)] mx-auto font-light leading-relaxed ${isDark ? "text-white/60" : "text-gray-700"}`}>
            Passionate Web Developer building responsive, high-performance web applications with React.js and modern frameworks.
          </p>
        </div>

        <div className="hero-actions mt-8 sm:mt-12 w-full max-w-md sm:max-w-none">
          <a
            href="#projects"
            className={`group relative px-8 py-4 rounded-lg font-bold tracking-wide overflow-hidden hover:scale-105 transition-all duration-300 text-center ${isDark ? "bg-white text-black" : "bg-gray-900 text-white shadow-lg"}`}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>

          <a
            href="#contact"
            className={`px-8 py-4 rounded-lg font-bold tracking-wide transition-colors text-center ${isDark ? "glass-panel text-white hover:bg-white/10" : "glass-panel-light text-gray-800 hover:bg-white/80"}`}
          >
            Contact Me
          </a>
        </div>

        {isDark && (
          <>
            <div className="hero-orb absolute top-1/4 left-[4%] w-[12vw] max-w-24 aspect-square bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="hero-orb absolute bottom-1/4 right-[4%] w-[16vw] max-w-32 aspect-square bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          </>
        )}
      </div>
    </Section>
  );
};
