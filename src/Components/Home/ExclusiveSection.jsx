import React from "react";
import Img1 from "../../assets/HomeImg/Img-1.jpg";
import Img2 from "../../assets/HomeImg/Img-2.jpg";
import Img1250 from "/src/assets/Sarees/SareeCombo/IMG_1250.jpg"
import BKid1197 from '/src/assets/Boy-Kid/IMG_1197.jpg'
import Nwear0869 from '../../assets/Night-Wear/IMG_0869.jpg'

const exclusiveData = [
  {
    image: Img1250 ,
    title: "Saree Combo Offer",
  },
  {
    image: BKid1197,
    title: "FAMILY FUNCTION",
  },
  {
    image: Nwear0869,
    title: "NIGHT WEAR",
  },
];

const ExclusiveSection = () => {
  return (
    <div className="w-full px-4 py-10 font-family">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-center mb-6 flex items-center justify-center gap-4">
        <span className="flex-1 h-px bg-gray-400 max-w-[100px]"></span>
        <span>EXCLUSIVE BY SHANMUGA</span>
        <span className="flex-1 h-px bg-gray-400 max-w-[100px]"></span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {exclusiveData.map((item, index) => (
          <div key={index} className="text-center">
  <div className="rounded-[30px] overflow-hidden w-[250px] h-[300px] mx-auto">
    <img
      src={item.image}
      alt={item.title}
      className="w-[426px] h-full object-cover"
    />
  </div>
  <h3 className="mt-4 text-md font-semibold">{item.title}</h3>
</div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveSection;
