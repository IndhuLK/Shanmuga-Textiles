import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame1 from "../../assets/HomeImg/Free.png";
import Frame2 from "../../assets/HomeImg/Machine.png";
import Frame3 from "../../assets/HomeImg/Card.png";
import Frame4 from "../../assets/HomeImg/Remote.png";
import Img1 from "../../assets/HomeImg/Img-1.jpg";
import Img2 from "../../assets/HomeImg/Img-2.jpg";
import Img3 from "../../assets/HomeImg/Img-3.jpg";
import Img4 from "../../assets/HomeImg/Img-4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Bittu0837 from "../../assets/Bittukurti/IMG_0837.jpg";
import Kid0893 from "/src/assets/Kid-frock/IMG_0893.jpg";
import KR0803 from "../../assets/KurtiReliance/IMG_0803.jpg";
import Img0734 from "../../assets/Blouse-Readymade/IMG_0734.jpg";
import Img1269 from "/src/assets/Sarees/MysoreSilk/IMG_1269.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { delay } from "framer-motion";

const products = [
  {
    image: Bittu0837,
    title: "Bittu Kurti",
    price: "₹ 4,000.00",
  },
  {
    image: Kid0893,
    title: "Kids Frock",
    price: "₹ 2,000.00",
  },
  {
    image: KR0803,
    title: "Kurti - Reliance Brand",
    price: "₹ 1,500.00",
  },
  {
    image: Img0734,
    title: "ReadyMade - Blouse",
    price: "₹ 4,000.00",
  },
  {
    image: Img1269,
    title: "Mysore Silk",
    price: "₹ 4,000.00",
  },
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

const Bestsell = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
  const features = [
    {
      img: Frame1,
      title: "Free Shipping",
      desc: "Enjoy doorstep delivery at no extra cost — fast, safe, and hassle-free across all orders.",
      delay: "0",
    },
    {
      img: Frame2,
      title: "Stitching Available",
      desc: "Get your outfits stitched to perfection — free custom stitching with measurement form submission.",
      delay: "200",
    },
    {
      img: Frame3,
      title: "Easy Payment",
      desc: "Multiple payment options available — pay securely via UPI, cards, net banking, or cash on delivery.",
      delay: "400",
    },
    {
      img: Frame4,
      title: "Easy Return Policy",
      desc: "Not satisfied? Enjoy smooth returns and exchanges with our customer-friendly return process.",
      delay: "600",
    },
  ];

  return (
    <div className="font-family">
      {/* Services Section */}
      <section className="w-full  py-10 bg-white">
        <div className="font-family max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4">
          {features.map((feature, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={feature.delay}
              key={index}
              className="space-y-4 shadow-xl rounded-xl"
            >
              <div className="flex justify-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-20 w-20   text-green-700"
                />
              </div>
              <h3 className="text-md md:text-lg font-semibold mb-5">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-5">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Seller Slider */}
      <div className="w-full px-10 py-10">
        <h2 className="text-xl font-semibold text-center mb-6 flex items-center justify-center gap-4">
          <span className="flex-1 h-px bg-gray-400 max-w-[100px]"></span>
          <span>BEST OF SREE SHANMUGA</span>
          <span className="flex-1 h-px bg-gray-400 max-w-[100px]"></span>
        </h2>

        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-10">
              <div className="bg-white  transition-all duration-300  w-[278px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[278px] h-[367.86px] object-cover rounded-[25px]"
                />
                <div className="p-4">
                  <h3 className="font-medium md:text-md text-sm mt-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mt-3 md:text-md text-sm">
                    {product.price}
                  </p>
                  <button
                    variant="contained"
                    className="mt-4 px-4 w-full py-2 text-center border
                  md:text-md text-sm border-black rounded-full hover:bg-green-800 hover:text-white transition cursor-pointer"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Bestsell;
