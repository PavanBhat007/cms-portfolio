import {
  ArrowUpRight,
  Bolt,
  DraftingCompass,
  GithubIcon,
  Tag,
  User,
} from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "MetaBuddy",
    description:
      "A Chrome extension that analyzes webpage <head> metadata, SEO tags, Open Graph data, and scripts in one click.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/metabuddy",
    link: "https://www.github.com/PavanBhat007/metabuddy",
    languages: ["JavaScript"],
    tools: ["Chrome Extension API"],
    collaborators: ["Nuthan B"],
  },
  {
    title: "ECG Analyser Demo",
    description:
      "Basic project demo for an ECG analyzer that takes .adicht ECG file as input, and displays ECG features and a prediction if the ECG is normal (Sinus Rhythm) or is specimen (has arrhythmias)",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/ECG-Analyser-Demo",
    link: "https://www.github.com/PavanBhat007/ECG-Analyser-Demo",
    languages: ["Python", "JavaScript"],
    tools: ["Flask", "Adicht", "NeuroKit2"],
    collaborators: ["Nuthan B", "J N Sumanth", "P R Shashank"],
  },
  {
    title: "Food Order Website",
    description:
      "Food ordering website built as a part of WSA (WebStack Academy) MERN Internship/ Training",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/food-order-website",
    link: "https://www.github.com/PavanBhat007/food-order-website",
    languages: ["ReactJS", "JavaScript", "Redux"],
    tools: ["Stripe", "Cloudinary", "MailTrap"],
    collaborators: [],
  },
  {
    title: "Canteen Billing System",
    description:
      "A Simple billing system for College Canteen using a token-based system.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/BillingSystem",
    link: "https://www.github.com/PavanBhat007/BillingSystem",
    languages: ["Flask", "JavaScript", "SQLite"],
    tools: [],
    collaborators: ["Nuthan B", "Md. Kaifulla", "Md. Saad"],
  },
  {
    title: "NASA Space Apps Hackathon Landing page",
    description:
      "A Landing page for NASA Space Apps Hackathon 2023 conducted at Dayananda Sagar University, Harohalli.",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/NasaSpaceApp",
    link: "https://www.github.com/PavanBhat007/NasaSpaceApp",
    languages: ["ReactJS", "JavaScript"],
    tools: [],
    collaborators: [],
  },
  {
    title: "Hospital System Dashboard",
    description:
      "Food ordering website built as a part of WSA (WebStack Academy) MERN Internship/ Training",
    image: "https://opengraph.githubassets.com/1/PavanBhat007/Hospital-System",
    link: "https://www.github.com/PavanBhat007/Hospital-System",
    languages: ["ReactJS", "JavaScript"],
    tools: ["Gemini API", "Google Calendar API"],
    collaborators: ["P Amith", "Harsha", "Joshna"],
  },
];

export const Projects = () => {
  return (
    <section className="w-full mt-20">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> ls projects/
      </p>

      <h2 className="text-2xl font-bold text-white mb-8">Selected Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.slice(0, 2).map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
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
}

export const ProjectCard = ({
  title,
  description,
  languages,
  tools,
  collaborators,
  repo,
  image,
}: ProjectCardProps) => {
  return (
    <div className="group relative rounded-lg border border-white/10 bg-[#0b0f14] p-5 transition hover:border-neon/60 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
        <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
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
