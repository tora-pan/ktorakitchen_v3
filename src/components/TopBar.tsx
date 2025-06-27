import white_logo from "../assets/white_logo.png"
const TopBar = () => {
  return (
    <header className="h-auto fixed top-0 left-20 right-20 z-50 pt-4 xl:pt-6 xxl:pt-10 ">
      <div className="relative bg-[#343434] rounded-[19px] py-2 px-5 xl:py-4 xl:px-5 flex items-center gap-x-2 xsm:gap-x-3 md:gap-x-5 z-20 xl:overflow-hidden">
        {/* logo */}
        <div className="">
          <a href="/" className="font-lobster text-center text-white flex flex-col">
            {/* <span className="text-2xl xl:text-3xl font-bold tracking-wide">K-TORA</span>
            <span className="text-xs xl:text-sm font-medium tracking-widest opacity-90 -mt-1">KITCHEN</span> */}
            <img
              src={white_logo}
              alt="K-Tora Kitchen Logo"
              className="w-14 h-12"
            />
          </a>
        </div>
        <div className="flex flex-grow flex-wrap justify-end gap-x-4">
          <div className="flex-none relative xl:mr-2">
            <a
              href="/"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Home
            </a>
          </div>
          <div className="flex-none relative xl:mr-2"><a
              href="/about"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              About
            </a></div>
          <div className="flex-none relative xl:mr-2">
          <a
              href="/menu"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Menu
            </a>
          </div>
          <div className="flex-none relative xl:mr-2">
          <a
              href="/contact"
              className="group inline-block relative overflow-hidden font-copy text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px]"
            >
              Contact
            </a>
          </div>
          <div className="flex-none w-[31px] md:w-[56px] text-center flex items-center">
            <button className="group cursor-pointer w-[31px] md:w-[56px] h-[13px] md:h-[18px] xl:h-[20px] relative">
              <span className="w-full h-1 md:h-[3.87px] xl:h-[5.87px] left-0 top-0 absolute bg-white rounded-[29px] transition-transform duration-250 group-hover:-rotate-6 group-hover:translate-x-[-1px]"></span>
              <span className="w-full h-1 md:h-[3.87px] xl:h-[5.87px] left-0 top-[9px] md:top-[11.74px] absolute bg-white rounded-[29px] transition-transform duration-250 group-hover:rotate-12 group-hover:translate-y-1.5"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
