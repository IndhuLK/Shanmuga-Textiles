import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import PreviouslyExplored from './PreviouslyExplored';
import JG1293 from '/src/assets/Jeggings/IMG_1293.jpg';
import JG1294 from '/src/assets/Jeggings/IMG_1294.jpg';
import JG1295 from '/src/assets/Jeggings/IMG_1295.jpg';
import JG1296 from '/src/assets/Jeggings/IMG_1296.jpg';
import JG1297 from '/src/assets/Jeggings/IMG_1297.jpg';
import JG1298 from '/src/assets/Jeggings/IMG_1298.jpg';
import JG1299 from '/src/assets/Jeggings/IMG_1299.jpg';
import JG1300 from '/src/assets/Jeggings/IMG_1300.jpg';
import JG1301 from '/src/assets/Jeggings/IMG_1301.jpg';
import JG1302 from '/src/assets/Jeggings/IMG_1302.jpg';


const Jeggings = () => {
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
      title: "Black Solid Jeggings",
      price: 650,
      oldPrice: 1200,
      image: JG1293,
      size: 'M',
      color: 'Black',
      sleeve: 'None',
      fabric: 'Denim Blend',
      discount: 46,
    },
    {
      id: 2,
      title: "Light Grey Washed Jeggings",
      price: 700,
      oldPrice: 1300,
      image: JG1294,
      size: 'L',
      color: 'Light Grey',
      sleeve: 'None',
      fabric: 'Stretch Cotton',
      discount: 46,
    },
    {
      id: 3,
      title: "Black Printed Jeggings",
      price: 750,
      oldPrice: 1400,
      image: JG1295,
      size: 'S',
      color: 'Black Multi',
      sleeve: 'None',
      fabric: 'Cotton Lycra',
      discount: 46,
    },
    {
      id: 4,
      title: "Blue Washed Denim Jeggings",
      price: 800,
      oldPrice: 1500,
      image: JG1296,
      size: 'M',
      color: 'Blue',
      sleeve: 'None',
      fabric: 'Denim',
      discount: 47,
    },
    {
      id: 5,
      title: "Grey Washed Skinny Jeans",
      price: 850,
      oldPrice: 1600,
      image: JG1297,
      size: 'L',
      color: 'Grey',
      sleeve: 'None',
      fabric: 'Stretch Denim',
      discount: 47,
    },
    {
      id: 6,
      title: "Light Blue Distressed Jeggings",
      price: 900,
      oldPrice: 1700,
      image: JG1298,
      size: 'XL',
      color: 'Light Blue',
      sleeve: 'None',
      fabric: 'Denim Blend',
      discount: 47,
    },
    {
      id: 7,
      title: "Teal Ankle Length Pants",
      price: 700,
      oldPrice: 1300,
      image: JG1299,
      size: 'M',
      color: 'Teal',
      sleeve: 'None',
      fabric: 'Poly Cotton',
      discount: 46,
    },
    {
      id: 8,
      title: "Grey Slim Fit Pants",
      price: 750,
      oldPrice: 1400,
      image: JG1300,
      size: 'L',
      color: 'Grey',
      sleeve: 'None',
      fabric: 'Cotton Blend',
      discount: 46,
    },
    {
      id: 9,
      title: "Checkered Lounge Pants",
      price: 600,
      oldPrice: 1100,
      image: JG1301,
      size: 'S',
      color: 'Multi-color',
      sleeve: 'None',
      fabric: 'Hosiery',
      discount: 45,
    },
    {
      id: 10,
      title: "Royal Blue Solid Jeggings",
      price: 780,
      oldPrice: 1450,
      image: JG1302,
      size: 'M',
      color: 'Royal Blue',
      sleeve: 'None',
      fabric: 'Lycra Blend',
      discount: 46,
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
        <h4 className="text-green-700 font-medium">Jeggings </h4>
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

export default Jeggings;
