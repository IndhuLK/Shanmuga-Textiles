import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import PreviouslyExplored from './PreviouslyExplored';
import Nty1211 from '/src/assets/Nighty/IMG_1211.jpg';
import Nty1212 from '/src/assets/Nighty/IMG_1212.jpg';
import Nty1213 from '/src/assets/Nighty/IMG_1213.jpg';
import Nty1214 from '/src/assets/Nighty/IMG_1214.jpg';
import Nty1215 from '/src/assets/Nighty/IMG_1215.jpg';
import Nty1216 from '/src/assets/Nighty/IMG_1216.jpg';
import Nty1217 from '/src/assets/Nighty/IMG_1217.jpg';
import Nty1218 from '/src/assets/Nighty/IMG_1218.jpg';
import Nty1219 from '/src/assets/Nighty/IMG_1219.jpg';
import Nty1220 from '/src/assets/Nighty/IMG_1220.jpg';


const Nighty = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const allProducts = [
   {
      id: 1,
      title: "Blue Printed Nighty",
      price: 1500,
      oldPrice: 2500,
      image: Nty1211,
      size: 'M',
      color: 'Blue',
      sleeve: 'Short Sleeve',
      fabric: 'Cotton',
      discount: 40,
    },
    {
      id: 2,
      title: "Brown Printed Nighty",
      price: 1450,
      oldPrice: 2400,
      image: Nty1212,
      size: 'L',
      color: 'Brown',
      sleeve: 'Short Sleeve',
      fabric: 'Viscose',
      discount: 39,
    },
    {
      id: 3,
      title: "Green Geometric Nighty",
      price: 1600,
      oldPrice: 2600,
      image: Nty1213,
      size: 'S',
      color: 'Green',
      sleeve: 'Short Sleeve',
      fabric: 'Rayon',
      discount: 38,
    },
    {
      id: 4,
      title: "Brown Diamond Print Nighty",
      price: 1550,
      oldPrice: 2550,
      image: Nty1214,
      size: 'M',
      color: 'Brown',
      sleeve: 'Short Sleeve',
      fabric: 'Cotton Blend',
      discount: 39,
    },
    {
      id: 5,
      title: "Light Blue Floral Nighty",
      price: 1400,
      oldPrice: 2300,
      image: Nty1215,
      size: 'L',
      color: 'Light Blue',
      sleeve: 'Short Sleeve',
      fabric: 'Hosiery',
      discount: 39,
    },
    {
      id: 6,
      title: "Orange Printed Nighty",
      price: 1650,
      oldPrice: 2700,
      image: Nty1216,
      size: 'XL',
      color: 'Orange',
      sleeve: 'Short Sleeve',
      fabric: 'Cotton',
      discount: 39,
    },
    {
      id: 7,
      title: "Brown Floral Nighty",
      price: 1580,
      oldPrice: 2600,
      image: Nty1217,
      size: 'M',
      color: 'Brown',
      sleeve: 'Short Sleeve',
      fabric: 'Viscose',
      discount: 39,
    },
    {
      id: 8,
      title: "Blue Printed Nighty (Style 2)",
      price: 1620,
      oldPrice: 2650,
      image: Nty1218,
      size: 'L',
      color: 'Blue',
      sleeve: 'Short Sleeve',
      fabric: 'Rayon',
      discount: 39,
    },
    {
      id: 9,
      title: "Blue Dot Print Nighty",
      price: 1480,
      oldPrice: 2450,
      image: Nty1219,
      size: 'S',
      color: 'Blue',
      sleeve: 'Short Sleeve',
      fabric: 'Cotton Blend',
      discount: 39,
    },
    {
      id: 10,
      title: "Purple Printed Nighty",
      price: 1530,
      oldPrice: 2500,
      image: Nty1220,
      size: 'M',
      color: 'Purple',
      sleeve: 'Short Sleeve',
      fabric: 'Hosiery',
      discount: 39,
    },
    
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
        <h2 className="text-3xl font-bold mb-1">Women's Wear</h2>
        <h4 className="text-green-700 font-medium">Nighty</h4>
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
                <div className="bg-white w-[278px] mx-auto">
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

export default Nighty;
