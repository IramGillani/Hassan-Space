import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTitle({ title, subtitle }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;

    gsap.fromTo(
      el.querySelectorAll(".char"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.04,

        scrollTrigger: {
          trigger: el,
          start: "bottom 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={titleRef} className="section-title mb-8">
      <h2 className="text-4xl font-bold sm:text-4xl font-display text-center">
        {title.split("  ").map((c, i) => (
          <span key={i} className="char inline-block">
            {c}
          </span>
        ))}
      </h2>

      {subtitle && <p className="mt-2 opacity-70 text-center">{subtitle}</p>}
    </div>
  );
}
