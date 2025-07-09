import React, { useState } from 'react';
import Img3 from "../../assets/HomeImg/Img-3.jpg";
import Img2 from "../../assets/HomeImg/Img-3.jpg";
import FilterSidebar from '../Women/FilterSidebar';
import PreviouslyExplored from '../Women/PreviouslyExplored';
import Img1255 from "/src/assets/Sarees/MysoreSilk/IMG_1255.jpg";
import Img1256 from "/src/assets/Sarees/MysoreSilk/IMG_1256.jpg";
import Img1257 from "/src/assets/Sarees/MysoreSilk/IMG_1257.jpg";
import Img1258 from "/src/assets/Sarees/MysoreSilk/IMG_1258.jpg";
import Img1259 from "/src/assets/Sarees/MysoreSilk/IMG_1259.jpg";
import Img1260 from "/src/assets/Sarees/MysoreSilk/IMG_1260.jpg";
import Img1261 from "/src/assets/Sarees/MysoreSilk/IMG_1261.jpg";
import Img1262 from "/src/assets/Sarees/MysoreSilk/IMG_1262.jpg";
import Img1263 from "/src/assets/Sarees/MysoreSilk/IMG_1263.jpg";
import Img1264 from "/src/assets/Sarees/MysoreSilk/IMG_1264.jpg";
import Img1265 from "/src/assets/Sarees/MysoreSilk/IMG_1265.jpg";
import Img1266 from "/src/assets/Sarees/MysoreSilk/IMG_1266.jpg";
import Img1267 from "/src/assets/Sarees/MysoreSilk/IMG_1267.jpg";
import Img1268 from "/src/assets/Sarees/MysoreSilk/IMG_1268.jpg";
import Img1269 from "/src/assets/Sarees/MysoreSilk/IMG_1269.jpg";
import Img1270 from "/src/assets/Sarees/MysoreSilk/IMG_1270.jpg";
import Img1271 from "/src/assets/Sarees/MysoreSilk/IMG_1271.jpg";
import Img1272 from "/src/assets/Sarees/MysoreSilk/IMG_1272.jpg";
import Img1273 from "/src/assets/Sarees/MysoreSilk/IMG_1273.jpg";
import Img1274 from "/src/assets/Sarees/MysoreSilk/IMG_1274.jpg";
import Img1275 from "/src/assets/Sarees/MysoreSilk/IMG_1275.jpg";
import Img1276 from "/src/assets/Sarees/MysoreSilk/IMG_1276.jpg";
import Img1277 from "/src/assets/Sarees/MysoreSilk/IMG_1277.jpg";
import Img1278 from "/src/assets/Sarees/MysoreSilk/IMG_1278.jpg";
import Img1279 from "/src/assets/Sarees/MysoreSilk/IMG_1279.jpg";
import Img1280 from "/src/assets/Sarees/MysoreSilk/IMG_1280.jpg";
import Img1281 from "/src/assets/Sarees/MysoreSilk/IMG_1281.jpg";
import Img1282 from "/src/assets/Sarees/MysoreSilk/IMG_1282.jpg";


const MysoreCotton = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const allProducts = [
    { id: 1, title: "Mysore Silk Saree 1", image: Img1255, price: 899, color: "Red", sleeve: "Half Sleeve", fabric: "Cotton", discount: 10 },
  { id: 2, title: "Mysore Silk Saree 2", image: Img1256, price: 999, color: "Green", sleeve: "Full Sleeve", fabric: "Silk", discount: 15 },
  { id: 3, title: "Mysore Silk Saree 3", image: Img1257, price: 850, color: "Blue", sleeve: "Half Sleeve", fabric: "Cotton", discount: 12 },
  { id: 4, title: "Mysore Silk Saree 4", image: Img1258, price: 950, color: "Yellow", sleeve: "Sleeveless", fabric: "Silk", discount: 20 },
  { id: 5, title: "Mysore Silk Saree 5", image: Img1259, price: 999, color: "Maroon", sleeve: "Half Sleeve", fabric: "Cotton", discount: 10 },
  { id: 6, title: "Mysore Silk Saree 6", image: Img1260, price: 899, color: "Green", sleeve: "Full Sleeve", fabric: "Silk", discount: 5 },
  { id: 7, title: "Mysore Silk Saree 7", image: Img1261, price: 849, color: "Brown", sleeve: "Half Sleeve", fabric: "Cotton", discount: 18 },
  { id: 8, title: "Mysore Silk Saree 8", image: Img1262, price: 999, color: "Blue", sleeve: "Half Sleeve", fabric: "Silk", discount: 10 },
  { id: 9, title: "Mysore Silk Saree 9", image: Img1263, price: 1050, color: "Purple", sleeve: "Full Sleeve", fabric: "Cotton", discount: 20 },
  { id: 10, title: "Mysore Silk Saree 10", image: Img1264, price: 999, color: "Navy", sleeve: "Half Sleeve", fabric: "Silk", discount: 15 },
  { id: 11, title: "Mysore Silk Saree 11", image: Img1265, price: 899, color: "Brown", sleeve: "Half Sleeve", fabric: "Cotton", discount: 8 },
  { id: 12, title: "Mysore Silk Saree 12", image: Img1266, price: 940, color: "Cream", sleeve: "Full Sleeve", fabric: "Silk", discount: 10 },
  { id: 13, title: "Mysore Silk Saree 13", image: Img1267, price: 910, color: "Black", sleeve: "Half Sleeve", fabric: "Cotton", discount: 12 },
  { id: 14, title: "Mysore Silk Saree 14", image: Img1268, price: 970, color: "Sky Blue", sleeve: "Sleeveless", fabric: "Silk", discount: 20 },
  { id: 15, title: "Mysore Silk Saree 15", image: Img1269, price: 880, color: "Light Blue", sleeve: "Full Sleeve", fabric: "Cotton", discount: 18 },
  { id: 16, title: "Mysore Silk Saree 16", image: Img1270, price: 1050, color: "Peacock Blue", sleeve: "Half Sleeve", fabric: "Silk", discount: 10 },
  { id: 17, title: "Mysore Silk Saree 17", image: Img1271, price: 999, color: "Orange", sleeve: "Full Sleeve", fabric: "Cotton", discount: 15 },
  { id: 18, title: "Mysore Silk Saree 18", image: Img1272, price: 1080, color: "Orange", sleeve: "Half Sleeve", fabric: "Silk", discount: 12 },
  { id: 19, title: "Mysore Silk Saree 19", image: Img1273, price: 1120, color: "Orange", sleeve: "Sleeveless", fabric: "Cotton", discount: 25 },
  { id: 20, title: "Mysore Silk Saree 20", image: Img1274, price: 940, color: "Blue", sleeve: "Half Sleeve", fabric: "Silk", discount: 10 },
  { id: 21, title: "Mysore Silk Saree 21", image: Img1275, price: 990, color: "Brown", sleeve: "Full Sleeve", fabric: "Cotton", discount: 18 },
  { id: 22, title: "Mysore Silk Saree 22", image: Img1276, price: 930, color: "Red", sleeve: "Half Sleeve", fabric: "Silk", discount: 10 },
  { id: 23, title: "Mysore Silk Saree 23", image: Img1277, price: 899, color: "Pink", sleeve: "Half Sleeve", fabric: "Cotton", discount: 5 },
  { id: 24, title: "Mysore Silk Saree 24", image: Img1278, price: 850, color: "Pink", sleeve: "Full Sleeve", fabric: "Silk", discount: 20 },
  { id: 25, title: "Mysore Silk Saree 25", image: Img1279, price: 880, color: "Pink", sleeve: "Half Sleeve", fabric: "Cotton", discount: 10 },
  { id: 26, title: "Mysore Silk Saree 26", image: Img1280, price: 920, color: "Maroon", sleeve: "Full Sleeve", fabric: "Silk", discount: 12 },
  { id: 27, title: "Mysore Silk Saree 27", image: Img1281, price: 930, color: "Beige", sleeve: "Sleeveless", fabric: "Cotton", discount: 10 },
  { id: 28, title: "Mysore Silk Saree 28", image: Img1282, price: 950, color: "Dark Red", sleeve: "Half Sleeve", fabric: "Silk", discount: 15 },
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
        <h2 className="text-3xl font-bold mb-1">Sarees Collection</h2>
        <h4 className="text-green-700 font-medium">Mysore Silk Sarees</h4>
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
                <h3 className="font-sm md:text-md text-sm mt-4">{product.title}</h3>
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

export default MysoreCotton;
