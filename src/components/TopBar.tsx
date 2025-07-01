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
    <header className="h-auto fixed top-0 left-4 right-4 sm:left-10 lg:left-20 sm:right-10 lg:right-20 z-50 pt-4 xl:pt-6 xxl:pt-10">
      <div className="relative bg-[#343434] rounded-[19px] py-2 px-4 sm:px-5 xl:py-4 xl:px-5 flex items-center gap-x-2 xsm:gap-x-3 md:gap-x-5 z-20 xl:overflow-hidden">
        {/* logo */}
        <div className="">
          <Link
            to="/"
            className="text-center text-white flex flex-col"
            onClick={closeMenu}
          >
            <span className="text-xl sm:text-2xl xl:text-3xl font-bold tracking-wide font-lobster">
              K-TORA
              <span className="text-xs sm:text-xs xl:text-xl font-medium tracking-widest opacity-90 -mt-1 ml-2 font-archivo">
                KITCHEN
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow flex-wrap justify-end gap-x-4">
          <div className="flex-none relative xl:mr-2">
            <Link
              to="/"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Home
            </Link>
          </div>
          <div className="flex-none relative xl:mr-2">
            <a
              href="/about"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              About
            </a>
          </div>
          <div className="flex-none relative xl:mr-2">
            <a
              href="/menu"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Menu
            </a>
          </div>
          <div className="flex-none relative xl:mr-2">
            <Link
              to="/survey"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Feedback
            </Link>
          </div>
          <div className="flex-none relative xl:mr-2">
            <a
              href="/contact"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="group cursor-pointer w-8 h-6 relative p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-0.5 left-0 top-1 absolute bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-3" : "group-hover:-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 left-0 top-3 absolute bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "group-hover:opacity-70"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 left-0 top-5 absolute bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-3" : "group-hover:translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 sm:left-10 sm:right-10 mt-2 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="bg-[#343434] rounded-[19px] py-4 px-4 shadow-lg border border-white/10">
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
