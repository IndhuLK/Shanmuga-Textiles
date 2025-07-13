import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import PreviouslyExplored from './PreviouslyExplored';
import NW0869 from '/src/assets/Night-Wear/IMG_0869.jpg';
import NW0870 from '/src/assets/Night-Wear/IMG_0870.jpg';
import NW0871 from '/src/assets/Night-Wear/IMG_0871.jpg';
import NW0872 from '/src/assets/Night-Wear/IMG_0872.jpg';
import NW0873 from '/src/assets/Night-Wear/IMG_0873.jpg';
import NW0874 from '/src/assets/Night-Wear/IMG_0874.jpg';
import NW0876 from '/src/assets/Night-Wear/IMG_0876.jpg'; // Note: IMG_0875 is missing in your provided image.
import NW0877 from '/src/assets/Night-Wear/IMG_0877.jpg';
import NW0878 from '/src/assets/Night-Wear/IMG_0878.jpg';
import NW0879 from '/src/assets/Night-Wear/IMG_0879.jpg';


const NightWear = () => {
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
      title: "Grey Striped Night Suit",
      price: 1100,
      oldPrice: 1900,
      image: NW0869,
      size: 'M',
      color: 'Grey',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 42,
    },
    {
      id: 2,
      title: "Pink & Grey Night Suit",
      price: 1050,
      oldPrice: 1850,
      image: NW0870,
      size: 'L',
      color: 'Pink & Grey',
      sleeve: 'Half Sleeve',
      fabric: 'Hosiery Cotton',
      discount: 43,
    },
    {
      id: 3,
      title: "Blue Striped Night Suit",
      price: 1200,
      oldPrice: 2000,
      image: NW0871,
      size: 'S',
      color: 'Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Blend',
      discount: 40,
    },
    {
      id: 4,
      title: "Pink Solid Night Suit",
      price: 950,
      oldPrice: 1700,
      image: NW0872,
      size: 'M',
      color: 'Pink',
      sleeve: 'Half Sleeve',
      fabric: 'Rayon',
      discount: 44,
    },
    {
      id: 5,
      title: "Light Blue Night Suit",
      price: 1000,
      oldPrice: 1800,
      image: NW0873,
      size: 'L',
      color: 'Light Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 44,
    },
    {
      id: 6,
      title: "Green Night Suit",
      price: 1150,
      oldPrice: 1950,
      image: NW0874,
      size: 'XL',
      color: 'Green',
      sleeve: 'Half Sleeve',
      fabric: 'Hosiery Cotton',
      discount: 41,
    },
    {
      id: 7,
      title: "Grey & White Striped Night Suit",
      price: 1250,
      oldPrice: 2100,
      image: NW0876,
      size: 'M',
      color: 'Grey & White',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Blend',
      discount: 40,
    },
    {
      id: 8,
      title: "Yellow & Brown Night Suit",
      price: 1080,
      oldPrice: 1900,
      image: NW0877,
      size: 'L',
      color: 'Yellow & Brown',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 43,
    },
    {
      id: 9,
      title: "Brown Striped Night Suit",
      price: 980,
      oldPrice: 1750,
      image: NW0878,
      size: 'S',
      color: 'Brown',
      sleeve: 'Half Sleeve',
      fabric: 'Rayon',
      discount: 44,
    },
    {
      id: 10,
      title: "Pink Striped Night Suit",
      price: 1020,
      oldPrice: 1800,
      image: NW0879,
      size: 'M',
      color: 'Pink',
      sleeve: 'Half Sleeve',
      fabric: 'Hosiery',
      discount: 43,
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
        <h4 className="text-green-700 font-medium">Night Wear </h4>
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

export default NightWear;
