import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import faqImage from '../../assets/Contact/Contact.png'; // 🖼️ Your image path

const faqs = [
  {
    question: 'Do you provide stitching services for all products?',
    answer: 'Yes, we provide stitching services for most of our products. You can select stitching during checkout.',
  },
  {
    question: 'What is Aari work, and can I customize it?',
    answer: 'Aari work is a traditional hand embroidery. Yes, we accept customization based on your design or pattern.',
  },
  {
    question: 'How long does it take for stitching and delivery?',
    answer: 'Stitching usually takes 5–7 working days. Delivery time depends on your location.',
  },
  {
    question: 'Do you accept returns or exchanges?',
    answer: 'Yes, we accept returns and exchanges within 7 days of delivery under certain conditions.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-12 font-family">
      {/* Centered Title and Description */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-2xl md:text-3xl text-green-800 font-bold mb-4">
          Frequently Asked by Our Shoppers
        </h1>
        <p className="text-sm text-gray-600 leading-loose">
          We’ve compiled answers to the most common questions about our women’s and kids’ clothing collections,
          custom stitching, Aari embroidery, delivery, and returns. If you still need help, feel free to contact
          our support team — we’re happy to assist.
        </p>
      </div>

      {/* FAQ and Image Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-10">
        {/* Left: Accordion */}
        <div className="space-y-8 md:mt-15">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                {item.question}
                <span className="text-xl">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="max-w-lg w-full md:max-w-3xl "
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
