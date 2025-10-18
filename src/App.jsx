import { useState, useEffect } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MiniNavbar from "./components/MiniNavbar";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import HomePage from "./components/pages/HomePage";
import { socialLinks } from "./data";
import { Link } from "react-router-dom";

function App() {
  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
        className={`w-full color-toggle max-w-full h-dvh ${
          isDark ? "dark" : ""
        }`}
      >
        <nav
          className={`flex sticky items-center justify-between text-dark-primary dark:text-light-primary bg-light-primary dark:bg-dark-primary  ${
            isMobileMenu ? " " : "flex-row"
          } px-5 py-4`}
        >
          <Link to="/">
            <h2>Portfolio</h2>
          </Link>

          <div>
            <button
              onClick={() => setIsMenuOpen(() => !isMenuOpen)}
              className={`${isMobileMenu ? "block" : "hidden"}`}
            >
              <HiMiniBars3 />
            </button>
          </div>

          {isMobileMenu ? (
            <MiniNavbar
              isMenuOpen={isMenuOpen}
              toggleDark={toggleDark}
              isDark={isDark}
            />
          ) : (
            <Navbar toggleDark={toggleDark} isDark={isDark} />
          )}
          <div className="flex-center gap-4 ">
            {socialLinks.map(({ icon, href, id }) => (
              <a key={id} href={href} className="hidden md:flex">
                {icon}
              </a>
            ))}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* A catch-all route for unmatched paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
