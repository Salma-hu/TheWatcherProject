import React, { useState, useRef, useEffect } from "react";
import profileImg from "@/assets/profile-image.jpg";
import { Link } from "react-router-dom";

const languages = [
    { name: "English", flag: "🇺🇸" },
    { name: "Mandarin", flag: "🇨🇳" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "German", flag: "🇩🇪" },
    { name: "French", flag: "🇫🇷" },
];

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[3]);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsLangOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            {/* Avatar Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative rounded-full focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <img
                    src={profileImg}
                    alt="User Avatar"
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                        isOpen ? "border-blue-500" : "border-transparent group-hover:border-blue-200"
                    }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-4"
                    role="menu"
                >
                    {/* User Info */}
                    <div className="flex items-start gap-4 pb-4 relative border-b border-gray-100">
                        <img
                            src={profileImg}
                            alt="User Avatar"
                            className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                        />
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">Alvena Doe</h3>
                            <p className="text-sm text-gray-500">admin@demo.com</p>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <ul className="mt-4 space-y-2">
                        <li
                            role="menuitem"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-gray-700">My Profile</span>
                        </li>

                        {/* Language Selector */}
                        <li 
                            className="relative p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            role="menuitem"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 12h18M3 19h18" />
                                    </svg>
                                    <span className="text-blue-600 font-medium">Language</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                                    <span className="text-sm">{selectedLang.flag} {selectedLang.name}</span>
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Language Dropdown */}
                            {isLangOpen && (
                                <ul className="absolute right-0 top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                                    {languages.map((lang) => (
                                        <li 
                                            key={lang.name}
                                            onClick={() => {
                                                setSelectedLang(lang);
                                                setIsLangOpen(false);
                                            }}
                                            className={`flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 cursor-pointer transition-colors ${
                                                selectedLang.name === lang.name ? "bg-blue-50" : ""
                                            }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-lg">{lang.flag}</span>
                                                <span className="text-gray-700">{lang.name}</span>
                                            </div>
                                            {selectedLang.name === lang.name && (
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Sign Out */}
                        <li
                            role="menuitem"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors text-red-600"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <Link  to="/SignUp"><span className="font-medium">Sign Out</span></Link> 
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserMenu;