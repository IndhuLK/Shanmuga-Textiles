import React, { useState } from "react";
import { Link } from "react-router-dom";

import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import Img1221 from "/src/assets/Sarees/Saree/IMG_1221.jpg";
import Img1224 from "/src/assets/Sarees/Saree/IMG_1224.jpg";
import Img1227 from "/src/assets/Sarees/Saree/IMG_1227.jpg";
import Img1230 from "/src/assets/Sarees/Saree/IMG_1230.jpg";
import Img1233 from "/src/assets/Sarees/Saree/IMG_1233.jpg";
import Img1236 from "/src/assets/Sarees/Saree/IMG_1236.jpg";
import Img1239 from "/src/assets/Sarees/Saree/IMG_1239.jpg";
import Img1242 from "/src/assets/Sarees/Saree/IMG_1242.jpg";
import Img1245 from "/src/assets/Sarees/Saree/IMG_1245.jpg";
import Img1248 from "/src/assets/Sarees/Saree/IMG_1248.jpg";

const SilkSaree = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const silksaree = [
  { id: 21, title: "Vibrant Printed Cotton Saree", image: Img1221, price: 899, category: "Cotton" },
  { id: 22, title: "Elegant Block Print Saree", image: Img1224, price: 999, category: "Cotton" },
  { id: 23, title: "Pastel Shade Cotton Saree", image: Img1227, price: 1499, category: "Silk" },
  { id: 24, title: "Geometric Pattern Cotton Saree", image: Img1230, price: 1399, category: "Silk" },
  { id: 25, title: "Classic Plain Border Saree", image: Img1233, price: 1599, category: "Combo" },
  { id: 26, title: "Dual Tone Cotton Saree", image: Img1236, price: 1499, category: "Combo" },
  { id: 27, title: "Artistic Motif Cotton Saree", image: Img1239, price: 999, category: "Cotton" },
  { id: 28, title: "Lightweight Daily Wear Saree", image: Img1242, price: 1299, category: "Silk" },
  { id: 29, title: "Contemporary Design Cotton Saree", image: Img1245, price: 1099, category: "Cotton" },
  { id: 30, title: "Traditional Weave Cotton Saree", image: Img1248, price: 1399, category: "Combo" },
  ];

  const filtered = silksaree.filter((p) => {
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
        <h2 className="text-3xl font-bold mb-1">Sarees Collection</h2>
        <h4 className="text-green-700 font-medium">Silk Saree</h4>
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
                <Link to={`/productdetails/${product.id}`}>
                <div className="bg-white w-[278px] mx-auto cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[278px] h-[350px] object-cover rounded-[25px]"
                  />
                  <h3 className="font-sm md:text-md text-sm mt-4">
                    {product.title}
                  </h3>
                  <div className="flex space-x-4">
                    <div className="text-gray-900 mt-1 md:text-md text-sm">
                      ₹{product.price}
                    </div>
                    <div className=" text-gray-500 mt-1 line-through flex md:text-md text-sm">
                      ₹{product.oldPrice}
                    </div>
                  </div>
                  <button
                    className="mt-4 px-4 w-full py-2 border border-green-800 text-green-800 
                rounded-full hover:bg-green-800 hover:text-white transition md:text-md text-sm"
                  >
                    ADD TO CART
                  </button>
                </div>
                </Link>
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

export default SilkSaree;
