import { Section } from "../components/Section";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export const Contact = ({ isDark = true }) => {
  const chip = isDark
    ? "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
    : "glass-panel-light hover:bg-white/80";

  return (
    <Section id="contact">
      <h2 className={`section-title font-bold mb-8 sm:mb-12 md:mb-16 text-center ${isDark ? "text-white text-glow" : "text-gray-900"}`}>
        Get In Touch
      </h2>

      <div className={`p-5 sm:p-8 md:p-10 rounded-3xl max-w-3xl w-full mx-auto text-center space-y-8 sm:space-y-10 relative overflow-hidden ${isDark ? "glass-panel" : "glass-panel-light"}`}>
        <div className="space-y-4">
          <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Let's work together</h3>
          <p className={`text-base sm:text-lg max-w-xl mx-auto ${isDark ? "text-white/60" : "text-gray-700"}`}>
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:mohamedbayomya@gmail.com" className={`group flex items-center gap-3 px-6 py-4 rounded-full transition-all border ${chip}`}>
            <Mail size={20} className="text-purple-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className={`font-medium ${isDark ? "text-white" : "text-gray-700"}`}>Email Me</span>
          </a>
          <a href="https://github.com/mohamedbauomyi" target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-3 px-6 py-4 rounded-full transition-all border ${chip}`}>
            <Github size={20} className={`${isDark ? "text-white" : "text-gray-800"} group-hover:scale-110 transition-transform shrink-0`} />
            <span className={`font-medium ${isDark ? "text-white" : "text-gray-700"}`}>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-bauomyi-019658187/" target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-3 px-6 py-4 rounded-full transition-all border ${chip}`}>
            <Linkedin size={20} className="text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className={`font-medium ${isDark ? "text-white" : "text-gray-700"}`}>LinkedIn</span>
          </a>
          <div className={`contact-chip group flex items-center gap-3 px-6 py-4 rounded-full border cursor-default ${isDark ? "bg-white/5 border-white/5" : "glass-panel-light border-gray-200"}`}>
            <Phone size={20} className="text-green-400 shrink-0" />
            <span className={`font-medium whitespace-nowrap ${isDark ? "text-white" : "text-gray-700"}`}>+20 114 224 6880</span>
          </div>
        </div>

        <div className={`pt-8 border-t ${isDark ? "border-white/5" : "border-gray-200"}`}>
          <p className={`text-sm ${isDark ? "text-white/30" : "text-gray-400"}`}>
            © 2026 Mohamed Bauomyi. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </Section>
  );
};
