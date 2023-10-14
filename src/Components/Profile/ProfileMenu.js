import React, { useState } from "react";

const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left z-10"> {/* Increase z-index */}
            <button
                onClick={toggleMenu}
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14" />
                </svg>
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"> {/* Increase z-index */}
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100">
                            Settings
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100">
                            Sign out
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
