import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=200%", // 👈 makes it long (3x viewport height)
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Initial states
    gsap.set(".hero video", { opacity: 0, scale: 1.3 });
    gsap.set(".heroText", { opacity: 0, yPercent: 50 });
    gsap.set(".overlay", { opacity: 0 });

    // === Stage 1: Fade + zoom video in ===
    tl.to(
      ".hero video",
      {
        opacity: 1,
        scale: 1,
        duration: 4,
        ease: "power2.out",
      },
      0
    );

    // === Stage 2: Scroll-progressive video playback ===
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration || 1,
          ease: "none",
          duration: 2, // spread over scroll
        },
        "<"
      );
    };

    // === Stage 3: Text reveal (centered, smooth) ===
    tl.to(
      ".heroText",
      {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.3,
      },
      "40%"
    ); // starts mid-scroll

    // === Stage 4: Add a dark overlay at the end ===
    tl.to(
      ".overlay",
      {
        opacity: 0.5,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "70%"
    );

    const title = document.querySelector(".heroText h1");
    const words = title.textContent.split(" ");
    title.innerHTML = words
      .map(
        (w) =>
          `<span class='word inline-block opacity-0 translate-y-6'>${w}</span>`
      )
      .join(" ");

    tl.to(
      ".word",
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "40%"
    );
    //  const heroSplit = new SplitText(".heroText h1", { type: "chars,words" });
    //     gsap.from(heroSplit.chars, {
    //       yPercent: 100,
    //       duration: 2,
    //       ease: "expo.out",
    //       stagger: 0.06,
    //     });
  }, []);

  return (
    <>
      <section className="hero">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="./bgvideo.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (darkens background at end) */}
        <div className="overlay absolute inset-0 bg-dark-primary dark:bg-dark-secondry pointer-events-none"></div>

        {/* Hero Text */}
        <div className="heroText">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            Hassan Ali
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            A passionate <b className="text-pink-300">Web Developer</b> who
            loves crafting elegant, performant, and modern web experiences that
            blend creativity with precision.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="border-2 py-3 px-8 text-pink-400 hover:text-pink-600 hover-style attractive">
              <Link to="./contact"> Let's Talk</Link>
            </button>
            <button className="border-2 py-3 px-8 hover:bg-gray-700/50 hover-style ">
              <Link to="/projects"> Check Projects</Link>
            </button>
          </div>
        </div>
      </section>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis,
        commodi ducimus corrupti beatae dicta. Unde quis illo consequatur vero
        eum odit ab aperiam placeat earum recusandae, rerum fugiat minus ullam a
        quas officiis quos sequi cumque laborum impedit fuga, omnis quam!
        Voluptatem, qui, corrupti facilis minus, dolore vel unde doloremque esse
        praesentium inventore labore. Tempora adipisci, consequuntur quos
        excepturi dolorum debitis quo perferendis unde nostrum cupiditate iste,
        nobis quia fuga eligendi aperiam distinctio corrupti ut saepe animi
        reprehenderit facere at illo minima incidunt? Voluptas, ab est dolores,
        perspiciatis debitis, praesentium tenetur eveniet nam suscipit minus
        ratione iste corporis nulla!
      </div>
    </>
  );
};

export default HomePage;
