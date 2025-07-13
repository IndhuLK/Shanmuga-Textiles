import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import KF0892 from "/src/assets/Kid-frock/IMG_0892.jpg";
import KF0893 from "/src/assets/Kid-frock/IMG_0893.jpg";
import KF0894 from "/src/assets/Kid-frock/IMG_0894.jpg";
import KF0895 from "/src/assets/Kid-frock/IMG_0895.jpg";
import KF0896 from "/src/assets/Kid-frock/IMG_0896.jpg";
import KF0897 from "/src/assets/Kid-frock/IMG_0897.jpg";
import KF0898 from "/src/assets/Kid-frock/IMG_0898.jpg";
import KF0899 from "/src/assets/Kid-frock/IMG_0899.jpg";
import KF0900 from "/src/assets/Kid-frock/IMG_0900.jpg";
import KF0901 from "/src/assets/Kid-frock/IMG_0901.jpg";

const KidFrock = () => {
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
      title: "Pink Princess Frock",
      price: 1500,
      oldPrice: 2800,
      image: KF0892,
      size: "2-3Y",
      color: "Pink",
      sleeve: "Sleeveless",
      fabric: "Net",
      discount: 46,
    },
    {
      id: 2,
      title: "Navy Blue Party Frock",
      price: 1700,
      oldPrice: 3000,
      image: KF0893,
      size: "4-5Y",
      color: "Navy Blue",
      sleeve: "Sleeveless",
      fabric: "Tulle",
      discount: 43,
    },
    {
      id: 3,
      title: "Orange & Black Layered Frock",
      price: 1600,
      oldPrice: 2900,
      image: KF0894,
      size: "3-4Y",
      color: "Orange & Black",
      sleeve: "Sleeveless",
      fabric: "Satin & Net",
      discount: 45,
    },
    {
      id: 4,
      title: "Pink & Green Embroidery Frock",
      price: 1800,
      oldPrice: 3200,
      image: KF0895,
      size: "5-6Y",
      color: "Pink & Green",
      sleeve: "Short Sleeve",
      fabric: "Cotton Blend",
      discount: 44,
    },
    {
      id: 5,
      title: "Red Ruffled Party Frock",
      price: 1900,
      oldPrice: 3400,
      image: KF0896,
      size: "6-7Y",
      color: "Red",
      sleeve: "Sleeveless",
      fabric: "Net",
      discount: 44,
    },
    {
      id: 6,
      title: "Multi-color Festive Frock",
      price: 2200,
      oldPrice: 3800,
      image: KF0897,
      size: "7-8Y",
      color: "Multi-color",
      sleeve: "Short Sleeve",
      fabric: "Art Silk",
      discount: 42,
    },
    {
      id: 7,
      title: "Mint Green Princess Frock",
      price: 1650,
      oldPrice: 2950,
      image: KF0898,
      size: "3-4Y",
      color: "Mint Green",
      sleeve: "Sleeveless",
      fabric: "Tulle",
      discount: 44,
    },
    {
      id: 8,
      title: "Light Blue Embellished Frock",
      price: 1750,
      oldPrice: 3100,
      image: KF0899,
      size: "5-6Y",
      color: "Light Blue",
      sleeve: "Sleeveless",
      fabric: "Net",
      discount: 44,
    },
    {
      id: 9,
      title: "Grey Floral Party Frock",
      price: 1850,
      oldPrice: 3300,
      image: KF0900,
      size: "4-5Y",
      color: "Grey",
      sleeve: "Sleeveless",
      fabric: "Satin & Net",
      discount: 44,
    },
    {
      id: 10,
      title: "Light Green Net Frock",
      price: 1550,
      oldPrice: 2850,
      image: KF0901,
      size: "2-3Y",
      color: "Light Green",
      sleeve: "Short Sleeve",
      fabric: "Net",
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
        <h4 className="text-green-700 font-medium">Kid Frock</h4>
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

export default KidFrock;
