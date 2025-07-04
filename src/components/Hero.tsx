import katsu_curry_plate from "../assets/katsu_curry_plate.jpg";
const Hero = () => {
  return (
    <div className="h-[120vh] sm:h-[140vh] w-full relative overflow-hidden bg-red-500">
      {/* Image Section - Takes up first screen height */}
      <div className="h-screen w-full relative overflow-hidden">
        <div className="h-full md:absolute top-3 left-3 right-3 sm:top-6 sm:left-10 sm:right-10">
          <span className="h-screen w-full bg-cover">
            <img
              alt="A table filled with Vietnamese dishes, including a bowl of pho with beef and red chilies, fresh spring rolls, greens, and a plate of stir-fried vegetables. A cocktail and chopsticks are visible. The setting suggests a lively dining atmosphere."
              loading="eager"
              className="w-full h-full md:rounded-[15px] sm:rounded-b-[29px] object-cover"
              width="1495"
              height="959"
              decoding="async"
              src={katsu_curry_plate}
            />
          </span>
        </div>

        {/* Text Overlay */}
        <div className="w-full md:absolute bottom-22 md:bottom-6 sm:bottom-10 left-0 pb-4 sm:pb-8 xl:pb-24">
          <div className="flex items-end">
            <div className="ml-4 sm:ml-12 mb-4 sm:mb-8 flex flex-col text-center">
              <h1 className="mb-2 sm:mb-5 text-white text-[32px] sm:text-[50px] md:text-[70px] xl:text-[120px] font-extrabold uppercase leading-[28px] sm:leading-[35px] xl:leading-[140px] tracking-tight sm:tracking-tighter xl:tracking-widest font-archivo">
                Japanese
              </h1>
              <h2 className="text-white font-title text-[20px] sm:text-[30px] md:text-[40px] xl:text-[100px] ml-1 sm:ml-2 xl:ml-5 uppercase leading-[18px] sm:leading-[15px] xl:leading-[10px] tracking-wide sm:tracking-wider xl:tracking-tighter font-archivo">
                Katsu Curry
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
