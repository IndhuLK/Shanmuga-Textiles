import React, { useState } from 'react';
import Img3 from "../../assets/HomeImg/Img-3.jpg"; // These seem unused, consider removing if not used elsewhere
import Img2 from "../../assets/HomeImg/Img-3.jpg"; // These seem unused, consider removing if not used elsewhere
import FilterSidebar from '../Women/FilterSidebar';
import PreviouslyExplored from '../Women/PreviouslyExplored';
import Img1250 from "/src/assets/Sarees/SareeCombo/IMG_1250.jpg";
import Img1251 from "/src/assets/Sarees/SareeCombo/IMG_1251.jpg";
import Img1252 from "/src/assets/Sarees/SareeCombo/IMG_1252.jpg";
import Img1253 from "/src/assets/Sarees/SareeCombo/IMG_1253.jpg";
import Img1254 from "/src/assets/Sarees/SareeCombo/IMG_1254.jpg";


const SareeComboOffer = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const allProducts = [
    { id: 11, title: "Combo Saree 4", image: Img1250, price: 1799, category: "Combo" },
    { id: 12, title: "Combo Saree 5", image: Img1251, price: 1899, category: "Combo" },
    { id: 13, title: "Combo Saree 6", image: Img1252, price: 1599, category: "Combo" },
    { id: 14, title: "Combo Saree 7", image: Img1253, price: 1699, category: "Combo" },
    { id: 15, title: "Combo Saree 8", image: Img1254, price: 1899, category: "Combo" },
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
    <div className="px-4 sm:px-6 py-6 font-family"> {/* Adjusted padding for smaller screens */}
      {/* ✅ Title on top */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-1">Sarees Collection</h2> {/* Responsive text size */}
        <h4 className="text-green-700 font-medium text-base sm:text-lg">Saree Combo Offer</h4> {/* Responsive text size */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters - Hidden on small screens or adjust its display as needed */}
        {/* For mobile, you might want a modal or slide-in filter for FilterSidebar */}
        <div className="col-span-1 hidden md:block"> {/* Hide on small screens, show on medium and up */}
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
        {/* Changed grid-cols-1 to sm:grid-cols-2 for smaller mobiles, then lg:grid-cols-3 */}
        {/* For very small screens, 1 column makes sense. For slightly larger phones, 2 columns might be okay. */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id} className="p-2">
                {/* Removed fixed width, let the grid handle it */}
                <div className="bg-white mx-auto"> {/* Removed w-[278px] */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[350px] object-cover rounded-[25px]" // Image takes full width of its parent div
                  />
                  <h3 className="font-medium text-base sm:text-lg mt-4">{product.title}</h3> {/* Responsive text size */}
                  <div className='flex space-x-4 items-center'> {/* Added items-center for vertical alignment */}
                    <div className="text-gray-900 mt-1 text-base sm:text-lg">₹{product.price}</div>
                    {/* Add null check for oldPrice before rendering line-through */}
                    {product.oldPrice && <div className="text-gray-500 mt-1 line-through text-sm sm:text-base">₹{product.oldPrice}</div>}
                  </div>
                  <button className="mt-4 px-4 w-full py-2 border border-green-800 text-green-800
                  rounded-full hover:bg-green-800 hover:text-white transition text-sm sm:text-base">
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
      <PreviouslyExplored />
    </div>
  );
};

export default SareeComboOffer;