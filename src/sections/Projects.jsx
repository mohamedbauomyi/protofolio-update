import { Section } from "../components/Section";

const unsplash = (id, width) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

const projects = [
  {
    title: "Real Estate Website",
    description: "Fully responsive, high-performance web app with advanced search and filtering. Converted UI designs into clean React code.",
    tags: ["React.js", "Tailwind CSS"],
    link: "https://real-estate-app-delta-dun.vercel.app/",
    photo: "photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Recycling System",
    description: "ITI Graduation Project. Scalable platform with real-time analytics dashboard and secure data handling.",
    tags: ["React.js", "Tailwind CSS", "Chart.js"],
    link: "https://github.com/EsraaAhmedAli/ITI-Graduation-Project-Recycling-System",
    photo: "photo-1542601906990-b4d3fb778b09",
  },
  {
    title: "Recycling Backend",
    description: "Robust REST APIs for user management and order processing with MongoDB and secure authentication.",
    tags: ["Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://github.com/Ahmed-Bakr611/Recycling-BackEnd",
    photo: "photo-1555066931-4365d14bab8c",
  },
];

export const Projects = ({ isDark = true }) => {
  return (
    <Section id="projects">
      <h2 className={`section-title font-bold mb-8 sm:mb-12 md:mb-16 text-center ${isDark ? "text-white text-glow" : "text-gray-900"}`}>
        Selected Works
      </h2>

      <div className="fluid-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 sm:p-6 md:p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2 block border ${isDark ? "glass-panel bg-white/5 border-white/10 hover:bg-white/10" : "glass-panel-light hover:shadow-xl hover:bg-white/80"}`}
          >
            <div className="media-frame mb-4 sm:mb-6">
              <div className={`absolute inset-0 transition-colors z-10 ${isDark ? "bg-black/20 group-hover:bg-transparent" : ""}`} />
              <img
                src={unsplash(project.photo, 800)}
                srcSet={`${unsplash(project.photo, 480)} 480w, ${unsplash(project.photo, 800)} 800w, ${unsplash(project.photo, 1200)} 1200w`}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isDark ? "text-white group-hover:text-purple-300" : "text-gray-900 group-hover:text-purple-600"}`}>
              {project.title}
            </h3>

            <p className={`mb-6 text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${isDark ? "bg-white/5 text-white/80 border-white/10" : "bg-gray-100 text-gray-700 border-gray-200"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
