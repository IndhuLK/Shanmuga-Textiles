import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import { Link } from "react-router-dom";

import PreviouslyExplored from './PreviouslyExplored';
import Maxi1 from "../../assets/Kurtiwith-Pant/IMG_1157.jpg"
import Maxi2 from "../../assets/Kurtiwith-Pant/IMG_1158.jpg"
import Maxi3 from "../../assets/Kurtiwith-Pant/IMG_1159.jpg"
import Maxi4 from "../../assets/Kurtiwith-Pant/IMG_1160.jpg"
import Maxi5 from "../../assets/Kurtiwith-Pant/IMG_1161.jpg"
import Maxi6 from "../../assets/Kurtiwith-Pant/IMG_1162.jpg"
import Maxi7 from "../../assets/Kurtiwith-Pant/IMG_1163.jpg"
import Maxi8 from "../../assets/Kurtiwith-Pant/IMG_1164.jpg"
import Maxi9 from "../../assets/Kurtiwith-Pant/IMG_1165.jpg"
import Maxi10 from "../../assets/Kurtiwith-Pant/IMG_1166.jpg"

const KurtiwithPants = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const kurtipant = [
    {
      id: 46 ,
      title: "Women's Maxi Wear",
      price: 1500,
      oldPrice: 2600,
      image: Maxi1,
      size: 'M',
      color: 'Red',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton',
      discount: 30,
    },
    {
      id: 47,
      title: "Elegant Blue Kurti",
      price: 1800,
      oldPrice: 2500,
      image: Maxi2,
      size: 'L',
      color: 'Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Silk',
      discount: 20,
    },
    {
      id: 48,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi3,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 49,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi4,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 50,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi5,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 51,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi6,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 52,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi7,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 53,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi8,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 54,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi9,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 55,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Maxi10,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
  ];

  const filtered = kurtipant.filter((p) => {
    const priceMatch = filters.price
      ? p.price >= filters.price.min && p.price <= filters.price.max
      : true;
    const sizeMatch = filters.size ? p.size === filters.size : true;
    const colorMatch = filters.color ? p.color === filters.color : true;
    const sleeveMatch = filters.sleeve ? p.sleeve === filters.sleeve : true;
    const fabricMatch = filters.fabric ? p.fabric === filters.fabric : true;
    const discountMatch = filters.discount
      ? parseInt(p.discount) >= parseInt(filters.discount)
      : true;

    return priceMatch && sizeMatch && colorMatch && sleeveMatch && fabricMatch && discountMatch;
  });

  return (
    <div className="px-6 py-6 font-family">
      {/* ✅ Title on top */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-1">Women's Wear</h2>
        <h4 className="text-green-700 font-medium">Kurti with Pants</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="col-span-1">
          <FilterSidebar
            onPriceChange={(val) => setFilters({ ...filters, price: val })}
            onSizeChange={(val) => setFilters({ ...filters, size: val })}
            onColorChange={(val) => setFilters({ ...filters, color: val })}
            onSleeveChange={(val) => setFilters({ ...filters, sleeve: val })}
            onFabricChange={(val) => setFilters({ ...filters, fabric: val })}
            onDiscountChange={(val) => setFilters({ ...filters, discount: val })}
          />
        </div>

        {/* Products */}
        <div className="col-span-1 md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id} className="p-2">
                <Link to={`/productdetails/${product.id}`}>
                <div className="bg-white w-[278px] mx-auto cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[278px] h-[350px] object-cover rounded-[25px]"
                />
                <h3 className="font-sm mt-4 md:text-md text-sm">{product.title}</h3>
                <div className='flex space-x-4'>
                  <div className="text-gray-900 mt-1 md:text-md text-sm">₹{product.price}</div>
                <div className=" text-gray-500 mt-1 line-through flex md:text-md text-sm">₹{product.oldPrice}</div>
                </div>
                <button className="mt-4 px-4 w-full py-2 border border-green-800 text-green-800 
                rounded-full hover:bg-green-800 hover:text-white transition md:text-md text-sm">
                  ADD TO CART
                </button>
                </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No products found.</p>
          )}
        </div>
      </div>
      <PreviouslyExplored/>
    </div>
  );
};

export default KurtiwithPants;
