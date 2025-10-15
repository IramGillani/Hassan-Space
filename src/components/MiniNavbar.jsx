import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { links } from "../data";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";

const MiniNavbar = ({ isMenuOpen, toggleDark, isDark }) => {
  return (
    <>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 h-dvh w-dvw mx-6">
          {links.map(({ title, id }) => {
            return (
              <li key={id} className="dark:">
                <Link to={`/${title}`}>{title}</Link>
              </li>
            );
          })}
          <button
            className="py-3 px-3 bg-red-200 cursor-pointer rounded-2xl"
            onClick={toggleDark}
          >
            {isDark ? (
              <MoonIcon className="icon-mini" />
            ) : (
              <SunIcon className="icon-mini" />
            )}
          </button>

          <Routes>
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/projects-page" element={<ProjectsPage />} />
            {/* A catch-all route for unmatched paths */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </ul>
      )}
      {/* using heroicons */}
    </>
  );
};

export default MiniNavbar;
