import { socialLinks } from "../data";
import { Link } from "react-scroll";

const About = ({ id, name, sectionRef }) => {
  return (
    <>
      <section
        id={name}
        name={name}
        ref={sectionRef}
        className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#0d0d0d] px-6"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image with dark background */}
          <div className="relative flex items-center justify-center">
            {/* Dark background box */}
            <div className="bg-dark-primary dark:bg-[#222] w-3/4 h-[400px] md:h-[500px] rounded-2xl"></div>

            {/* Image overlapping (half out of dark background) */}
            <img
              src="/comp.jpg"
              alt="About me"
              id="about-img"
              className="absolute w-full md:w-64 lg:w-80 rounded-2xl shadow-2xl object-cover
              md:translate-x-1/3 md:translate-y-1 h-[400px]" // moves image half out to the right
            />
          </div>
          <div className="space-y-5 py-4 px-6 flex flex-col justify-center about-text">
            <h3 className="section-title">Who am I?</h3>
            {/* MY Working Experiance */}
            <p className="w-full tracking-wide mb-4">
              I'm Hassan Ali a passionate remote web develpor based in
              <b className="text-green-950 dark:text-green-500">
                {" "}
                Pakistan
              </b>{" "}
              with extensive knowledge and experiance.I’m always eager to take
              on new challenges, expand my skills, and deliver projects that
              combine creativity with technical precision. My focus is on fast
              execution, clean design and seamless user experiences.Whether it’s
              a personal brand, startup, or digital product, I can help bring
              your vision to life through code. Take a look at my
              <b>
                {" "}
                <Link
                  to="projects"
                  className="cursor-pointer border-b-black border-b-2"
                >
                  Projects
                </Link>
              </b>{" "}
              to see my work in action — I’m confident you’ll enjoy what you
              see. If you’re ready to bring your vision to life...
            </p>

            <button className="border-2 w-1/2 hover:border-light-primary dark:hover:border-dark-primary py-3 px-8 hover:bg-gray-700/50 hover-style tracking-wider">
              <Link to="contact"> Let's Talk</Link>
            </button>
            <div className=" gap-4 hidden md:flex">
              {socialLinks.map(({ icon, href, id }) => (
                <a
                  key={id}
                  href={href}
                  className=" hover:text-[#3e3e50] dark:hover:text-[#717188] hover-style"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
