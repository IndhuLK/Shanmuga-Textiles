import React, { useState } from 'react';
import { Link } from "react-router-dom";

import FilterSidebar from '../Women/FilterSidebar';
import PreviouslyExplored from '../Women/PreviouslyExplored';
import Img1255 from "/src/assets/Sarees/MysoreSilk/IMG_1255.jpg";
import Img1259 from "/src/assets/Sarees/MysoreSilk/IMG_1259.jpg";
import Img1262 from "/src/assets/Sarees/MysoreSilk/IMG_1262.jpg";
import Img1265 from "/src/assets/Sarees/MysoreSilk/IMG_1265.jpg";
import Img1268 from "/src/assets/Sarees/MysoreSilk/IMG_1268.jpg";
import Img1271 from "/src/assets/Sarees/MysoreSilk/IMG_1271.jpg";
import Img1274 from "/src/assets/Sarees/MysoreSilk/IMG_1274.jpg";
import Img1277 from "/src/assets/Sarees/MysoreSilk/IMG_1277.jpg";
import Img1280 from "/src/assets/Sarees/MysoreSilk/IMG_1280.jpg";


const MysoreCotton = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const mysoreSilk = [
  { id: 31, title: "Floral Printed Cotton Saree", image: Img1255, price: 899, color: "Red", sleeve: "Half Sleeve", fabric: "Cotton", discount: 10 },
  { id: 32, title: "Block Print Cotton Saree", image: Img1259, price: 999, color: "Maroon", sleeve: "Half Sleeve", fabric: "Cotton", discount: 10 },
  { id: 33, title: "Ikkat Style Cotton Saree", image: Img1262, price: 999, color: "Blue", sleeve: "Half Sleeve", fabric: "Silk", discount: 10 },
  { id: 34, title: "Pastel Cotton Saree", image: Img1265, price: 899, color: "Brown", sleeve: "Half Sleeve", fabric: "Cotton", discount: 8 },
  { id: 35, title: "Daily Wear Cotton Saree", image: Img1268, price: 970, color: "Sky Blue", sleeve: "Sleeveless", fabric: "Silk", discount: 20 },
  { id: 36, title: "Geometric Print Cotton Saree", image: Img1271, price: 999, color: "Orange", sleeve: "Full Sleeve", fabric: "Cotton", discount: 15 },
  { id: 37, title: "Elegant Border Cotton Saree", image: Img1274, price: 940, color: "Blue", sleeve: "Half Sleeve", fabric: "Silk", discount: 10 },
  { id: 38, title: "Soft Mul Cotton Saree", image: Img1277, price: 899, color: "Pink", sleeve: "Half Sleeve", fabric: "Cotton", discount: 5 },
  { id: 39, title: "Temple Border Cotton Saree", image: Img1280, price: 920, color: "Maroon", sleeve: "Full Sleeve", fabric: "Silk", discount: 12 },

];

  const filtered = mysoreSilk.filter((p) => {
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
        <h2 className="text-3xl font-bold mb-1">Sarees Collection</h2>
        <h4 className="text-green-700 font-medium">Mysore Silk Sarees</h4>
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
                <h3 className="font-sm md:text-md text-sm mt-4">{product.title}</h3>
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

export default MysoreCotton;
