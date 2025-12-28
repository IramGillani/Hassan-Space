import { projectContent } from "../data";

const Projects = () => {
  const ProjectCard = ({ projectTitle, description, img, alt, code }) => {
    return (
      <div className="w-full bg-light-secondry dark:bg-dark-secondry rounded-xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
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
            className="w-full h-full object-cover rounded-b-xl"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="px-6">
      <h1 className="text-center pb-4"> Projects</h1>
      <p className="text-center pb-6 text-xl">
        Check recent projects and decide
      </p>
      {/* <div>Let's talk for your new project</div>
      <p>Let's work together</p> */}
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projectContent.map(({ alt, img, desc, link, title }) => (
          <ProjectCard
            alt={alt}
            img={img}
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
