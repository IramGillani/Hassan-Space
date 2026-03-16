import { useEffect, useRef } from "react";
import { skills } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial entrance animation on scroll
      gsap.from(".skill-wrapper", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(2)",
      });

      // 2. Continuous orbit animation
      const orbitAnim = gsap.to(".skills-orbit", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      // 3. Counter-rotation for icons to keep them upright
      const counterOrbitAnim = gsap.to(".skill-icon-container", {
        rotation: "-=360",
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      // Pause animations on hover
      const orbitContainer = orbitRef.current;
      const pauseAnim = () => {
        orbitAnim.pause();
        counterOrbitAnim.pause();
      };
      const playAnim = () => {
        orbitAnim.play();
        counterOrbitAnim.play();
      };

      if (orbitContainer) {
        orbitContainer.addEventListener("mouseenter", pauseAnim);
        orbitContainer.addEventListener("mouseleave", playAnim);
      }

      return () => {
        if (orbitContainer) {
          orbitContainer.removeEventListener("mouseenter", pauseAnim);
          orbitContainer.removeEventListener("mouseleave", playAnim);
        }
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-24 flex justify-center items-center overflow-hidden min-h-[500px] bg-light-primary dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="relative flex justify-center items-center w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
        {/* Center Text */}
        <div className="absolute z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/60 dark:bg-dark-secondry/80 backdrop-blur-md border border-pink-400 dark:border-pink-500/50 flex justify-center items-center shadow-xl text-center p-4 transition-colors duration-500">
          <h3 className="font-bold text-sm md:text-base tracking-widest uppercase text-dark-primary dark:text-light-primary">
            Areas of <br />
            Expertise
          </h3>
        </div>

        {/* Orbit container (the circular track) */}
        <div
          ref={orbitRef}
          className="skills-orbit relative w-full h-full rounded-full border-[1.5px] border-dashed border-pink-300 dark:border-gray-600 transition-colors duration-500"
        >
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;

            return (
              <div
                key={skill.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                {/* Position on the track edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 skill-wrapper z-20">
                  <div
                    className="skill-icon-container flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-light-primary/90 rounded-full shadow-md hover:shadow-xl border-[1.5px] border-pink-400 dark:border-pink-500 cursor-pointer overflow-hidden group transition-all duration-300"
                    style={{ transform: `rotate(-${angle}deg)` }}
                    title={skill.skill}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.skill}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain transition-transform duration-300 group-hover:scale-125 p-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
