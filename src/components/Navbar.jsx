import { Link } from "react-router-dom";
import { useState } from "react";
import { links } from "../data";

import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";
const Navbar = ({ onClose, toggleDark, isDark }) => {
  const [activePage, setActivePage] = useState(0);
  return (
    <>
      <ul className="flex gap-4 ">
        {links.map(({ title, id }, index) => (
          <li
            onClick={() => setActivePage(index)}
            key={id}
            className={`px-4 py-2 rounded-2xl text-dark-secondry hover:text-dark-primary/80 dark:hover:text-light-primary/80 transition-all duration-[0.5s] ${
              activePage === index
                ? "text-dark-primary dark:text-light-secondry font-semibold"
                : "text-dark-primary dark:text-light-secondry"
            }`}
          >
            <Link to={`/${title.toLowerCase()}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button
        className="py-2 px-2 bg-dark-primary dark:bg-light-primary cursor-pointer rounded-full"
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
