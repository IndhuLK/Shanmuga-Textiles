import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img2 from "../../assets/HomeImg/Img-2.jpg";
import KFrock0897 from '/src/assets/Kid-frock/IMG_0897.jpg'
import KPiece0859 from '/src/assets/Kid-3Piece/IMG_0859.jpg'
import Westtop1283 from '/src/assets/Western-Top/IMG_1283.jpg'
import KidTop1182 from '/src/assets/Kid-CottonTop/IMG_1182.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const kidsWear = [
  { image: KFrock0897, title: "BIRTHDAY DRESS"},
  { image: Westtop1283, title: "WESTERN TOP" },
  { image: KPiece0859, title: "KID - 3 PIECE" },
  { image: KidTop1182, title: "KID COTTON TOP" },
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


const FrenshStyle = () => {

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
            <span className='uppercase'>Fresh Styles Just In</span>
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

export default FrenshStyle