import { useState, useEffect } from 'react';
import slide1 from "../../assets/summit2025/10fcbcd9-4b78-4e25-965d-43bb0c535400.jpg"
import slide2 from "../../assets/summit2025/3e470f65-4f98-44f9-bf7e-a6636370f867.jpg"
import slide3 from "../../assets/summit2025/452299b3-ef39-48a0-90fb-438048083f30.jpg"
import slide4 from "../../assets/summit2025/72f90177-dda3-479f-b6a7-9703790937bb.jpg"
import slide5 from "../../assets/summit2025/bfa3e3c4-c4ec-4df1-8c06-4c2746e84340.jpg"
import slide6 from "../../assets/summit2025/IMG_4473.jpg"
import slide7 from "../../assets/summit2025/IMG_4558.jpg"
import slide8 from "../../assets/summit2025/IMG_4615.jpg"
import slide9 from "../../assets/summit2025/IMG_5017.jpg"
import slide10 from "../../assets/summit2025/IMG_5099.jpg"
import slide11 from "../../assets/summit2025/IMG_5113.jpg"


const slides = [
  { image: slide1, number: '1 / 11' },
  { image: slide2,  number: '2 / 11' },
  { image: slide3,  number: '3 / 11' },
  { image: slide4,  number: '4 / 11' },
  { image: slide5,  number: '5 / 11' },
  { image: slide6,  number: '6 / 11' },
  { image: slide7,  number: '7 / 11' },
  { image: slide8,  number: '8 / 11' },
  { image: slide9,  number: '9 / 11' },
  { image: slide10,  number: '10 / 11' },
  { image: slide11,  number: '11 / 11' },

];

const Gal2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 font-sans">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-4 text-center sm:text-left">
        Unveiling Submit 2025
      </h2>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* Same aspect ratio for all slides */}
        <div className="relative w-full aspect-5/4 sm:aspect-4/3 md:aspect-3/2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === slideIndex ? 'block' : 'hidden'
              } absolute inset-0 w-full h-full animate-fade overflow-hidden`}
            >
              <div className="absolute top-2 left-2 z-10 text-white text-xs sm:text-sm bg-black/40 px-2 py-1 rounded">
                {slide.number}
              </div>

              <img
                src={slide.image}
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 20%' }}
              />

              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xs sm:text-sm md:text-base bg-linear-to-t from-black/60 to-transparent px-3 py-3">
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-colors duration-300 ${
              index === slideIndex ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gal2;