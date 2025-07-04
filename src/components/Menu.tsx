import React from "react";
import katsu_curry_plate from "../assets/katsu_curry_plate.jpg";

const Menu: React.FC = () => {
  return (
    <section className="w-full max-w-full flex flex-col sm:flex-row my-12 sm:my-24 mx-auto px-4 sm:px-8 md:px-12 lg:px-24 items-center overflow-hidden">
      <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
        <div className="pointer-events-none">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold font-title uppercase leading-tight mb-0 xl:mb-4 text-[#343434]">
            Katsu! Katsu! Katsu!
          </h2>
        </div>
      </div>

      <div className="flex-shrink-0 mb-6 sm:mb-0">
        <div className="pointer-events-none w-32 sm:w-48 lg:w-64 mx-auto py-4">
          <img src={katsu_curry_plate} className="rounded-full w-full h-auto" />
        </div>
      </div>

      <div className="flex-1 text-center sm:text-right">
        <div className="pointer-events-none">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold font-title uppercase leading-tight mb-0 xl:mb-4 text-[#343434]">
            Curry! Curry! Curry!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Menu;
