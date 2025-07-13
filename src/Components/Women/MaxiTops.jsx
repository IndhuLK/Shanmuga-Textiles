import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import PreviouslyExplored from './PreviouslyExplored';
import Max1167 from '/src/assets/Maxi/IMG_1167.jpg';
import Max1168 from '/src/assets/Maxi/IMG_1168.jpg';
import Max1169 from '/src/assets/Maxi/IMG_1169.jpg';
import Max1170 from '/src/assets/Maxi/IMG_1170.jpg';
import Max1172 from '/src/assets/Maxi/IMG_1172.jpg';
import Max1173 from '/src/assets/Maxi/IMG_1173.jpg';
import Max1174 from '/src/assets/Maxi/IMG_1174.jpg';
import Max1175 from '/src/assets/Maxi/IMG_1175.jpg';
import Max1176 from '/src/assets/Maxi/IMG_1176.jpg';
import Max1177 from '/src/assets/Maxi/IMG_1177.jpg';


const MaxiTops = () => {
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
      title: "Blue Printed Maxi Dress",
      price: 1800,
      oldPrice: 2800,
      image: Max1167,
      size: 'M',
      color: 'Blue',
      sleeve: 'Sleeveless',
      fabric: 'Cotton',
      discount: 36,
    },
    {
      id: 2,
      title: "Dark Green Maxi Dress",
      price: 2200,
      oldPrice: 3500,
      image: Max1168,
      size: 'L',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Viscose',
      discount: 37,
    },
    {
      id: 3,
      title: "Purple Embroidered Maxi Dress",
      price: 2500,
      oldPrice: 4000,
      image: Max1169,
      size: 'S',
      color: 'Purple',
      sleeve: 'Sleeveless',
      fabric: 'Georgette',
      discount: 38,
    },
    {
      id: 4,
      title: "Floral White Maxi Dress",
      price: 1500,
      oldPrice: 2400,
      image: Max1170,
      size: 'M',
      color: 'White Multi',
      sleeve: 'Short Sleeve',
      fabric: 'Rayon',
      discount: 38,
    },
    {
      id: 5,
      title: "Blue Printed Maxi Dress (Style 2)",
      price: 1900,
      oldPrice: 3000,
      image: Max1172,
      size: 'L',
      color: 'Blue',
      sleeve: 'Sleeveless',
      fabric: 'Cotton',
      discount: 37,
    },
    {
      id: 6,
      title: "Grey Flowy Maxi Dress",
      price: 1700,
      oldPrice: 2700,
      image: Max1173,
      size: 'XL',
      color: 'Grey',
      sleeve: 'Sleeveless',
      fabric: 'Chiffon',
      discount: 37,
    },
    {
      id: 7,
      title: "Yellow Tiered Maxi Dress",
      price: 2000,
      oldPrice: 3200,
      image: Max1174,
      size: 'M',
      color: 'Yellow',
      sleeve: 'Sleeveless',
      fabric: 'Viscose',
      discount: 38,
    },
    {
      id: 8,
      title: "Light Blue Tie-Dye Maxi Dress",
      price: 1600,
      oldPrice: 2600,
      image: Max1175,
      size: 'L',
      color: 'Light Blue',
      sleeve: 'Sleeveless',
      fabric: 'Cotton',
      discount: 38,
    },
    {
      id: 9,
      title: "Blue & Purple Maxi Dress",
      price: 2100,
      oldPrice: 3300,
      image: Max1176,
      size: 'S',
      color: 'Blue & Purple',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 36,
    },
    {
      id: 10,
      title: "Red Ruffled Maxi Dress",
      price: 2300,
      oldPrice: 3800,
      image: Max1177,
      size: 'M',
      color: 'Red',
      sleeve: 'Sleeveless',
      fabric: 'Georgette',
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
        <h4 className="text-green-700 font-medium">Maxi </h4>
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

export default MaxiTops;
