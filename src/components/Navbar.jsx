import { Routes, Route, Link } from "react-router-dom";
import { links } from "../data";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
const Navbar = ({ onClose, toggleDark }) => {
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
        className="py-3 px-3 bg-red-200 cursor-pointer rounded-2xl"
        onClick={toggleDark}
      >
        Toggle
      </button>
    </>
  );
};

export default Navbar;
