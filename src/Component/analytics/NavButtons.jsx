import { useTheme } from "@/hooks/use-theme";  
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavButtons = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { theme } = useTheme(); // Assuming your theme hook provides dark/light mode
    const currentPath = location.pathname.split('?')[0];

    // Base styles that apply to all buttons
    const baseStyles = "text-sm font-medium px-4 py-2 inline-flex space-x-1 items-center";
    
    // Active state styles
    const activeStyles = "bg-blue-50 text-blue-600 border-blue-200";
    const inactiveStyles = `${
        theme === 'dark' 
        ? "bg-gray-800 text-gray-300 hover:text-blue-400 border-gray-600" 
        : "bg-white text-slate-800 hover:text-blue-600 border-slate-200"
    } hover:bg-slate-100`;

    return (
        <div className="inline-flex items-center rounded-md shadow-sm">
            <button 
                onClick={() => navigate("/HourlyChart")} 
                className={`${baseStyles} border rounded-l-lg ${
                    currentPath === "/HourlyChart" ? activeStyles : inactiveStyles
                }`}>
                <span className="hidden md:inline-block">Today</span>
            </button>
            
            <button 
                onClick={() => navigate("/YesterdayChart")} 
                className={`${baseStyles} border-y border-r border-l-0 ${
                    currentPath === "/YesterdayChart" ? activeStyles : inactiveStyles
                }`}>
                <span className="hidden md:inline-block">Yesterday</span>
            </button>
            
            <button 
                onClick={() => navigate("/WeekChart")} 
                className={`${baseStyles} border-y border-r border-l-0 ${
                    currentPath === "/WeekChart" ? activeStyles : inactiveStyles
                }`}>
                <span className="hidden md:inline-block">Week</span>
            </button>
            
            <button 
                onClick={() => navigate("/TokensPieChart")} 
                className={`${baseStyles} border-y border-r border-l-0 rounded-r-lg ${
                    currentPath === "/TokensPieChart" ? activeStyles : inactiveStyles
                }`}>
                <span className="hidden md:inline-block">Token Screening</span>
            </button>
        </div>
    );
};

export default NavButtons;