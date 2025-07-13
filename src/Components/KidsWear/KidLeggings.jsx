import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import KL0880 from '/src/assets/Kid-liggines/IMG_0880.jpg';
import KL0881 from '/src/assets/Kid-liggines/IMG_0881.jpg';
import KL0884 from '/src/assets/Kid-liggines/IMG_0884.jpg'; // Note: IMG_0882 and IMG_0883 are not present in your provided image.
import KL0885 from '/src/assets/Kid-liggines/IMG_0885.jpg';
import KL0886 from '/src/assets/Kid-liggines/IMG_0886.jpg';
import KL0887 from '/src/assets/Kid-liggines/IMG_0887.jpg';
import KL0888 from '/src/assets/Kid-liggines/IMG_0888.jpg';
import KL0889 from '/src/assets/Kid-liggines/IMG_0889.jpg';
import KL0890 from '/src/assets/Kid-liggines/IMG_0890.jpg';
import KL0891 from '/src/assets/Kid-liggines/IMG_0891.jpg';

const KidLeggings = () => {
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
      title: "Grey Kid's Liggings",
      price: 450,
      oldPrice: 800,
      image: KL0880,
      size: '2-3Y',
      color: 'Grey',
      sleeve: 'None',
      fabric: 'Lycra Cotton',
      discount: 43,
    },
    {
      id: 2,
      title: "Navy Blue Kid's Liggings",
      price: 480,
      oldPrice: 850,
      image: KL0881,
      size: '3-4Y',
      color: 'Navy Blue',
      sleeve: 'None',
      fabric: 'Stretch Cotton',
      discount: 43,
    },
    {
      id: 3,
      title: "Yellow Kid's Liggings",
      price: 460,
      oldPrice: 820,
      image: KL0884,
      size: '4-5Y',
      color: 'Yellow',
      sleeve: 'None',
      fabric: 'Viscose Lycra',
      discount: 44,
    },
    {
      id: 4,
      title: "Purple Kid's Liggings",
      price: 490,
      oldPrice: 870,
      image: KL0885,
      size: '5-6Y',
      color: 'Purple',
      sleeve: 'None',
      fabric: 'Cotton Blend',
      discount: 44,
    },
    {
      id: 5,
      title: "Beige Kid's Liggings",
      price: 470,
      oldPrice: 830,
      image: KL0886,
      size: '6-7Y',
      color: 'Beige',
      sleeve: 'None',
      fabric: 'Lycra',
      discount: 43,
    },
    {
      id: 6,
      title: "Light Pink Kid's Liggings",
      price: 450,
      oldPrice: 800,
      image: KL0887,
      size: '7-8Y',
      color: 'Light Pink',
      sleeve: 'None',
      fabric: 'Stretch Cotton',
      discount: 43,
    },
    {
      id: 7,
      title: "Mustard Yellow Kid's Liggings",
      price: 500,
      oldPrice: 900,
      image: KL0888,
      size: '3-4Y',
      color: 'Mustard Yellow',
      sleeve: 'None',
      fabric: 'Viscose Lycra',
      discount: 44,
    },
    {
      id: 8,
      title: "Maroon Kid's Liggings",
      price: 520,
      oldPrice: 950,
      image: KL0889,
      size: '4-5Y',
      color: 'Maroon',
      sleeve: 'None',
      fabric: 'Cotton Blend',
      discount: 45,
    },
    {
      id: 9,
      title: "Pink Kid's Liggings",
      price: 470,
      oldPrice: 840,
      image: KL0890,
      size: '5-6Y',
      color: 'Pink',
      sleeve: 'None',
      fabric: 'Lycra',
      discount: 44,
    },
    {
      id: 10,
      title: "Orange Kid's Liggings",
      price: 480,
      oldPrice: 860,
      image: KL0891,
      size: '2-3Y',
      color: 'Orange',
      sleeve: 'None',
      fabric: 'Stretch Cotton',
      discount: 44,
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

    return (
      priceMatch &&
      sizeMatch &&
      colorMatch &&
      sleeveMatch &&
      fabricMatch &&
      discountMatch
    );
  });
  return (
    <div className="px-6 py-6 font-family">
      {/* ✅ Title on top */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-1">Kids Wear</h2>
        <h4 className="text-green-700 font-medium">Kid Leggings</h4>
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
            onDiscountChange={(val) =>
              setFilters({ ...filters, discount: val })
            }
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
                  <h3 className="font-sm  mt-4 md:text-md text-sm">{product.title}</h3>
                  <div className="flex space-x-4">
                    <div className="text-gray-900 mt-1 md:text-md text-sm">₹{product.price}</div>
                    <div className=" text-gray-500 mt-1 line-through flex md:text-md text-sm">
                      ₹{product.oldPrice}
                    </div>
                  </div>
                  <button className="mt-4 px-4 w-full py-2 border border-green-800 md:text-md text-sm
                  text-green-800 rounded-full hover:bg-green-800 hover:text-white transition">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </div>
      <PreviouslyExplored />
    </div>
  );
};

export default KidLeggings;
