import { Link } from "react-scroll";
import { links } from "../data.jsx";
import { socialLinks } from "../data.jsx";
const Footer = ({ activeSection, setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Navigation Links */}

        <ul className="flex justify-center gap-2 mb-4 border-b border-gray-800 pb-8 ">
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
        {/* Bottom Section: Copyright, Brand, and Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright - Left/Start on Desktop */}
          <div className="text-sm order-2 md:order-1 flex-1">
            © {currentYear} All rights reserved.
          </div>

          {/* Website Name - Center on Desktop */}
          <div className="text-xl font-bold text-white order-1 md:order-2 flex-1 text-center">
            HassanSpace
          </div>

          {/* Social Links - Right on Desktop */}
          <div className="flex items-center gap-5 order-3 md:order-3 flex-1 justify-end">
            {socialLinks.map(({ icon, href, id }) => (
              <a
                href={href}
                key={id}
                className="hover:text-white transition-transform hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
