import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = ["Home", "Projects", "Achievements", "Contact"];

export const Navbar = ({ isDark = true, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navBg = isDark ? "bg-[#030014]/40 backdrop-blur-md" : "glass-panel-light";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const mobileBg = isDark ? "glass-panel border-t border-white/10" : "glass-panel-light border-t border-gray-200";
  const glassPanelClass = isDark ? "glass-panel border border-white/5" : "glass-panel-light border border-white/40";
  const logoGradient = isDark ? "from-white to-gray-400" : "from-gray-900 to-gray-500";

  return (
    <nav className={`fixed top-0 w-full z-50 py-4 md:py-5 transition-all duration-500 ${navBg}`}>
      <div className="fluid-container flex justify-between items-center gap-3">
        <a
          href="#home"
          className={`nav-brand font-bold bg-clip-text text-transparent bg-gradient-to-r ${logoGradient} hover:opacity-80 transition-opacity tracking-tight`}
        >
          MOHAMED BAUOMYI
        </a>

        <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-1 px-3 py-2 rounded-full ${glassPanelClass}`}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-4 xl:px-5 py-2 rounded-full text-sm font-medium transition-all ${isDark ? "text-white/70 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-black hover:bg-white"}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${isDark ? "bg-white/10 text-yellow-300 hover:bg-white/20" : "bg-gray-100 text-purple-600 hover:bg-gray-200"}`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors p-2 rounded-full backdrop-blur-md ${isDark ? "text-white hover:text-gray-300 bg-white/5" : "text-black hover:text-gray-600 bg-gray-100"}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`absolute top-full left-0 w-full p-6 lg:hidden flex flex-col items-center space-y-6 ${mobileBg}`}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-lg sm:text-xl font-medium transition-colors ${textColor}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
