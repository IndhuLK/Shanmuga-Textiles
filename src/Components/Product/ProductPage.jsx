import React, { useState } from "react";
import { Heart, Minus, Plus, Truck } from "lucide-react";
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { FaShareAlt } from "react-icons/fa";
import saree1 from '../../assets/Sarees/MysoreSilk/IMG_1255.jpg'
import saree2 from '../../assets/Sarees/MysoreSilk/IMG_1256.jpg'
import saree3 from '../../assets/Sarees/MysoreSilk/IMG_1257.jpg'
import saree4 from '../../assets/Sarees/MysoreSilk/IMG_1258.jpg'
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", form);
    // Optional: Add API call or toast here
    setShowPopup(false);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

   const [showForm, setShowForm] = useState(false);
  const [review, setReview] = useState({
    rating: 0,
    title: '',
    comment: '',
    name: '',
    email: '',
    image: null,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setReview({ ...review, image: file });
  };

  const [showFormReview, setShowFormReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const [open, setOpen] = useState(false);
  const link = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const images = [saree1, saree2, saree3, saree4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-10">
      {/* Left - Image */}
     <div className="flex flex-col lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            onClick={() => setSelectedImage(img)}
            className={`w-28 h-36 object-cover cursor-pointer border-2 ${
              selectedImage === img ? "border-blue-500" : "border-transparent"
            } rounded`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex justify-center items-center">
        <img
          src={selectedImage}
          alt="Selected Saree"
          className="w-full h-full object-cover rounded cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <Dialog.Panel className="relative">
            <img src={selectedImage} alt="Full View" className="max-h-[90vh] rounded shadow-lg" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded"
            >
              <X size={24} />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>

      {/* Right - Details */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">
          Multi Color Linen Cotton Saree
        </h1>
        <p className="text-green-700 text-xl font-bold">
          Rs. 418.00{" "}
          <span className="line-through text-gray-500 text-base ml-2">
            Rs. 690.00
          </span>
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="p-2 bg-gray-200 rounded"
          >
            <Minus size={18} />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="p-2 bg-gray-200 rounded"
          >
            <Plus size={18} />
          </button>
          
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-black text-white px-6 py-3 rounded font-semibold">
            ADD TO CART
          </button>
          <button className="bg-green-700 text-white px-6 py-3 rounded font-semibold">
            BUY IT NOW
          </button>
        </div>

        {/* Wishlist & Info */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-green-700">
            <Heart size={20} />
          </button>
          <button
            onClick={() => setShowPopup(true)}
            className="text-sm underline text-gray-700 hover:text-green-700"
          >
            Ask a question
          </button>
          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-50">
              <div className="bg-white w-[90%] max-w-md rounded-md shadow-lg p-6 relative">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold text-center mb-4">
                  Ask a Question
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="w-full border px-4 py-2 rounded"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full border px-4 py-2 rounded"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    required
                    className="w-full border px-4 py-2 rounded"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="Your Message*"
                    required
                    className="w-full border px-4 py-2 rounded"
                    rows="4"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  <p className="text-xs text-gray-500 italic">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                  >
                    SUBMIT NOW
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="relative inline-block">
      {/* Share Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 text-gray-700 hover:text-black"
      >
        <FaShareAlt />
        Share
      </button>

      {/* Popup */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold">Share this page</h3>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-800">
              <IoMdClose />
            </button>
          </div>

          <div className="mb-3">
            <input
              type="text"
              readOnly
              value={link}
              className="w-full text-sm border px-2 py-1 rounded"
            />
            <button
              onClick={copyToClipboard}
              className="mt-2 w-full bg-blue-600 text-white py-1 text-sm rounded hover:bg-blue-700"
            >
              Copy Link
            </button>
          </div>

          <div className="flex justify-between">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(link)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-green-600"
            >
              <FaWhatsapp size={24} />
              <span className="text-xs">WhatsApp</span>
            </a>
            <a
              href={`mailto:?subject=Check this out&body=${link}`}
              className="flex flex-col items-center text-red-500"
            >
              <MdEmail size={24} />
              <span className="text-xs">Email</span>
            </a>
            <a
              href={`https://www.instagram.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-pink-600"
            >
              <FaInstagram size={24} />
              <span className="text-xs">Instagram</span>
            </a>
          </div>
        </div>
      )}
    </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-600">
          <strong>Disclaimer:</strong> Product color may slightly vary due to
          photographic lighting sources or your monitor settings
        </p>

        {/* Delivery Info */}
        <div className="flex items-start gap-2 mt-2">
          <Truck className="text-green-700 mt-1" size={18} />
          <div className="text-sm text-gray-700">
            <p>
              <strong>Estimated Delivery:</strong> Jul 21 - Jul 25
            </p>
            <p className="text-xs mt-1 text-gray-500">
              Return & Replacements within 5 days of purchase for product
              damages only
              <br />
              (*Offer product / Innerwear / Imitation Jewellery / Discount
              products are not eligible to return/exchange)
            </p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="mt-6 border-t divide-y">
          <details className="py-3 cursor-pointer">
            <summary className="font-semibold text-sm text-green-700">
              Product Description
            </summary>
            <div className="text-sm mt-2 text-gray-700">
              <p>
                <strong>Fabric:</strong> Linen Cotton
              </p>
              <p>
                <strong>Texture:</strong> Soft, breathable, and slightly crisp
              </p>
              <p>
                <strong>Occasions:</strong> Casual, office wear, festive events,
                and semi-formal gatherings
              </p>
              <p>
                <strong>Care Instructions:</strong> Hand wash or dry clean
                recommended; avoid direct sunlight while drying
              </p>
            </div>
          </details>

          <details className="py-3 cursor-pointer">
            <summary className="font-semibold text-sm text-green-700">
              Shipping
            </summary>
            <p className="text-sm mt-2 text-gray-700">
              We usually dispatch within 24–48 hours of order confirmation.
            </p>
          </details>

          <details className="py-3 cursor-pointer">
            <summary className="font-semibold text-sm text-green-700">
              Replacements & Exchanges
            </summary>
            <p className="text-sm mt-2 text-gray-700">
              Products can be returned/exchanged within 5 days if they arrive
              damaged or defective.
            </p>
          </details>
        </div>
      </div>
    </div>


    {/* customer review */}

   <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-center text-xl font-semibold mb-6">Customer Reviews</h2>

      {/* Review Summary */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-green-900">
          {[...Array(5)].map((_, index) => (
            <FaRegStar key={index} />
          ))}
          <span className="text-gray-700 ml-2">Be the first to write a review</span>
        </div>

        <button
          onClick={() => setShowFormReview(!showForm)}
          className="bg-green-900 text-white px-5 py-2 font-semibold rounded hover:bg-green-800"
        >
          {showForm ? 'Cancel review' : 'Write a review'}
        </button>
      </div>

      {/* Review Form */}
      {showFormReview && (
        <div className="mt-10 space-y-6 border-t pt-6">
          <h3 className="text-lg font-bold">Write a review</h3>

          {/* Rating */}
          <div>
            <p className="mb-1 font-medium">Rating</p>
            <div className="flex space-x-1 text-green-900">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={index}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                    className="cursor-pointer"
                  >
                    {starValue <= (hover || rating) ? <FaStar /> : <FaRegStar />}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Title */}
          <input
            type="text"
            placeholder="Give your review a title"
            className="w-full border px-3 py-2 rounded text-sm"
          />

          {/* Comment */}
          <textarea
            placeholder="Write your comments here"
            rows="4"
            className="w-full border px-3 py-2 rounded text-sm"
          ></textarea>

          {/* Image Upload */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Picture/Video (optional)</p>
            <label className="inline-block border border-dashed border-gray-400 p-6 rounded cursor-pointer hover:bg-gray-50">
              <input type="file" className="hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </label>
          </div>

          {/* Name and Email */}
          <input
            type="text"
            placeholder="Enter your name (public)"
            className="w-full border px-3 py-2 rounded text-sm"
          />
          <input
            type="email"
            placeholder="Enter your email (private)"
            className="w-full border px-3 py-2 rounded text-sm"
          />

          {/* Policy Text */}
          <p className="text-xs text-gray-600 mt-2">
            How we use your data: We’ll only contact you about the review you left, and only if necessary.
            By submitting your review, you agree to our terms, privacy, and content policies.
          </p>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setShowFormReview(false)}
              className="px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-100"
            >
              Cancel review
            </button>
            <button className="px-4 py-2 bg-green-900 text-white rounded text-sm hover:bg-green-800">
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductPage;
