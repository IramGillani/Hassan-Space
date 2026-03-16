import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const links = [
  { title: "Home", id: 0 },
  { title: "Projects", id: 1 },
  { title: "About", id: 2 },
  { title: "Contact", id: 3 },
];
export const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61579484724235",
    icon: <FaFacebook size={24} />,
    id: 0,
  },
  { href: "https://www.github.com", icon: <FaGithub size={24} />, id: 1 },
  // { href: "https://www.twitter.com", icon: <FaTwitter /> },
  // { href: "https://www.instagram.com", icon: <FaInstagram /> },
  // { href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
];
export const projectContent = [
  {
    title: "Cocktail Web",
    desc: "A react+tailwind website using GSAP for amazing animations on scroll",
    img: "./cocktail.png",
    alt: "A full view of cocktail webpage",
    link: "https://github.com/IramGillani/Mojito.git",
  },
  {
    title: "Smart Portfolio",
    desc: " A Next js smart portfolio with three responsive sections and contact form functionality",
    img: "./Portfolio.png",
    alt: "A full view of portfolio webpage",
    link: "https://github.com/IramGillani/Mojito.git",
  },

  {
    title: "Morent : Car Rental web",
    desc: "A react+tailwind car rental website with search and filter functionality, add to favorites button, and responsive design for seamless user experience across devices.",
    img: "./morent3d.png",
    alt: "A full view of Morent webpage",
    link: "https://github.com/IramGillani/Morent.git",
  },
  {
    title: "Cocktail Web",
    desc: "A react+tailwind website using GSAP for amazing animations on scroll",
    img: "./cocktail.png",
    alt: "A full view of cocktail webpage",
    link: "https://github.com/IramGillani/Mojito.git",
  },
];

export const skills = [
  { skill: "Tailwind CSS", id: 0, icon: "./skills/tailwind.png" },
  { skill: "React JS", id: 1, icon: "./skills/react.png" },
  { skill: "Next JS", id: 2, icon: "./skills/nextjs.png" },
  { skill: "JavaScript", id: 3, icon: "./skills/javascript.png" },
  { skill: "HTML5", id: 4, icon: "./skills/html.png" },
  { skill: "CSS3", id: 5, icon: "./skills/css.png" },
  { skill: "Git & GitHub", id: 6, icon: "./skills/git.png" },
  { skill: "Framer Motion", id: 7, icon: "./skills/motion.png" },
  { skill: "Figma", id: 8, icon: "./skills/figma.png" },
  { skill: "GSAP Animation", id: 9, icon: "./skills/gsap.png" },
  { skill: "TypeScript", id: 10, icon: "./skills/typescript.png" },
];
