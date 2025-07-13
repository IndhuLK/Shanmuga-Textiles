import React, { useState } from "react";
import { Bell } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import Logo from "../../assets/HomeImg/Logo.png";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";
import ReviewModeration from "./ReviewModeration";
import CMS from "./CMS";

const userImg = "https://i.pravatar.cc/40";

const DashBoard = ({ username = "Ram" }) => {
  const [active, setActive] = useState("Dash board");
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 py-3 bg-white shadow-xl gap-4 sm:gap-0">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
          <p className="text-xl font-semibold bg-gradient-to-r from-[#32754c] to-[#2a469e] bg-clip-text text-transparent">
            Shree Shanmuga Textiles
          </p>
        </div>

        {/* Welcome Message */}
        <div className="text-lg font-semibold text-center sm:text-left">
          Hi {username} 👋
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1.5 w-[180px] md:w-[220px] rounded-md shadow-xl text-sm"
            />
            <FaSearch className="absolute top-2.5 left-2 text-gray-500 text-sm" />
          </div>
          <Bell className="w-5 h-5 text-gray-700 cursor-pointer" />
          <img
            src={userImg}
            alt="User"
            className="h-8 w-8 rounded-full border object-cover cursor-pointer"
            onClick={toggleProfile}
          />
        </div>
      </header>

     {showProfile && (
  <div className="bg-white shadow p-6 mx-4 mt-4 rounded space-y-6">
    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Profile Card */}
      <div className="bg-gray-50 rounded shadow p-4 flex flex-col items-center justify-center text-center">
        <img
          src={userImg}
          alt="Profile"
          className="h-20 w-20 rounded-full object-cover border"
        />
        <h2 className="text-xl font-semibold mt-2">{username}</h2>
        <p className="text-green-600 text-sm">Admin</p>
        <p className="text-sm text-gray-500">last Visit &nbsp; 01 Jul 2025:05:00pm</p>
        <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
          Logout
        </button>
      </div>

      {/* Right: Contact Details */}
      <div className="bg-gray-50 rounded shadow p-4 space-y-2 text-sm text-gray-700">
        <p>📧 ram@gmail.com</p>
        <p>📍 12th Block, Asv Appartments, Chennai</p>
        <p>📞 +91 987654321</p>
        <p>💬 +91 987654321</p>
      </div>
    </div>

    {/* Form Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">My Profile Details</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded px-4 py-2" placeholder="First Name" value="Ram" />
        <input className="border rounded px-4 py-2" placeholder="Country" value="India" />
        <input className="border rounded px-4 py-2" placeholder="Last Name" value="Ram" />
        <input className="border rounded px-4 py-2" placeholder="City" value="Chennai" />
        <input className="border rounded px-4 py-2" placeholder="Email" value="ram@gmail.com" />
        <input className="border rounded px-4 py-2" placeholder="State" value="Tamil Nadu" />
        <input className="border rounded px-4 py-2" placeholder="Phone Number" value="+91 987654321" />
        <input className="border rounded px-4 py-2" placeholder="Whatsapp Number" value="+91 987654321" />
        <div className="relative">
          <input type="password" className="border rounded px-4 py-2 w-full" placeholder="Password" value="********" />
          <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">👁️</span>
        </div>
        <input className="border rounded px-4 py-2 col-span-2" placeholder="Address" value="12th Block, Asv Appartments, Chennai" />
      </div>
      <div className="mt-2">
        <button className="text-sm text-green-600 underline">Change Password</button>
      </div>
      <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Update Information
      </button>
    </div>
  </div>
)}


      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Sidebar on left */}
        <div className="w-full lg:w-1/5">
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {active === "Dash board" && <DashboardContent />}
          {active === "Product Management" && <ProductManagement />}
          {active === "Order Management" && <OrderManagement />}
          {active === "User Management" && <UserManagement />}
          {active === "Reviews & Ratings Moderation" && <ReviewModeration />}
          {active === "CMS" && <CMS />}
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
