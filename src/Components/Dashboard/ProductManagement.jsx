import React, { useState, useRef } from "react";
import {
  FaEdit,
  FaTrash,
  FaExclamationTriangle,
  FaArrowLeft,
  FaArrowRight,
  FaBold,
  FaListUl,
  FaLink,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const productManagementData = [
  {
    name: "Kurti With Pant Semi-Stitched Orange And Green Floral Dress",
    image: "https://via.placeholder.com/50",
    category: "Women's wear",
    stock: 15,
    variants: "Black,Brown",
    status: "Active",
  },
  {
    name: "Kurti With Pant Semi-Stitched Orange And Green Floral Dress",
    image: "https://via.placeholder.com/50",
    category: "Women's wear",
    stock: 4,
    variants: "Grey",
    status: "Low stock",
  },
  {
    name: "Kids Birthday Dress",
    image: "https://via.placeholder.com/50",
    category: "Kid's wear",
    stock: 15,
    variants: "Violet,Brown",
    status: "Active",
  },
  {
    name: "Kids Birthday Dress",
    image: "https://via.placeholder.com/50",
    category: "Kid's wear",
    stock: 15,
    variants: "White,Brown",
    status: "Active",
  },
  {
    name: "Designer Blouse With saree",
    image: "https://via.placeholder.com/50",
    category: "Wedding & family function",
    stock: 4,
    variants: "White,Brown",
    status: "Low stock",
  },
];

const productTableData = [
  {
    name: "Kurti With Pant Semi-Stitched Orange And Green Floral Dress",
    image: "https://via.placeholder.com/50",
    category: "Women's wear",
    price: "₹1,499",
    variants: "Black,Brown",
    status: "Publish",
  },
  {
    name: "Kurti With Pant Semi-Stitched Orange And Green Floral Dress",
    image: "https://via.placeholder.com/50",
    category: "Women's wear",
    price: "₹1,499",
    variants: "Grey",
    status: "Secluded",
  },
  {
    name: "Kids Birthday Dress",
    image: "https://via.placeholder.com/50",
    category: "Kid's wear",
    price: "₹1,499",
    variants: "Violet,Brown",
    status: "Publish",
  },
  {
    name: "Kids Birthday Dress",
    image: "https://via.placeholder.com/50",
    category: "Kid's wear",
    price: "₹1,499",
    variants: "White,Brown",
    status: "Publish",
  },
  {
    name: "Designer Blouse With saree",
    image: "https://via.placeholder.com/50",
    category: "Wedding & family function",
    price: "₹1,499",
    variants: "White,Brown",
    status: "Secluded",
  },
];

const ProductManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const perPage = 4;

  // Product Management Section Pagination
  const filteredManagement = productManagementData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedManagement = filteredManagement.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  const totalPagesManagement = Math.ceil(filteredManagement.length / perPage);

  // Product Table Section Pagination
  const filteredTable = productTableData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedTable = filteredTable.slice(
    (currentTablePage - 1) * perPage,
    currentTablePage * perPage
  );
  const totalPagesTable = Math.ceil(filteredTable.length / perPage);

  //Add Product
  const [showAddForm, setShowAddForm] = useState(false); // toggle form
  const [images, setImages] = useState([null, null]);
  const fileInputRefs = useRef([]);

  const handleImageUpload = (file, index) => {
    const reader = new FileReader();
    reader.onload = () => {
      const updatedImages = [...images];
      updatedImages[index] = reader.result;
      setImages(updatedImages);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleImageUpload(file, index);
  };

  const handleFileSelect = (e, index) => {
    const file = e.target.files[0];
    if (file) handleImageUpload(file, index);
  };

  const triggerInput = (index) => {
    fileInputRefs.current[index].click();
  };

  const addPhotoBox = () => {
    setImages((prev) => [...prev, null]);
  };
  const [selected, setSelected] = useState(null);

  if (showAddForm) {
    return (
      <div className="p-6 space-y-6">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Add Product</h2>
          <div className="space-x-2">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Discard
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Secluded
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Publish
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left 2/3 Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="font-medium">Product Name</label>
              <input
                type="text"
                className="w-full mt-1 border px-3 py-2 rounded"
                placeholder="Write Name here"
              />
            </div>

            {/* Description */}
            <div>
              <label className="font-medium mb-2 block">
                Product Description
              </label>
              <div className="flex gap-2 mb-1">
                <FaBold className="cursor-pointer" />
                <FaListUl className="cursor-pointer" />
                <FaLink className="cursor-pointer" />
              </div>
              {/* Container for textarea and edit button */}
              <div className="relative">
                <textarea
                  className="w-full border px-3 py-2 rounded"
                  rows={5}
                  placeholder="Write description here"
                />
                <button className="absolute bottom-2 right-2 px-4 py-1 text-white text-sm bg-green-700 border rounded hover:bg-green-900">
                  Edit
                </button>
              </div>
            </div>

            {/* Display Images */}
            <div>
              <label className="font-medium">Display Images</label>
              <div className="relative">
                <div className="border rounded p-4 text-center text-gray-400 h-32 flex items-center justify-center">
                  Drag your photo here or Browse from device
                </div>
                <button className="absolute bottom-2 right-2 px-4 py-1 text-white text-sm bg-green-700 border rounded hover:bg-green-900">
                  Edit
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <label className="font-medium mb-2 block">Product Details</label>
              <div className="flex gap-4 flex-wrap">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => triggerInput(index)}
                    className="border rounded w-32 h-32 flex items-center justify-center text-gray-400 text-sm text-center bg-white cursor-pointer overflow-hidden relative"
                  >
                    {img ? (
                      <img
                        src={img}
                        alt="Uploaded"
                        className="object-cover w-full h-full rounded"
                      />
                    ) : (
                      <span className="px-2">Drag or Click</span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={(el) => (fileInputRefs.current[index] = el)}
                      onChange={(e) => handleFileSelect(e, index)}
                    />
                  </div>
                ))}

                <button
                  className="px-4 py-2 border rounded flex items-center gap-2 text-sm hover:bg-gray-100"
                  onClick={addPhotoBox}
                  type="button"
                >
                  <span className="text-xl">+</span> Add Photo
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <label className="font-bold block">PRICING</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Discount Price"
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Regular Price"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>

            {/* Restock */}
            <div className="space-y-2">
              <label className="font-bold block">RESTOCK</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Add to stock"
                  className="w-full border px-3 py-2 rounded"
                />
                <button className="px-4 py-2 bg-green-700 text-white rounded">
                  Confirm
                </button>
              </div>
              <p className="text-sm text-green-700 cursor-pointer">
                Click here details
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="border p-4 rounded shadow">
              <h3 className="font-semibold mb-4">ORGANIZE</h3>
              <div className="mb-3">
                <label className="text-sm font-medium">
                  Category{" "}
                  <span className="text-green-600 cursor-pointer ml-2">
                    + Add new category
                  </span>
                </label>
                <select className="w-full mt-1 border px-3 py-2 rounded">
                  <option>Women's wear</option>
                  <option>Kid's wear</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="text-sm font-medium">Collection</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>
              <div className="mb-3">
                <label className="text-sm font-medium">
                  Tags{" "}
                  <span className="text-green-600 cursor-pointer ml-2">
                    View all tags
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Women's wear"
                />
              </div>
            </div>

            <div className="border p-4 rounded shadow">
              <h3 className="font-semibold mb-4">VARIANTS</h3>
              {[1, 2].map((_, i) => (
                <div key={i} className="mb-4">
                  <div className="mb-2">
                    <label className="text-sm font-medium">
                      Option {i + 1}{" "}
                      <span className="text-red-500 cursor-pointer ml-2">
                        Remove
                      </span>
                    </label>
                    <select className="w-full mt-1 border px-3 py-2 rounded">
                      <option>Size</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Mention size"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              ))}
            </div>

            {/*Stitching product */}

            <div className="border border-green-200 p-4 rounded shadow-lg">
              <h3 className="font-semibold mb-2">Stitching Product</h3>
              <div className="flex gap-4">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`px-6 py-2 rounded border text-sm font-medium ${
                      selected === option
                        ? "bg-green-600 text-white border-green-700"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-16">
      {/* ========== Product Management ========== */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Product Management</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            + Add Product
          </button>
        </div>

        {/* Low Stock Alert */}
        {productManagementData.some((p) => p.stock < 5) && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-900 p-3 mb-4 rounded flex items-center gap-2 shadow">
            <FaExclamationTriangle className="text-yellow-600" />
            <span className="text-sm font-medium">
              <strong>Low stock alert:</strong> Some products have stock below 5
              Units
            </span>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6 max-w-md bg-white">
          <input
            type="text"
            placeholder="Search Products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full  px-4 pl-10 py-2 rounded-md shadow-lg focus:outline-none"
          />
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow rounded-md bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 font-semibold">
              <tr>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Variants</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedManagement.map((product, i) => (
                <tr key={i} className="border-t">
                  <td className="px-6 py-3">{product.name}</td>
                  <td className="px-6 py-3">
                    <img
                      src={product.image}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-3">{product.category}</td>
                  <td className="px-6 py-3">{product.stock}</td>
                  <td className="px-6 py-3">
                    {product.status === "Active" ? (
                      <span className="text-green-600 font-medium">Active</span>
                    ) : (
                      <span className="text-red-600 font-medium inline-flex gap-1 items-center">
                        Low stock{" "}
                        <FaExclamationTriangle className="text-red-500" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3">{product.variants}</td>
                  <td className="px-6 py-3 space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end items-center p-4 bg-gray-50">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              <FaArrowLeft />
            </button>
            {[...Array(totalPagesManagement)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 mx-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPagesManagement))
              }
              disabled={currentPage === totalPagesManagement}
              className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* ========== Product Table ========== */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Product Table</h2>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            + Add Products
          </button>
        </div>

        <div className="relative mb-6 max-w-md bg-white">
          <input
            type="text"
            placeholder="Search Products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 pl-10 py-2 rounded-md shadow-lg focus:outline-none"
          />
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
        </div>

        <div className="overflow-x-auto shadow rounded-md bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 font-semibold">
              <tr>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Variants</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTable.map((product, i) => (
                <tr key={i} className="border-t">
                  <td className="px-6 py-3">{product.name}</td>
                  <td className="px-6 py-3">
                    <img
                      src={product.image}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-3">{product.category}</td>
                  <td className="px-6 py-3">{product.price}</td>
                  <td className="px-6 py-3">{product.variants}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`font-medium ${
                        product.status === "Publish"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end items-center p-4 bg-gray-50">
            <button
              onClick={() => setCurrentTablePage((p) => Math.max(p - 1, 1))}
              disabled={currentTablePage === 1}
              className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              <FaArrowLeft />
            </button>
            {[...Array(totalPagesTable)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTablePage(i + 1)}
                className={`px-3 py-1 mx-1 rounded-md ${
                  currentTablePage === i + 1
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentTablePage((p) => Math.min(p + 1, totalPagesTable))
              }
              disabled={currentTablePage === totalPagesTable}
              className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
