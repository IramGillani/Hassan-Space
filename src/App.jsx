import { useState, useEffect, useRef } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Navbar from "./components/Navbar";
import MiniNavbar from "./components/MiniNavbar";
// import { Routes, Route } from "react-router-dom";
// import AboutPage from "./components/pages/AboutPage";
// import ContactPage from "./components/pages/ContactPage";
// import ProjectsPage from "./components/pages/ProjectsPage";
// import { Link } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Link } from "react-scroll";
import { socialLinks } from "./data";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef();

  useGSAP(() => {
    const titleSplit = new SplitText(".section-title", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // animate when section enters viewport
        end: "bottom top",
        scrub: false,
      },
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {" "}
      <main
        className={`w-full color-toggle max-w-full h-dvh scroll-smooth ${
          isDark ? "dark" : ""
        }`}
      >
        <nav
          className={`flex sticky color-toggle items-center justify-between px-5 py-4 z-[999]`}
        >
          {/* fixed w-full */}
          <Link
            to="/"
            className={`${
              isMenuOpen && isMobileMenu ? "hidden" : "block"
            } hover:rotate-360 duration-[1.5s]`}
          >
            <h2>Portfolio</h2>
            {/* <img src="./p-icon.png" alt="" className="w-8 h-8" /> */}
          </Link>

          <div>
            <button
              onClick={() => setIsMenuOpen(() => !isMenuOpen)}
              className={`${isMobileMenu && !isMenuOpen ? "block" : "hidden"}`}
            >
              <HiMiniBars3 />
            </button>
          </div>

          {isMobileMenu ? (
            <MiniNavbar
              isMenuOpen={isMenuOpen}
              toggleDark={toggleDark}
              isDark={isDark}
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            />
          ) : (
            <Navbar
              toggleDark={toggleDark}
              isDark={isDark}
              setActiveSection={setActiveSection}
              activeSection={activeSection}
            />
          )}
          <div className="md:flex-center gap-4 hidden md:flex">
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
        </nav>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* A catch-all route for unmatched paths */}
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        {/* </Routes> */}

        <Header id="home" name="home" />

        <About id="about" name="about" sectionRef={sectionRef} />

        <Projects id="projects" name="projects" />

        <Contact id="contact" name="contact" />
      </main>
      {/* nav
      header
      about
      technologies
      projects
      contact
      footer */}
    </>
  );
}

export default App;
