import { Section } from "../components/Section";

const experience = [
  {
    company: "Thimar Food Company",
    role: "Quality Management Officer",
    period: "Jan 2022 – Aug 2024",
    desc: "Developed and maintained QMS, conducted audits, and monitored KPIs for efficiency.",
  },
  {
    company: "AbuAuf",
    role: "Quality Assurance Specialist",
    period: "Aug 2021 – Aug 2022",
    desc: "Led ISO 9001:2015 certification and automated dataset extraction with SQL & Power BI.",
  },
];

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
  "Node.js", "Express", "MongoDB", "SQL",
  "Tailwind CSS", "SASS", "Git/GitHub", "Agile",
];

export const Achievements = ({ isDark = true }) => {
  return (
    <Section id="achievements">
      <div className="achievements-layout">
        <div>
          <h2 className={`section-title font-bold mb-6 sm:mb-10 ${isDark ? "text-white text-glow" : "text-gray-900"}`}>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={job.company}
                className={`p-5 sm:p-6 rounded-2xl relative overflow-hidden group border transition-all duration-300 ${isDark ? "glass-panel border-white/5" : "glass-panel-light"}`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity ${isDark ? "bg-gradient-to-b from-purple-500 to-blue-500" : "bg-gray-400"}`} />
                <h3 className={`text-lg sm:text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{job.role}</h3>
                <p className={`text-sm font-medium mb-3 ${isDark ? "text-purple-300" : "text-purple-600"}`}>
                  {job.company} | {job.period}
                </p>
                <p className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}>{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={`section-title font-bold mb-6 sm:mb-10 ${isDark ? "text-white text-glow" : "text-gray-900"}`}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-default border ${isDark ? "glass-panel text-white/80 hover:bg-white/10 hover:text-white border-white/5" : "glass-panel-light text-gray-700 hover:border-gray-400"}`}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <h2 className={`section-title font-bold mb-6 ${isDark ? "text-white text-glow" : "text-gray-900"}`}>
              Education
            </h2>
            <div className="space-y-4">
              <div className={`p-5 sm:p-6 rounded-2xl border-l-4 border-l-blue-500 ${isDark ? "glass-panel hover:bg-white/5" : "glass-panel-light hover:bg-white/80"}`}>
                <h3 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Information Technology Institute (ITI)</h3>
                <p className={`text-sm mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`}>Front-End & Cross-Platform Mobile Application Diploma</p>
                <p className="text-blue-500 text-xs mt-2 font-medium">March 2023 – Sept 2023</p>
              </div>

              <div className={`p-5 sm:p-6 rounded-2xl border-l-4 border-l-purple-500 ${isDark ? "glass-panel hover:bg-white/5" : "glass-panel-light hover:bg-white/80"}`}>
                <h3 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Route Academy</h3>
                <p className={`text-sm mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`}>Computer Science Diploma</p>
                <p className="text-purple-500 text-xs mt-2 font-medium">April 2022 – Aug 2022</p>
              </div>

              <div className={`p-5 sm:p-6 rounded-2xl border-l-4 border-l-green-500 ${isDark ? "glass-panel hover:bg-white/5" : "glass-panel-light hover:bg-white/80"}`}>
                <h3 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Ain Shams University</h3>
                <p className={`text-sm mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`}>B.S. in Biotechnology, Food Production</p>
                <p className="text-green-500 text-xs mt-2 font-medium">Sept 2018 – June 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
