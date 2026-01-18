import {
  ArrowUpRight,
  Bolt,
  Calendar,
  DraftingCompass,
  GithubIcon,
  User,
} from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "MetaBuddy",
    description:
      "MetaBuddy is a Chrome extension that performs instant, client-side analysis of a webpage's <head>, extracting SEO metadata, Open Graph tags, and script details via DOM inspection, enabling a one-click, zero-backend audit of a page's search and social readiness.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/metabuddy",
    link: "https://www.github.com/PavanBhat007/metabuddy",
    languages: ["JavaScript"],
    tools: ["Chrome Extension API"],
    collaborators: ["Nuthan B"],
    year: 2026,
  },
  {
    title: "ECG Analyser Demo",
    description:
      "ECG Analyser Demo is a prototype that ingests .adicht ECG files, processes signals using Python libraries such as NeuroKit2, and presents extracted features with a basic normal vs arrhythmic prediction through a simple Flask-based web interface.",
    image:
      "https://opengraph.githubassets.com/1/PavanBhat007/ECG-Analyser-Demo",
    link: "https://www.github.com/PavanBhat007/ECG-Analyser-Demo",
    languages: ["Python", "JavaScript"],
    tools: ["Flask", "Adicht", "NeuroKit2"],
    collaborators: ["Nuthan B", "J N Sumanth", "P R Shashank"],
    year: 2025,
  },
  {
    title: "Food Order Website",
    description:
      "OrderIt is a MERN-based web application with a React + Redux frontend and a backend supporting order management, Stripe payment integration, Cloudinary image handling, and email workflows, built to simulate a real-world online food ordering system.",
    image:
      "https://opengraph.githubassets.com/1/PavanBhat007/food-order-website",
    link: "https://www.github.com/PavanBhat007/food-order-website",
    languages: ["ReactJS", "JavaScript", "Redux"],
    tools: ["Stripe", "Cloudinary", "MailTrap"],
    collaborators: [],
    year: 2024,
  },
  {
    title: "Canteen Billing System",
    description:
      "Billing System is a simple college canteen billing system built with Flask, JavaScript, and SQLite that uses a token-based workflow to track orders and generate bills efficiently.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/BillingSystem",
    link: "https://www.github.com/PavanBhat007/BillingSystem",
    languages: ["Flask", "JavaScript", "SQLite"],
    tools: [],
    collaborators: ["Nuthan B", "Md. Kaifulla", "Md. Saad"],
    year: 2024,
  },
  {
    title: "NASA Space Apps Hackathon Landing page",
    description:
      "NASA Space Apps Hackathon Landing page is a React-based landing page created for the 2024 NASA Space Apps Hackathon event at Dayananda Sagar University, providing event information and structure for participants.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/NasaSpaceApp",
    link: "https://www.github.com/PavanBhat007/NasaSpaceApp",
    languages: ["ReactJS", "JavaScript"],
    tools: [],
    collaborators: [],
    year: 2024,
  },
  {
    title: "Hospital System Dashboard",
    description:
      "This is a React-based dashboard application built with JavaScript that integrates APIs like Gemini and Google Calendar to help manage healthcare workflows and scheduling within a hospital context.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/Hospital-System",
    link: "https://www.github.com/PavanBhat007/Hospital-System",
    languages: ["ReactJS", "JavaScript"],
    tools: ["Gemini API", "Google Calendar API"],
    collaborators: ["P Amith", "Harsha", "Joshna"],
    year: 2024,
  },
];

export const Projects = () => {
  return (
    <section className="w-full mt-20">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> ls projects | head -n
        2
      </p>

      <h2 className="text-2xl font-bold text-white mb-8">Selected Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.slice(0, 2).map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <button className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-neon transition-colors group">
        <span>View all projects</span>
        <ArrowUpRight
          size={14}
          className="opacity-70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  languages: string[];
  tools: string[];
  collaborators: string[];
  repo?: string;
  image: string;
  year: number;
}

export const ProjectCard = ({
  title,
  description,
  languages,
  tools,
  collaborators,
  repo,
  image,
  year,
}: ProjectCardProps) => {
  return (
    <div className="group relative rounded-lg border border-white/10 bg-[#0b0f14] p-5 transition hover:border-neon/60 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
      {/* Terminal Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        </div>

        <span className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-0.5 rounded bg-black/30 mb-4">
          {year}
        </span>
      </div>

      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="rounded mb-4 w-full"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {languages.map((lang) => (
          <span
            key={lang}
            className="flex items-center gap-1.5 text-xs px-2 py-1 rounded 
                 border border-cyan-400/30 
                 bg-cyan-400/10 
                 text-cyan-300 
                 font-mono
                 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]
                 transition"
          >
            <Bolt size={12} />
            {lang}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="flex items-center gap-1.5 text-xs px-2 py-1 rounded 
                 border border-emerald-400/30 
                 bg-emerald-400/10 
                 text-emerald-300 
                 font-mono
                 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]
                 transition"
          >
            <DraftingCompass size={12} />
            {tool}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {collaborators.map((person) => (
          <span
            key={person}
            className="flex items-center gap-1.5 text-xs px-2 py-1 rounded 
                 border border-amber-400/30 
                 bg-amber-400/10 
                 text-amber-300 
                 font-mono
                 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]
                 transition cursor-pointer"
          >
            <User size={12} />
            {person}
          </span>
        ))}
      </div>

      {/* Footer */}
      {repo && (
        <a
          href={repo}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-neon transition"
        >
          <GithubIcon size={16} />
          View Source
          <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  );
};

export default Projects;
