const CardsSection = () => {
return (
  // Cards Section - Takes up the additional 0.5 screen height
  <div className="h-[20vh] sm:h-[30vh] w-full flex items-center justify-center px-3 sm:px-10 md:-mt-77">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-6xl">
      {/* Card 1 */}
      <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col min-h-[140px] sm:min-h-[180px]">
        <div className="text-center flex-1 flex flex-col">
          <h3 className="text-lg sm:text-2xl font-bold text-white/90 mb-2 sm:mb-4 font-archivo">
            Our Menu
          </h3>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-1 mb-3 sm:mb-0">
            Discover the authentic flavors of Japan with our carefully
            crafted dishes, made with traditional techniques and the
            finest ingredients.
          </p>
          <button className="group inline-block relative overflow-hidden font-copy bg-[#343434] text-white text-sm sm:text-base md:text-[22px] font-medium leading-[24px] sm:leading-[30px] md:leading-[40px] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-0 mt-2 sm:mt-4 w-full sm:w-1/3 mx-auto min-h-[40px] sm:min-h-[auto]">
            View Menu
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col min-h-[140px] sm:min-h-[180px]">
        <div className="text-center flex-1 flex flex-col">
          <h3 className="text-lg sm:text-2xl font-bold text-white/90 mb-2 sm:mb-4 font-archivo">
            Our Story
          </h3>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-1 mb-3 sm:mb-0">
            Four friends came together to share their love for good
            Japanese food and spending time together.
          </p>
          <button className="group relative overflow-hidden font-copy bg-[#343434] text-white text-sm sm:text-base md:text-[22px] font-medium leading-[24px] sm:leading-[30px] md:leading-[40px] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-0 mt-2 sm:mt-4 w-full sm:w-1/3 mx-auto min-h-[40px] sm:min-h-[auto]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
)
}

export default CardsSection