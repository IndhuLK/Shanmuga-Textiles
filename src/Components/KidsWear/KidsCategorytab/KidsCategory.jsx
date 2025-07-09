import React from 'react'
import clsx from 'clsx';

const categories = [
  { name: "Birthday Dresses", image: '/src/assets/HomeImg/img-3.jpg' },
  { name: "Umbrella Frocks", image: '/images/kurti-maxi.jpg' },
  { name: "Pavadai sattai", image: '/images/umbrella-frocks.jpg' },
  { name: "Lehenga sets for kids", image: '/images/burkas-kaftans.jpg' },
  { name: "Kurti and Chudi for Girls", image: '/images/western-tops.jpg' },
  { name: "Night Wear", image: '/images/tshirts.jpg' },
  
];

const KidsCategory = ({ selectedTab, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 font-family">
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
  )
}

export default KidsCategory