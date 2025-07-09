import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KFrock0892 from '/src/assets/Kid-frock/IMG_0892.jpg'
import BKid1194 from '/src/assets/Boy-Kid/IMG_1194.jpg'
import KTop1179 from '/src/assets/Kid-CottonTop/IMG_1179.jpg'
import KLiggin0885 from '/src/assets/Kid-liggines/IMG_0885.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const kidsWear = [
  { image: KFrock0892, title: "KID FROCK" },
  { image: BKid1194, title: "BOY KID" },
  { image: KTop1179, title: "KID COTTON TOP" },
  { image: KLiggin0885, title: "KID LIGGINES" },
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-green-800"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-green-800"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const CharmingKids = () => {

    const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-10 font-family">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-center mb-10 flex items-center justify-center gap-4">
        <span className="flex-1 h-px bg-gray-400 max-w-[100px]"></span>
        <span>CHARMING KIDS WEAR</span>
        <span className="flex-1 h-px bg-gray-400 max-w-[100px]"></span>
      </h2>

      {/* Carousel */}
      <Slider {...settings}>
        {kidsWear.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl overflow-hidden text-center mt-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-[278px] h-[368px] object-cover rounded-xl mx-auto"
              />
              <h3 className="text-md font-semibold mt-3">{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CharmingKids