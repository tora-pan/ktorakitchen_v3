import { useState, useEffect } from "react";

const KeiTrucks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - you can replace these with actual Kei truck images
  const truckImages = [
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Honda Acty Mini Truck",
      title: "Honda Acty",
      year: "1995",
    },
    {
      src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Suzuki Carry Mini Truck",
      title: "Suzuki Carry",
      year: "1998",
    },
    {
      src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Daihatsu Hijet Mini Truck",
      title: "Daihatsu Hijet",
      year: "1999",
    },
    {
      src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Mitsubishi Minicab",
      title: "Mitsubishi Minicab",
      year: "1997",
    },
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % truckImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [truckImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % truckImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + truckImages.length) % truckImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#1c1818] py-8 sm:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-archivo">
            Japanese Kei Trucks
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Authentic Japanese mini trucks - compact, reliable, and perfect for
            any job
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative mb-12 sm:mb-16">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-800">
            {/* Images */}
            {truckImages.map((truck, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={truck.src}
                  alt={truck.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-archivo">
                    {truck.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    {truck.year}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {truckImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-red-500" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
          {/* About Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-archivo">
              About Our Partner
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-base sm:text-lg leading-relaxed">
                We're proud to partner with one of California's premier Japanese
                Kei truck dealers. With over 15 years of experience importing
                and servicing these incredible vehicles, they specialize in
                bringing authentic Japanese mini trucks to the American market.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Every truck is carefully inspected, maintained, and comes with
                detailed service records. From farming and landscaping to urban
                delivery, these versatile vehicles are perfect for any
                application.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-archivo">
              Why Choose Kei Trucks?
            </h2>
            <div className="space-y-3">
              {[
                "Exceptional fuel efficiency (40+ MPG)",
                "Compact size fits anywhere",
                "Right-hand drive authenticity",
                "Reliable Japanese engineering",
                "Perfect for farms, businesses, and hobbyists",
                "Low maintenance costs",
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-archivo">
            Interested in a Kei Truck?
          </h2>
          <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
            Contact our trusted partner for more information about available
            inventory, pricing, and delivery options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call: (123) 456-7890
            </a>
            <a
              href="mailto:info@keitrucks.com"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email: info@keitrucks.com
            </a>
          </div>
          <p className="text-sm text-red-100 mt-4">
            Licensed dealer • Financing available • Nationwide delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeiTrucks;
