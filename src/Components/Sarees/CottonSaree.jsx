import React, { useState } from 'react';
import { Link } from "react-router-dom";

import FilterSidebar from '../Women/FilterSidebar';
import PreviouslyExplored from '../Women/PreviouslyExplored';
import Img1127 from "/src/assets/Sarees/CottonSaree/IMG_1127.jpg"
import Img1130 from "/src/assets/Sarees/CottonSaree/IMG_1130.jpg"
import Img1135 from "/src/assets/Sarees/CottonSaree/IMG_1135.jpg"
import Img1138 from "/src/assets/Sarees/CottonSaree/IMG_1138.jpg"
import Img1141 from "/src/assets/Sarees/CottonSaree/IMG_1141.jpg"
import Img1143 from "/src/assets/Sarees/CottonSaree/IMG_1143.jpg"
import Img1146 from "/src/assets/Sarees/CottonSaree/IMG_1146.jpg"
import Img1148 from "/src/assets/Sarees/CottonSaree/IMG_1148.jpg"
import Img1152 from "/src/assets/Sarees/CottonSaree/IMG_1152.jpg"
import Img1155 from "/src/assets/Sarees/CottonSaree/IMG_1155.jpg"


const CottonSaree = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const allProducts = [
    { id: 11, title: 'Soft Cotton Saree', image: Img1127, price: 899, size: 'M', color: 'Red', sleeve: 'Half Sleeve', fabric: 'Cotton', discount: 10 },
    { id: 12, title: 'Elegant Cotton Saree', image: Img1130, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 13, title: 'Sky Blue Cotton Saree', image: Img1135, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 14, title: 'Classic Grey Cotton Saree', image: Img1138, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 15, title: 'Peach Soft Cotton Saree', image: Img1141, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 16, title: 'Green Cotton Saree with Border', image: Img1143, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 17, title: 'Purple Casual Cotton Saree"', image: Img1146, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 18, title: 'Black Border Cotton Saree', image: Img1148, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 19, title: 'Dual Tone Cotton Saree', image: Img1152, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
    { id: 20, title: 'Handloom Soft Cotton Saree', image: Img1155, price: 999, size: 'L', color: 'Blue', sleeve: 'Full Sleeve', fabric: 'Cotton', discount: 15 },
  ];

  const filtered = allProducts.filter((p) => {
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
        <h4 className="text-green-700 font-medium">Cotton Saree</h4>
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

export default CottonSaree;
