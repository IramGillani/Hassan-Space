import { useState, useEffect, Suspense, lazy } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Navbar from "./components/Navbar";
import MiniNavbar from "./components/MiniNavbar";
import { Link } from "react-scroll";
import { socialLinks } from "./data";

// Eagerly loaded components above-the-fold
import Header from "./components/Header";

// Lazy loaded components below-the-fold for performance optimization
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobileMenu(window.innerWidth < 768);
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <main
        className={`w-full color-toggle max-w-full h-dvh scroll-smooth ${
          isDark ? "dark" : ""
        }`}
      >
        <nav
          className={`flex sticky top-0 color-toggle items-center justify-between px-5 py-4 z-[999] shadow-sm`}
        >
          <Link
            to="/"
            className={`${
              isMenuOpen && isMobileMenu ? "hidden" : "block"
            } hover:rotate-360 duration-[1.5s] cursor-pointer`}
          >
            <h2>Portfolio</h2>
          </Link>

          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isMobileMenu && !isMenuOpen ? "block" : "hidden"}`}
            >
              <HiMiniBars3 size={24} />
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
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 dark:hover:text-pink-400 hover-style"
              >
                {icon}
              </a>
            ))}
          </div>
        </nav>

        <Header id="home" name="home" />

        <Suspense fallback={<div className="w-full h-[50vh] flex justify-center items-center text-xl font-semibold">Loading...</div>}>
          <About id="about" name="about" />
          <Skills id="skills" name="skills" />
          <Projects id="projects" name="projects" />
          <Contact id="contact" name="contact" />
          <Footer
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </Suspense>
      </main>
    </>
  );
}

export default App;
