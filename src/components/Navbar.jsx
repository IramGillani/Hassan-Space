import { Routes, Route, Link } from "react-router-dom";
import { links } from "../data";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";
const Navbar = ({ onClose, toggleDark, isDark }) => {
  return (
    <>
      <ul className="flex gap-4 ">
        {links.map(({ title, id }) => (
          <li key={id} className="px-4 py-2 rounded-2xl">
            <Link to={`/${title}`}>{title}</Link>
          </li>
        ))}

        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/projects-page" element={<ProjectsPage />} />
          {/* A catch-all route for unmatched paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </ul>
      <button
        className="py-3 px-3 bg-pink-500 cursor-pointer rounded-2xl"
        onClick={toggleDark}
      >
        {isDark ? (
          <MoonIcon className="icon-mini" />
        ) : (
          <SunIcon className="icon-mini" />
        )}
      </button>
    </>
  );
};

export default Navbar;
