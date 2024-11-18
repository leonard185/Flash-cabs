"use client"
import React, { useState } from "react";
import { User, ChevronDown } from "lucide-react"; // Importing icons from react-feather for the user and chevron down icons

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => setIsOpen(!isOpen); // Function to toggle dropdown

  return (
    <div className="relative inline-block text-left">
      {/* Button with User Icon, Name, and Chevron Down */}
      <button
        onClick={toggleDropdown}
        className="flex justify-center items-center font-bold py-2 px-4 rounded-full border border-black space-x-2"
      >
        <User /> {/* User Icon */}
        <p>User Name</p> {/* User Name */}
        <ChevronDown /> {/* Chevron Down Icon */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
