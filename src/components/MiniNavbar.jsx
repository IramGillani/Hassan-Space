import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { links } from "../data";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";
import { XCircleIcon } from "@heroicons/react/16/solid";

const MiniNavbar = ({
  isMenuOpen,
  toggleDark,
  isDark,
  setActivePage,
  activePage,
  setIsMenuOpen,
}) => {
  return (
    <>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 h-dvh w-dvw mx-6">
          {links.map(({ title, id }, index) => {
            return (
              <li
                key={id}
                onClick={() => setActivePage(index)}
                className={`px-4 py-2 rounded-2xl text-dark-secondry hover:text-[#02020f] dark:hover:text-[#717188] hover-style ${
                  activePage === index
                    ? "text-dark-primary dark:text-light-secondry font-bold"
                    : "text-dark-primary dark:text-light-secondry  "
                }`}
              >
                <Link to={`/${title.toLowerCase()}`}>{title}</Link>
              </li>
            );
          })}
          <button
            className="py-2 px-2 bg-dark-primary dark:bg-light-primary cursor-pointer rounded-full flex justify-center items-center"
            onClick={toggleDark}
          >
            {isDark ? (
              <MoonIcon className="icon-mini" />
            ) : (
              <SunIcon className="icon-mini" />
            )}
          </button>
          <button
            className="absolute top-0 right-0 px-4 py-4  cursor-pointer color-toggle"
            onClick={() => setIsMenuOpen(false)}
          >
            <XCircleIcon className="w-8 h-8" />
          </button>
        </ul>
      )}
      {/* using heroicons */}
    </>
  );
};

export default MiniNavbar;
