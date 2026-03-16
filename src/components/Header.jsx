import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        once: true,
      },
    });

    // Initial states
    gsap.set(".hero video", { opacity: 0.5, scale: 1.1 });
    gsap.set(".heroText", { opacity: 0, yPercent: 20 });
    gsap.set(".overlay", { opacity: 0 });

    // === Stage 1: Fade + zoom video in ===
    tl.to(
      ".hero video",
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out",
      },
      0
    );

    // === Stage 2: Text reveal (centered, smooth) ===
    tl.to(
      ".heroText",
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.5,
        ease: "power4.out",
      },
      "-=1.5"
    );

    // === Stage 3: Add a dark overlay at the end ===
    tl.to(
      ".overlay",
      {
        opacity: 0.6,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1"
    );

    const title = document.querySelector(".heroText h1");
    if (title) {
        const words = title.textContent.split(" ");
        title.innerHTML = words
          .map(
            (w) => `<span class='word inline-block opacity-0 translate-y-6'>${w}</span>`
          )
          .join(" ");

        tl.to(
          ".word",
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            stagger: 0.15,
          },
          "-=1.5"
        );
    }
  }, []);

  return (
    <>
      <section id="home" className="hero relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="./bgvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (darkens background at end) */}
        <div className="overlay absolute inset-0 bg-dark-primary dark:bg-black pointer-events-none"></div>

        {/* Hero Text */}
        <div className="heroText relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Hassan Ali
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            A passionate frontend
            <b className="text-pink-400"> Web Developer</b> who loves crafting
            elegant, performant, and modern web experiences that blend
            creativity with precision.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="border-2 py-3 px-8 text-pink-400 border-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300 rounded-lg shadow-lg">
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer"> Let's Talk</Link>
            </button>
            <button className="border-2 py-3 px-8 text-white border-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg shadow-lg">
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer"> Check Projects</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
