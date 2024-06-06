"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CustomSliderProps {
  images: StaticImageData[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          {"<"}
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          {">"}
        </button>
      </div>
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-64">
            <Image
              src={image}
              alt={`Slide ${index}`}
              className="object-contain"
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
