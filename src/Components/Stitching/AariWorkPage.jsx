import React, { useEffect, useState } from "react";
import SareeIllustration from "../../assets/HomeImg/Aari.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/StitchingService/blouse.jpg";
import Img2 from "../../assets/HomeImg/Img-2.jpg";
import Img3 from "../../assets/HomeImg/Img-3.jpg";
import Img4 from "../../assets/HomeImg/Img-4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AariMeasurement from "./Measurements/AariMeasurement";

const blouseTypes = [
  "Aari Work High-Neck Blouses",
  "Backless with Aari Border Work",
  "Puff Sleeves with Floral Embroidery",
  "Princess Cut & Sweetheart Necklines",
  "Sheer Net Blouses with Threadwork",
  "Halter Neck with Mirror Work",
  "Traditional Elbow-Sleeve Blouses",
  "Contemporary Collared or Shirt-Style",
];

const firstRow = ["CALL","PICK UP","TAILORING IN PROGRESS","DELIVERY OR PICKUP"];

const secondRow = ["FIX APPOINTMENT", "DESIGN CHOOSE", "PRODUCTION"];

const designImages = [
  { image: Img1, title: "AARI BLOUSE" },
  { image: Img2, title: "PAVADAI SATTAI" },
  { image: Img3, title: "UMBERALLA FROCK" },
  { image: Img4, title: "LEHENGA" },
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

const AariWorkPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    // Scroll to top when this component mounts
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="font-family overflow-hidden">
      <div className="bg-white py-10 px-6 md:px-20 lg:px-32 relative">
        {/* Right-side illustration */}
        <img
          src={SareeIllustration}
          alt="Saree Illustration"
          className="hidden md:block absolute top-10 right-10 w-40 lg:w-52"
        />

        {/* Main Content */}
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Aari Work Blouses – Elegance in Every Stitch
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Timeless Style for the Saree Lovers
            </h2>
            <p className="text-gray-700 leading-8">
              At Sree Shanmuga Textiles, we understand that sarees are not just
              outfits — they are emotions. And what completes a perfect saree
              look? A beautifully crafted designer blouse stitched just for you.
              Whether it's a wedding, a festive gathering, or a casual function,
              our custom Aari work blouse stitching brings tradition and trend
              together in harmony.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Because Saree Love Never Fades
            </h2>
            <p className="text-gray-700 leading-8">
              At Sree Shanmuga Textiles, we understand that sarees are not just
              outfits — they are emotions. And what completes a perfect saree
              look? A beautifully crafted designer blouse stitched just for you.
              Whether it's a wedding, a festive gathering, or a casual function,
              our custom Aari work blouse stitching brings tradition and trend
              together in harmony.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Made Just for You</h2>
          <p className="text-gray-700 leading-8">
            Our team of skilled fashion designers and Aari artisans works
            closely with you — from choosing the right fabric to deciding the
            neckline, sleeve pattern, and embroidery style. Whether you have a
            design in mind or want expert guidance, we make sure your blouse is
            tailored to perfection.
          </p>
        </div>
        <div className="mt-5">
          {/* Blouse Types */}
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Types of Blouse Designs We Stitch:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-10">
            {blouseTypes.map((type, items) => (
              <li key={items} className="text-gray-800 list-disc ml-4">
                {type}
              </li>
            ))}
          </div>

          {/* Form Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Submit Your Measurements
          </h2>

          <p className="text-gray-700 mb-6 leading-8">
            Make your shopping experience seamless by submitting your
            measurements online. Whether it’s a Mom & Daughter combo, lehenga,
            blouse, or chudi set — we’ll tailor each outfit to your perfect fit.
            Our expert team ensures precision, comfort, and elegance in every
            stitch. Fill out the form below or visit Sree Shanmuga Textiles
            in-store for personalized assistance.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mt-4">
        <a href="#" className="text-blue-700 font-semibold">
          Online Form Submission
        </a>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition"
        >
          Click Here
        </button>
      </div>

      <AariMeasurement isOpen={showForm} onClose={() => setShowForm(false)} />
        </div>
      </div>

      <div>
        {/* Carousel */}
        <Slider {...settings}>
          {designImages.map((item, index) => (
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

        {/* Stitching Process Title */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-2">Stitching Process</h2>
          <p className="text-gray-600">
            We help you choose the right design and fabric that matches your
            occasion and style.
          </p>
        </div>

        {/* Process Buttons */}
        <div className="space-y-10 mt-10">
      {/* First Row */}
      <div className="relative flex items-center justify-center gap-6">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-green-700 z-0"></div>

        {firstRow.map((step, idx) => (
          <div
            key={idx}
            className="relative z-10 bg-white px-4 py-2 border border-green-700 rounded-md text-sm font-semibold text-green-800 whitespace-nowrap"
          >
            {step}
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="relative flex items-center justify-center gap-6">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-green-700 z-0"></div>

        {secondRow.map((step, idx) => (
          <div
            key={idx}
            className="relative z-10 bg-white px-4 py-2 border border-green-700 rounded-md text-sm font-semibold text-green-800 whitespace-nowrap"
          >
            {step}
          </div>
        ))}
      </div>
    </div>

        {/* Stitching Time Info */}
        <div className="bg-white py-10 px-6 md:px-20 lg:px-32 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-xl">Regular Stitching</h3>
            <p className="text-gray-600 text-sm">
              Get your perfectly stitched outfits within 3 to 5 working days.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-xl">
              Aari Embroidery Orders
            </h3>
            <p className="text-gray-600 text-sm">
              Intricate designs take a little longer – 7 to 10 working days.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AariWorkPage;
