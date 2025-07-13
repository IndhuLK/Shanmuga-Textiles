import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import { Link } from "react-router-dom";

import PreviouslyExplored from './PreviouslyExplored';
import Bittu0805 from "../../assets/Bittukurti/IMG_0805.jpg"
import Bittu0808 from "../../assets/Bittukurti/IMG_0808.jpg"
import Bittu0812 from "../../assets/Bittukurti/IMG_0812.jpg"
import Bittu0815 from "../../assets/Bittukurti/IMG_0815.jpg"
import Bittu0818 from "../../assets/Bittukurti/IMG_0818.jpg"
import Bittu0821 from "../../assets/Bittukurti/IMG_0821.jpg"
import Bittu0825 from "../../assets/Bittukurti/IMG_0825.jpg"
import Bittu0830 from "../../assets/Bittukurti/IMG_0830.jpg"
import Bittu0833 from "../../assets/Bittukurti/IMG_0833.jpg"
import Bittu0836 from "../../assets/Bittukurti/IMG_0836.jpg"

const BittuKurti = () => {
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
      id: 56 ,
      title: "Women's Maxi Wear",
      price: 1500,
      oldPrice: 2600,
      image: Bittu0805,
      size: 'M',
      color: 'Red',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton',
      discount: 30,
    },
    {
      id: 57,
      title: "Elegant Blue Kurti",
      price: 1800,
      oldPrice: 2500,
      image: Bittu0808,
      size: 'L',
      color: 'Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Silk',
      discount: 20,
    },
    {
      id: 58,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0812,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 59,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0815,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 60,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0818,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 61,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0821,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 62,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0825,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 63,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0830,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 64,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0833,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 65,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: Bittu0836,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
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
        <h4 className="text-green-700 font-medium">Bittu Maxi</h4>
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
                <Link to={`/productdetails/${product.id}`}>
                <div className="bg-white w-[278px] mx-auto cursor-pointer">
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
                </Link>
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

export default BittuKurti;
