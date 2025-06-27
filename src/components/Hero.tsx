import curry_bg from "../assets/curry_bg.webp";
const Hero = () => {
  return (
    <div className="h-[140vh] w-full relative overflow-hidden bg-red-500">
      {/* Image Section - Takes up first screen height */}
      <div className="h-screen w-full relative overflow-hidden">
        <div className="h-full absolute top-6 left-10 right-10">
          <span className="h-screen w-full bg-cover"> 
            <img alt="A table filled with Vietnamese dishes, including a bowl of pho with beef and red chilies, fresh spring rolls, greens, and a plate of stir-fried vegetables. A cocktail and chopsticks are visible. The setting suggests a lively dining atmosphere." loading="eager" className="w-full h-full rounded-[29px] object-cover" width="1495" height="959" decoding="async" src={curry_bg}/> 
          </span>
        </div>
        {/* Text Overlay */}
        <div className="w-full absolute bottom-10 left-0 pb-8 xl:pb-24">
          <div className="flex items-end">
            <div className="ml-12 mb-8 flex flex-col text-center">
              <h1 className="mb-5 text-white text-[70px] xl:text-[120px] font-extrabold uppercase leading-[35px] xl:leading-[140px] tracking-tighter xl:tracking-widest font-archivo">Japanese</h1>
              <h2 className="text-white font-title text-[40px] xl:text-[100px] ml-2 xl:ml-5 uppercase leading-[15px] xl:leading-[10px] tracking-wider xl:tracking-tighter font-archivo">Katsu Curry</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section - Takes up the additional 0.5 screen height */}
      <div className="h-[30vh] w-full flex items-center justify-center px-10">
        <div className="flex gap-8 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex flex-col">
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white/90 mb-4 font-archivo">Our Menu</h3>
              <p className="text-white/70 leading-relaxed flex-1">
                Discover the authentic flavors of Japan with our carefully crafted dishes, 
                made with traditional techniques and the finest ingredients.
              </p>
              <button className="group inline-block relative overflow-hidden font-copy bg-[#343434] text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px] rounded-xl px-4 mt-4 w-1/3 mx-auto">View Menu</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex flex-col">
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white/90 mb-4 font-archivo">Our Story</h3>
              <p className="text-white/70 leading-relaxed flex-1">
                Four friends came together to share their love for good Japanese food and spending time together.
              </p>
              <button className="group relative overflow-hidden font-copy bg-[#343434] text-white text-base text-[22px] md:text-xl font-medium leading-[30px] md:leading-[40px] rounded-xl px-4 mt-4 w-1/3 mx-auto">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero