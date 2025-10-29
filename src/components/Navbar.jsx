import { Link } from "react-scroll";
import { links } from "../data";

import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";
const Navbar = ({
  onClose,
  toggleDark,
  isDark,
  setActiveSection,
  activeSection,
}) => {
  return (
    <>
      <ul className="flex gap-4 ">
        {links.map(({ title, id }, index) => (
          <li
            onClick={() => setActiveSection(index)}
            key={id}
            className={`px-4 py-2 rounded-2xl text-dark-secondry hover:text-[#02020f] dark:hover:text-[#717188] hover-style ${
              activeSection === index
                ? "text-dark-primary dark:text-light-secondry font-bold"
                : "text-dark-primary dark:text-light-secondry  "
            }`}
          >
            <Link
              to={`${title.toLowerCase()}`}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {title}
            </Link>
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
