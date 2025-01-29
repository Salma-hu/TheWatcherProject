import { useTheme } from "@/hooks/use-theme";  
import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
    const navigate = useNavigate();

    return (
        <div className="inline-flex items-center rounded-md shadow-sm">
            <button
                onClick={() => navigate("/HourlyChart")}
                className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
            >
                <span className="hidden md:inline-block">Day</span>
            </button>
            <button
                onClick={() => navigate("/YesterdayChart")}
                className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center"
            >
                <span className="hidden md:inline-block">Yesterday</span>
            </button>
            <button
                onClick={() => navigate("/ChartWeek")}
                className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
            >
                <span className="hidden md:inline-block">Week</span>
            </button>
        </div>
    );
};

export default NavButtons;
