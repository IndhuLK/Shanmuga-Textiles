import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import PreviouslyExplored from './PreviouslyExplored';
import WTop1283 from "/src/assets/Western-Top/IMG_1283.jpg"
import WTop1284 from "/src/assets/Western-Top/IMG_1284.jpg"
import WTop1285 from "/src/assets/Western-Top/IMG_1285.jpg"
import WTop1286 from "/src/assets/Western-Top/IMG_1286.jpg"
import WTop1287 from "/src/assets/Western-Top/IMG_1287.jpg"
import WTop1288 from "/src/assets/Western-Top/IMG_1288.jpg"
import WTop1289 from "/src/assets/Western-Top/IMG_1289.jpg"
import WTop1290 from "/src/assets/Western-Top/IMG_1290.jpg"
import WTop1291 from "/src/assets/Western-Top/IMG_1291.jpg"
import WTop1292 from "/src/assets/Western-Top/IMG_1292.jpg"


const WesternTop = () => {
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
      title: "White Lace Western Top",
      price: 950,
      oldPrice: 1800,
      image: WTop1283,
      size: 'M',
      color: 'White',
      sleeve: 'Long Sleeve',
      fabric: 'Lace',
      discount: 47,
    },
    {
      id: 2,
      title: "Pink Frill Western Top",
      price: 800,
      oldPrice: 1500,
      image: WTop1284,
      size: 'S',
      color: 'Pink',
      sleeve: 'Half Sleeve',
      fabric: 'Georgette',
      discount: 47,
    },
    {
      id: 3,
      title: "Brown Knit Western Top",
      price: 1100,
      oldPrice: 2000,
      image: WTop1285,
      size: 'L',
      color: 'Brown',
      sleeve: 'Full Sleeve',
      fabric: 'Knit',
      discount: 45,
    },
    {
      id: 4,
      title: "Striped Western Top",
      price: 750,
      oldPrice: 1400,
      image: WTop1286,
      size: 'M',
      color: 'Black & White',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Blend',
      discount: 46,
    },
    {
      id: 5,
      title: "Light Blue Casual Top",
      price: 600,
      oldPrice: 1000,
      image: WTop1287,
      size: 'S',
      color: 'Light Blue',
      sleeve: 'Short Sleeve',
      fabric: 'Cotton',
      discount: 40,
    },
    {
      id: 6,
      title: "Floral Yellow Western Top",
      price: 1300,
      oldPrice: 2200,
      image: WTop1288,
      size: 'L',
      color: 'Yellow',
      sleeve: 'Sleeveless',
      fabric: 'Viscose',
      discount: 41,
    },
    {
      id: 7,
      title: "Black & Beige Layered Top",
      price: 1600,
      oldPrice: 2800,
      image: WTop1289,
      size: 'M',
      color: 'Black & Beige',
      sleeve: 'Full Sleeve',
      fabric: 'Polyester',
      discount: 43,
    },
    {
      id: 8,
      title: "White Ruffled Dress/Top",
      price: 1400,
      oldPrice: 2500,
      image: WTop1290,
      size: 'L',
      color: 'White',
      sleeve: 'Sleeveless',
      fabric: 'Cotton',
      discount: 44,
    },
    {
      id: 9,
      title: "White Floral Print Top",
      price: 900,
      oldPrice: 1600,
      image: WTop1291,
      size: 'S',
      color: 'White Multi',
      sleeve: 'Half Sleeve',
      fabric: 'Chiffon',
      discount: 44,
    },
    {
      id: 10,
      title: "Abstract Print Blouse",
      price: 1000,
      oldPrice: 1900,
      image: WTop1292,
      size: 'M',
      color: 'Multi-color',
      sleeve: 'Short Sleeve',
      fabric: 'Georgette',
      discount: 47,
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
        <h4 className="text-green-700 font-medium">Western Top</h4>
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

export default WesternTop;
