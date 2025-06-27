import React from "react";

const Menu: React.FC = () => {
  return (
    <section
      className="max-w-screen flex flex-row my-24 mx-24 items-center"
    >

        <div>
          <div className="pointer-events-none">
            <h2 className="text-7xl font-extrabold font-title uppercase leading-14 mb-0 xl:mb-4 text-[#343434]">
             Katsu! Katsu! Katsu! 
            </h2>
          </div>
      </div>

      <div>
          <div className="pointer-events-none w-1/2 mx-auto py-4">
            <img src="https://content.phocafe.co.uk/wp-content/uploads/2024/10/3-1.jpeg" className="rounded-full"/>
          </div>
      </div>

      <div>
          <div className="pointer-events-none">
            <h2 className="text-7xl font-extrabold font-title uppercase leading-14 mb-0 xl:mb-4 text-[#343434]">
              Curry! Curry! Curry!
            </h2>
          </div>
      </div>

              </section>
  );
};

export default Menu;
