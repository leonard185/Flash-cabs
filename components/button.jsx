'use client'
import React, { useState } from "react";
import { ChevronDown, ChevronUp, icons, User, ShoppingBag, Languages, LogOut } from 'lucide-react'



const Button = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

    const toggleDropdown = () => setIsOpen(!isOpen); // Function to toggle dropdown

    return (
        <div className="relative inline-block text-left">
            {/* Button with User Icon, Name, and Chevron Down */}
            <button
            aria-label="user profile"
                onClick={toggleDropdown}
                className="flex justify-center items-center font-bold py-2 px-4 rounded-full border border-black space-x-2"
            >
                <User /> {/* User Icon */}
                <p className="hidden md:block">User Name</p> {/* User Name */}
                {isOpen ? (<ChevronUp />) : <ChevronDown />}

            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                        <p> My Account</p>
                        {menuLinks.map((link, idx) => (

                            <div key={idx} className="flex items-center gap-1">

                                <link.icon />
                                <a
                                    href={link.link}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >

                                    {link.name}
                                </a>
                            </div>


                        ))}


                    </div>
                </div>
            )}
        </div>
    );
};

const menuLinks = [
    { name: 'Orders', link: '/orders', icon: ShoppingBag },
    { name: 'Account', link: '/account', icon: User },
    { name: 'Languages', link: '/languages', icon: Languages },
    { name: 'Logout', link: '/logout', icon: LogOut },
];


export default Button