import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import KCT1179 from '/src/assets/Kid-CottonTop/IMG_1179.jpg';
import KCT1180 from '/src/assets/Kid-CottonTop/IMG_1180.jpg';
import KCT1181 from '/src/assets/Kid-CottonTop/IMG_1181.jpg';
import KCT1182 from '/src/assets/Kid-CottonTop/IMG_1182.jpg';
import KCT1183 from '/src/assets/Kid-CottonTop/IMG_1183.jpg';
import KCT1184 from '/src/assets/Kid-CottonTop/IMG_1184.jpg';
import KCT1185 from '/src/assets/Kid-CottonTop/IMG_1185.jpg';
import KCT1186 from '/src/assets/Kid-CottonTop/IMG_1186.jpg';
import KCT1187 from '/src/assets/Kid-CottonTop/IMG_1187.jpg';
import KCT1189 from '/src/assets/Kid-CottonTop/IMG_1189.jpg'; 

const KidCottonTop = () => {
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
      title: "White Tiered Cotton Top",
      price: 750,
      oldPrice: 1300,
      image: KCT1179,
      size: '2-3Y',
      color: 'White',
      sleeve: 'Long Sleeve',
      fabric: 'Cotton',
      discount: 42,
    },
    {
      id: 2,
      title: "Blue Tie-Dye Cotton Top",
      price: 680,
      oldPrice: 1200,
      image: KCT1180,
      size: '4-5Y',
      color: 'Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 43,
    },
    {
      id: 3,
      title: "Cream Simple Cotton Top",
      price: 700,
      oldPrice: 1250,
      image: KCT1181,
      size: '3-4Y',
      color: 'Cream',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton',
      discount: 44,
    },
    {
      id: 4,
      title: "White & Black Striped Top",
      price: 720,
      oldPrice: 1280,
      image: KCT1182,
      size: '5-6Y',
      color: 'White & Black',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton Blend',
      discount: 44,
    },
    {
      id: 5,
      title: "Floral Pink Cotton Top",
      price: 800,
      oldPrice: 1400,
      image: KCT1183,
      size: '6-7Y',
      color: 'Pink Multi',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 43,
    },
    {
      id: 6,
      title: "Navy Blue Solid Cotton Top",
      price: 650,
      oldPrice: 1150,
      image: KCT1184,
      size: '7-8Y',
      color: 'Navy Blue',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton',
      discount: 43,
    },
    {
      id: 7,
      title: "Magenta Ruffled Cotton Top",
      price: 780,
      oldPrice: 1350,
      image: KCT1185,
      size: '3-4Y',
      color: 'Magenta',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 42,
    },
    {
      id: 8,
      title: "Red & Yellow Tie-Dye Top",
      price: 820,
      oldPrice: 1420,
      image: KCT1186,
      size: '5-6Y',
      color: 'Red & Yellow',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Blend',
      discount: 42,
    },
    {
      id: 9,
      title: "Blue & Orange Patterned Top",
      price: 850,
      oldPrice: 1480,
      image: KCT1187,
      size: '4-5Y',
      color: 'Blue & Orange',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 43,
    },
    {
      id: 10,
      title: "Printed Orange Cotton Top",
      price: 790,
      oldPrice: 1380,
      image: KCT1189,
      size: '2-3Y',
      color: 'Orange Multi',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton',
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
        <h4 className="text-green-700 font-medium">Kid Cotton Top</h4>
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

export default KidCottonTop;
