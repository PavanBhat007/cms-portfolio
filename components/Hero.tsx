import { ArrowRight, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { EXPERIENCES } from "../lib/data/experiences";

export const Hero = () => {
  return (
    <section className="mt-12 max-w-3xl lg:max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Hi! I'm <span className="text-neon">Pavan 👋</span>
      </h1>

      <div className="text-base leading-relaxed w-[90%]">
        <p className="text-sm text-gray-400 ">
          <span className="text-neon">root@kspavan:~$</span> cat about_me.md
        </p>
        <p className="mt-2">
          I am an{" "}
          <span className="text-neon font-bold">AI Engineer @ Neurofin AI</span>
          , specializing in LLM fine-tuning and system optimization. While I am
          currently exploring machine intelligence, my foundation is
          <span className="text-neon font-bold"> Full Stack Development</span>
          —architecting CMS platforms and scalable MERN applications.
        </p>
        <p className="mt-2">
          My work in biomedical signal processing was showcased at the
          <span className="text-neon font-bold">
            {" "}
            Bangalore Tech Summit 2025
          </span>
          , and I’ve engineered networking solutions recognized by
          <span className="text-neon font-bold"> Nokia</span>. I bridge the gap
          between robust web architecture and adaptive machine intelligence.
        </p>
      </div>

      <div className="flex items-center gap-4 mt-6 text-sm">
        <div className="flex items-center gap-1 font-medium border-r-2 pr-4 py-0 border-white/60">
          <GithubIcon size={16} className="inline-block mr-2" />
          <a href="https://github.com/PavanBhat007">GitHub</a>
        </div>
        <div className="flex items-center gap-1 font-medium border-r-2 pr-4 py-0 border-white/60">
          <LinkedinIcon size={16} className="inline-block mr-2" />
          <a href="https://linkedin.com/in/pavan-ks-bhat">LinkedIn</a>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <a href="/about">
            <span className="hidden md:inline">Get to know me better</span>
            <span className="md:hidden">About me</span>
          </a>
          <ArrowRight size={16} className="inline-block mr-2" />
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 text-sm flex-wrap">
        {EXPERIENCES.map((exp, idx) => (
          <>
            <div className="flex items-center gap-3 font-medium">
              <Image src={exp.logo} alt={exp.company} width={36} height={36} />
              <a href={exp.link}>
                {exp.company}{" "}
                {!exp.is_current && (
                  <span className="text-gray-600">(past)</span>
                )}
              </a>
            </div>
            {idx < EXPERIENCES.length - 1 && (
              <div className="w-6 h-0.5 -rotate-[70deg] bg-neon" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};
