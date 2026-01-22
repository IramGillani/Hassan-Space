import { projectContent } from "../data";
import SectionTitle from "./sectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ name }) => {
  const projectRefs = useRef([]);
  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };
  useGSAP(() => {
    // Animate each item individually using the array
    projectRefs.current.forEach((el, index) => {
      gsap.from(el, {
        x: index % 2 === 0 ? -100 : 100, //entry directions
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const ProjectCard = ({ projectTitle, description, img, alt, code, ref }) => {
    return (
      <div
        className="w-full bg-light-secondry dark:bg-dark-secondry rounded-xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
        ref={ref}
      >
        <header className="flex flex-col gap-3 p-4 flex-grow">
          <div className="flex items-center justify-between">
            <span className="font-bold text-pink-400">{projectTitle}</span>
            <a
              className="font-semibold border-2 py-1.5 px-4  hover-style hover:bg-light-primary dark:hover:bg-light-secondry/50 transition"
              href={code}
              target="_blank"
            >
              Live Code
            </a>
          </div>

          <p className="text-sm opacity-80 leading-relaxed">{description}</p>
        </header>

        <div className="w-full h-64 md:h-94 xl:h-120">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover rounded-b-xl hover: hover-style hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" name={name} className=" px-6">
      <SectionTitle
        title="Projects"
        subtitle="Check recent projects and decide"
      />

      {/* <div>Let's talk for your new project</div>
      <p>Let's work together</p> */}
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projectContent.map(({ alt, img, desc, link, title }, index) => (
          <ProjectCard
            alt={alt}
            ref={addToRefs}
            img={img}
            key={index}
            code={link}
            description={desc}
            projectTitle={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
