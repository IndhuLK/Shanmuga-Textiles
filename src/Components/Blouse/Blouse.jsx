import React, { useState } from "react";
import { Link } from "react-router-dom";

import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import Img0724 from "../../assets/Blouse-Readymade/IMG_0724.jpg";
import Img0734 from "../../assets/Blouse-Readymade/IMG_0734.jpg";
import Img0738 from "../../assets/Blouse-Readymade/IMG_0738.jpg";
import Img0742 from "../../assets/Blouse-Readymade/IMG_0742.jpg";
import Img0747 from "../../assets/Blouse-Readymade/IMG_0747.jpg";
import Img0752 from "../../assets/Blouse-Readymade/IMG_0752.jpg";
import Img0755 from "../../assets/Blouse-Readymade/IMG_0755.jpg";
import Img0759 from "../../assets/Blouse-Readymade/IMG_0759.jpg";
import Img0762 from "../../assets/Blouse-Readymade/IMG_0762.jpg";
import Img0765 from "../../assets/Blouse-Readymade/IMG_0765.jpg";

const Blouse = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const blouseProducts = [
    {
      id: 1,
      title: "Pink Readymade Blouse",
      image: Img0724,
      price: 399,
      category: "Blouse",
      oldPrice: 500,
    },
    {
      id: 2,
      title: "Red Readymade Blouse",
      image: Img0734,
      price: 549,
      category: "Blouse",
    },
    {
      id: 3,
      title: "Elegant Blouse Design",
      image: Img0738,
      price: 399,
      category: "Blouse",
    },
    {
      id: 4,
      title: "Silk Embroidered Blouse",
      image: Img0742,
      price: 449,
      category: "Blouse",
    },
    {
      id: 5,
      title: "Cotton Daily Wear Blouse",
      image: Img0747,
      price: 449,
      category: "Blouse",
    },
    {
      id: 6,
      title: "Mirror Work Blouse",
      image: Img0752,
      price: 399,
      category: "Blouse",
    },
    {
      id: 7,
      title: "Traditional Zari Blouse",
      image: Img0755,
      price: 499,
      category: "Blouse",
    },
    {
      id: 8,
      title: "Sleeveless Blouse",
      image: Img0759,
      price: 499,
      category: "Blouse",
    },
    {
      id: 9,
      title: "Velvet Blouse",
      image: Img0762,
      price: 449,
      category: "Blouse",
    },
    {
      id: 10,
      title: "Green Readymade Blouse",
      image: Img0765,
      price: 449,
      category: "Blouse",
    },
  ];

  const filtered = blouseProducts.filter((p) => {
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
        <h2 className="text-3xl font-bold mb-1">Blouse</h2>
        <h4 className="text-green-700 font-medium">Readymade Blouse</h4>
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

export default Blouse;
