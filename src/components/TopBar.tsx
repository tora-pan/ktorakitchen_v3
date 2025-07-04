import { Link } from "react-router-dom";
import { useState } from "react";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-10 lg:px-20 pt-3 sm:pt-4 xl:pt-6 w-full max-w-full">
      <div className="relative bg-[#343434] rounded-2xl py-3 px-4 sm:px-5 xl:py-4 xl:px-6 flex items-center justify-between z-20 max-w-full overflow-hidden">
        {/* logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-center text-white flex flex-col"
            onClick={closeMenu}
          >
            <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide font-lobster whitespace-nowrap">
              K-Tora <br/>
              <span className="text-xs sm:text-sm xl:text-xl font-medium tracking-widest opacity-90 ml-1 sm:ml-2 font-poppins">
                KITCHEN
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-x-3 xl:gap-x-4">
          <Link
            to="/"
            className="text-white text-base xl:text-lg font-medium hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <a
            href="/about"
            className="text-white text-base xl:text-lg font-medium hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            About
          </a>
          <a
            href="/menu"
            className="text-white text-base xl:text-lg font-medium hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            Menu
          </a>
          <Link
            to="/survey"
            className="text-white text-base xl:text-lg font-medium hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            Feedback
          </Link>
          <a
            href="/contact"
            className="text-white text-base xl:text-lg font-medium hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex-shrink-0">
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>{" "}
      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 mt-2 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="bg-[#343434] rounded-2xl py-4 px-4 shadow-lg border border-white/10">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            >
              Home
            </Link>
            <a
              href="/about"
              onClick={closeMenu}
              className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            >
              About
            </a>
            <a
              href="/menu"
              onClick={closeMenu}
              className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            >
              Menu
            </a>
            <Link
              to="/survey"
              onClick={closeMenu}
              className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            >
              Feedback
            </Link>
            <a
              href="/contact"
              onClick={closeMenu}
              className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default TopBar;
