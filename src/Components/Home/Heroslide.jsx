import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/HomeImg/Banner.jpg";
import slide2 from "../../assets/HomeImg/Banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Bittu0808 from "../../assets/Bittukurti/IMG_0808.jpg"
import Img1272 from "/src/assets/Sarees/MysoreSilk/IMG_1272.jpg";
import Kid0894 from "/src/assets/Kid-frock/IMG_0894.jpg";

const slides = [
  {
    image: Bittu0808,
    heading: "Celebrate Every Moment in Style",
    subtext: "Confidence begins with comfort in what you wear.",
  },
  {
    image: Img1272,
    heading: "Tradition Meets Elegance",
    subtext: "Wear your story with pride and poise.",
  },
  {
    image: Kid0894,
    heading: "Timeless Beauty in Every Thread",
    subtext: "Sarees that speak your style.",
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 left-5 top-1/2 transform -translate-y-1/2 cursor-pointer 
    text-white text-3xl"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 right-5 top-1/2 transform -translate-y-1/2 cursor-pointer 
    text-white text-3xl"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const Heroslide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Image with object-top */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[100vh] md:h-screen object-cover object-center"
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center 
            px-4">
              <h2 className="text-white text-2xl md:text-4xl font-bold">
                {slide.heading}
              </h2>
              <p className="text-white text-2xl md:text-4xl font-bold mt-2">{slide.subtext}</p>
              <button className="bg-green-600 mt-4 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                Shop Now
              </button>
            </div>

            {/* Button on the bottom right */}
            <div className="absolute right-10 bottom-10">
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Heroslide;
