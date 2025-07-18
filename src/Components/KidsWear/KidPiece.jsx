import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import K3P0859 from '/src/assets/Kid-3Piece/IMG_0859.jpg';
import K3P0860 from '/src/assets/Kid-3Piece/IMG_0860.jpg';
import K3P0861 from '/src/assets/Kid-3Piece/IMG_0861.jpg';
import K3P0862 from '/src/assets/Kid-3Piece/IMG_0862.jpg';
import K3P0863 from '/src/assets/Kid-3Piece/IMG_0863.jpg';

const KidPiece = () => {
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
      title: "Cream & Purple Kid 3-Piece Set",
      price: 2200,
      oldPrice: 3800,
      image: K3P0859,
      size: '4-5Y',
      color: 'Cream & Purple',
      sleeve: 'Long Sleeve',
      fabric: 'Silk Blend',
      discount: 42,
    },
    {
      id: 2,
      title: "Blue & Yellow Kid 3-Piece Set",
      price: 2000,
      oldPrice: 3500,
      image: K3P0860,
      size: '3-4Y',
      color: 'Blue & Yellow',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Silk',
      discount: 43,
    },
    {
      id: 3,
      title: "Cream & Orange Kid 3-Piece Set",
      price: 2300,
      oldPrice: 4000,
      image: K3P0861,
      size: '5-6Y',
      color: 'Cream & Orange',
      sleeve: 'Long Sleeve',
      fabric: 'Art Silk',
      discount: 43,
    },
    {
      id: 4,
      title: "Purple & Yellow Kid 3-Piece Set",
      price: 2100,
      oldPrice: 3600,
      image: K3P0862,
      size: '4-5Y',
      color: 'Purple & Yellow',
      sleeve: 'Half Sleeve',
      fabric: 'Silk Blend',
      discount: 41,
    },
    {
      id: 5,
      title: "Cream & Red Kid 3-Piece Set",
      price: 2400,
      oldPrice: 4200,
      image: K3P0863,
      size: '6-7Y',
      color: 'Cream & Red',
      sleeve: 'Long Sleeve',
      fabric: 'Cotton Silk',
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
        <h4 className="text-green-700 font-medium">Kid 3 Piece</h4>
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

export default KidPiece;
