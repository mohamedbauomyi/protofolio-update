import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const textColor = isDark ? "text-white" : "text-gray-900";
  const selectionColor = isDark
    ? "selection:bg-purple-500/30 selection:text-white"
    : "selection:bg-blue-500/30 selection:text-black";

  return (
    <div className={`${textColor} min-h-screen font-sans ${selectionColor} relative overflow-x-hidden transition-colors duration-700`}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className={`site-bg animate-move-bg ${isDark ? "is-dark" : "is-light"}`}
          style={{ opacity: isDark ? 0.4 : 0.6 }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#030014] via-transparent to-[#030014]" : "from-white via-transparent to-white"} transition-colors duration-700`}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <Projects isDark={isDark} />
        <Achievements isDark={isDark} />
        <Contact isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
