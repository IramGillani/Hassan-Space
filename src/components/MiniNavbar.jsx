import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { links } from "../data";
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
                <Link to={`/${title.toLowerCase()}`}>{title}</Link>
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
        </ul>
      )}
      {/* using heroicons */}
    </>
  );
};

export default MiniNavbar;
