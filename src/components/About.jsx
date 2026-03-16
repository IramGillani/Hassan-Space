import { socialLinks } from "../data";
import { Link } from "react-scroll";
import SectionTitle from "./sectionTitle";

const About = ({ name }) => {
  return (
    <>
      <section
        id={name}
        name={name}
        className="w-full min-h-screen flex flex-col justify-center bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary px-6 py-12"
      >
        <SectionTitle title="About Me" />
        <div className="flex items-center justify-center mt-10">
          <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8 py-4 px-6 about-text">
            <h3 className="text-3xl font-bold mb-2">Who am I?</h3>
            <p className="w-full tracking-wide text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              I'm Hassan Ali, a remote web developer based in 
              <b className="text-pink-600 dark:text-pink-400"> Pakistan</b>. 
              My focus is fast execution and clean design that combine creativity with technical 
              precision. Whether it's a personal brand, startup, or digital product, I can help 
              bring your vision to life through code.
            </p>

            <button className="border-2 border-dark-primary dark:border-light-primary hover:border-pink-500 hover:text-pink-500 dark:hover:border-pink-400 dark:hover:text-pink-400 py-3 px-10 transition-colors duration-300 tracking-wider font-semibold rounded-lg mt-6">
              <Link to="contact" smooth={true} duration={500}>Let's Talk</Link>
            </button>
            <div className="flex gap-6 mt-8">
              {socialLinks.map(({ icon, href, id }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
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
