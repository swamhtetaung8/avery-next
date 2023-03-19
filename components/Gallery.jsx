import { slides } from "../slides";
import Image from "next/image";
import React, { useState } from "react";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";
const Gallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    if (slideIndex == slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (slideIndex == 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };
  return (
    <section className=" my-10 py-20 lg:px-40" name="gallery">
      <h1 className="main-heading text-center ">Gallery</h1>

      <div className=" md:w-[80%] lg:w-[60%] w-[90%] mx-auto relative my-20">
        <Image
          alt="photo"
          src={slides[slideIndex].image}
          className=" md:h-[600px] h-[300px]  w-[1000px] object-cover"
        />
        <button
          onClick={prevSlide}
          className="absolute md:top-[50%] top-[40%] left-5">
          <IoChevronBackCircleOutline
            size={50}
            className="text-white active:scale-105 hover:md:text-gray-900 transition-all duration-500"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute md:top-[50%] top-[40%] right-5">
          <IoChevronForwardCircleOutline
            size={50}
            className="text-white active:scale-105 hover:md:text-gray-900 transition-all duration-500"
          />
        </button>
      </div>
      <p className="text-center">
        Follow me on Instagram @
        <a
          href="https://www.instagram.com/nowevegotourownvibes/"
          target={"_blank"}
          className=" ml-1 border-b pb-1 border-black/30">
          nowevegotourownvibes
        </a>
      </p>
    </section>
  );
};

export default Gallery;
