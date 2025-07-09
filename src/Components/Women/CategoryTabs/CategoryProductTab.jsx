import React from 'react';
import clsx from 'clsx';
import Maxi1 from "/src/assets/Kurtiwith-Pant/IMG_1157.jpg"
import Bittu0809 from "/src/assets/Bittukurti/IMG_0809.jpg"
import KR0774 from "/src/assets/KurtiReliance/IMG_0774.jpg"
import PS1210 from "/src/assets/Plazzo-Set/IMG_1210.jpg"
import DTop0848 from '/src/assets/Digital-top/IMG_0848.jpg';
import CTop0854 from "/src/assets/Cotton-top/IMG_0854.jpg"

const categories = [
  { name: 'Kurti with Pants', image: Maxi1 },
  { name: 'Bittu Maxi', image: Bittu0809 },
  { name: 'Kurti- Reliance Brand', image: KR0774 },
  { name: 'Plazzo Set', image: PS1210 },
  { name: 'Cotton Top', image: CTop0854 },
  { name: 'Digital Top', image: DTop0848},
  {name: 'Western Top', image:""},
  { name: 'Night Wear', image: '/images/nightwear.jpg' },
];

const CategoryProductTab = ({ selectedTab, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className="flex flex-col items-center space-y-2 cursor-pointer"
        >
          <div
            className="p-[2px] rounded-full transition"
            style={{
              background:
                selectedTab === cat.name
                  ? '#33774b'
                  : 'linear-gradient(to bottom, #33774b, #2c518c)',
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-white"
            />
          </div>
          <button
            className={clsx(
              'text-sm font-medium transition',
              selectedTab === cat.name
                ? 'text-[#33774b]'
                : 'text-gray-800 hover:text-green-700'
            )}
          >
            {cat.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryProductTab;
