import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import Img3 from "../../assets/HomeImg/Img-3.jpg";
import Img2 from "../../assets/HomeImg/Img-3.jpg";
import PreviouslyExplored from './PreviouslyExplored';
import KR0769 from "../../assets/KurtiReliance/IMG_0769.jpg"
import KR0772 from "../../assets/KurtiReliance/IMG_0772.jpg"
import KR0776 from "../../assets/KurtiReliance/IMG_0776.jpg"
import KR0780 from "../../assets/KurtiReliance/IMG_0780.jpg"
import KR0783 from "../../assets/KurtiReliance/IMG_0783.jpg"
import KR0786 from "../../assets/KurtiReliance/IMG_0786.jpg"
import KR0789 from "../../assets/KurtiReliance/IMG_0789.jpg"
import KR0793 from "../../assets/KurtiReliance/IMG_0793.jpg"
import KR0798 from "../../assets/KurtiReliance/IMG_0798.jpg"
import KR0802 from "../../assets/KurtiReliance/IMG_0802.jpg"

const KurtiReliance = () => {
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
      id: 1 ,
      title: "Women's Maxi Wear",
      price: 1500,
      oldPrice: 2600,
      image: KR0769,
      size: 'M',
      color: 'Red',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton',
      discount: 30,
    },
    {
      id: 2,
      title: "Elegant Blue Kurti",
      price: 1800,
      oldPrice: 2500,
      image: KR0772,
      size: 'L',
      color: 'Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Silk',
      discount: 20,
    },
    {
      id: 3,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0776,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 4,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0780,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 5,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0783,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 6,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0786,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 7,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0789,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 8,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0793,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 9,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0798,
      size: 'S',
      color: 'Green',
      sleeve: 'Sleeveless',
      fabric: 'Rayon',
      discount: 40,
    },
    {
      id: 10,
      title: "Printed Floral Kurti",
      price: 1200,
      oldPrice: 2000,
      image: KR0802,
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
        <h4 className="text-green-700 font-medium">Kurti Reliance Brand</h4>
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

export default KurtiReliance;
