import React, { useState } from 'react'
import BirthdayDresses from './BirthdayDresses';
import KidsCategory from './KidsCategorytab/kidsCategory';

const topRatedProducts = [
  {
    id: 1,
    title: 'O2 Fitness Health Care 200-Q2 3D – Business Class Model',
    image: "",
    oldPrice: '₹2,10,000',
    price: '₹1,70,000',
    rating: '4.6',
    reviews: '1,234',
    tag: 'Massage Chair',
  },
  // ... (other products)
];

const categoryComponents = {
  'Birthday Dresses': <BirthdayDresses />,
  // Add more components if needed
};
const Kids = () => {
    const [selectedCategory, setSelectedCategory] = useState("Birthday Dresses");
  return (
    
     // Change px-10 to a responsive padding
    <div className="px-4 sm:px-10 py-8"> {/* Adjusted padding */}
      <KidsCategory
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />
      <div className="my-4">{categoryComponents[selectedCategory] || null}</div>
    </div>
    
  )
}

export default Kids