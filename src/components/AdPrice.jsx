import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const AdPrice = () => {
  return (
    <div className="max-w-[280px] mx-auto mt-6 space-y-4 font-sans">
      {/* Price Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="text-gray-500 text-sm">Price:</div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black">₦2,340</span>
          <span className="text-gray-400 line-through text-sm">₦3,340</span>
        </div>
        <button className="mt-3 w-full py-2 text-[#1f999a] border border-[#1f999a] rounded-lg font-medium hover:bg-[#1f999a] hover:text-white transition">
          Request call back
        </button>
      </div>

      {/* Seller Info */}
      <div className="bg-white shadow rounded-lg p-5 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h2 className="font-semibold text-[16px] mt-2">James Bond</h2>
        <p className="text-gray-400 text-xs mb-2">Member since: 2018</p>

        <div className="text-gray-500 text-sm space-y-1">
          <p>🇳🇬 Nigeria, Nigeria</p>
          <p className="text-green-600 font-medium">Verified Seller</p>
          <p>Last Seen: 4 hours ago</p>
          <p className="text-blue-500">Jamesbond458@gmail.com</p>
          <p>+1 478 343 987</p>
        </div>

        <button className="mt-3 w-full py-2 bg-[#1f999a] text-white rounded-lg font-medium hover:bg-[#178080] transition">
          Start Chat
        </button>
        <button className="mt-2 w-full py-2 text-[#1f999a] border border-[#1f999a] rounded-lg font-medium hover:bg-[#1f999a] hover:text-white transition">
          Show Contact
        </button>
      </div>

      {/* Share Section */}
      <div className="bg-white shadow rounded-lg p-3 text-center">
        <p className="text-gray-500 text-sm mb-2">Share it</p>
        <div className="flex justify-center space-x-4 text-[#1f999a]">
          <FaLinkedin className="cursor-pointer hover:text-[#0A66C2]" />
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          <FaTwitter className="cursor-pointer hover:text-[#1DA1F2]" />
          <FaFacebookF className="cursor-pointer hover:text-[#1877F2]" />
        </div>
      </div>
    </div>
  );
};

export default AdPrice;
