import React, { useEffect, useState } from "react";
import SareeIllustration from "../../assets/StitchingService/Stitch.png";
import Img1 from "../../assets/StitchingService/blouse.jpg";
import Img2 from "../../assets/HomeImg/Img-2.jpg";
import Img3 from "../../assets/HomeImg/Img-3.jpg";
import Img4 from "../../assets/HomeImg/Img-4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChudiMeasurment from "./Measurements/ChudiMeasurment";

const lehengastyle = [
  "Straight Cut Chudi",
  "A-Line Chudi",
  "Anarkali Style Chudi",
  "Pant with Long Top Chudi",
  " Umbrella Cut Chudi",
  "Chudi with Front Slit",
  "Short Top with Patiala Bottom",
  "Chudi with Jacket Overlay",
];

const Lehengadesign = [
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

const firstRow = [
  "CALL",
  "PICK UP",
  "TAILORING IN PROGRESS",
  "DELIVERY OR PICKUP",
];

const secondRow = ["FIX APPOINTMENT", "DESIGN CHOOSE", "PRODUCTION"];

const ChudiStitching = () => {
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
      <div className="bg-white py-10 px-6 md:px-20 lg:px-20 relative">
        {/* Right-side illustration */}
        <img
          src={SareeIllustration}
          alt="Saree Illustration"
          className="hidden md:block absolute top-10 right-5 w-40 lg:w-82 lg:h-100"
        />

        {/* Main Content */}
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Chudi Stitching at Sree Shanmuga Textiles
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Traditional elegance, tailored just for you.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chudi sets remain one of the most loved and timeless outfits for
              women across generations. At Sree Shanmuga Textiles, we specialize
              in stitching custom-made chudi suits that blend tradition,
              comfort, and modern design. With expert tailors and updated
              trends, we create outfits that reflect your style — stitched to
              fit you perfectly.
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold mb-2">
              Why Choose Our Chudi Stitching?
            </h1>
            <p className="text-gray-700 leading-8">
              Unlike off-the-rack outfits, our stitched chudi suits are
              personalized to match your body shape, style preferences, and
              comfort. Whether you're dressing up for a family function or just
              want an elegant everyday outfit, our team ensures the perfect cut,
              beautiful finishing, and durable quality — every single time. We
              use premium materials, offer free stitching with measurements, and
              support full customization — including neck patterns, sleeve
              styles, embroidery options, and more
            </p>
          </div>
        </div>

        {/* Lehenga Style*/}
        <div className="mt-5">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Types of Chudi Designs We Stitch
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-10">
            {lehengastyle.map((type, items) => (
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

          <ChudiMeasurment
            isOpen={showForm}
            onClose={() => setShowForm(false)}
          />
        </div>
      </div>

      <div>
        {/* Carousel */}
        <Slider {...settings}>
          {Lehengadesign.map((item, index) => (
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
            <div className="absolute top-1/2 left-100 right-100 h-[1px] bg-green-700 z-0"></div>

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
            <div className="absolute top-1/2 left-110 right-110 h-[1px] bg-green-700 z-0"></div>

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
              <h3 className="font-bold text-gray-900 mb-3 text-xl">
                Regular Stitching
              </h3>
              <p className="text-gray-600 text-sm">
                Get your perfectly stitched outfits within 3 to 5 working days.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">
                Lehenga Stitching Orders
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

export default ChudiStitching;
