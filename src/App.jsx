import { useState, useEffect } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Navbar from "./components/Navbar";
import MiniNavbar from "./components/MiniNavbar";

function App() {
  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {" "}
      <main className={`w-full max-w-full h-dvh ${isDark ? "dark" : ""}`}>
        <nav
          className={`flex items-center justify-between bg-amber-900 dark:bg-amber-200 ${
            isMobileMenu ? " " : "flex-row"
          } px-5 py-4`}
        >
          <h2>Portfolio</h2>
          <div>
            {" "}
            <button
              onClick={() => setIsMenuOpen(() => !isMenuOpen)}
              className={`${isMobileMenu ? "block" : "hidden"}`}
            >
              <HiMiniBars3 />
            </button>
          </div>

          {isMobileMenu ? (
            <MiniNavbar
              isMenuOpen={isMenuOpen}
              toggleDark={toggleDark}
              isDark={isDark}
            />
          ) : (
            <Navbar toggleDark={toggleDark} isDark={isDark} />
          )}
        </nav>
      </main>
    </>
  );
}

export default App;
