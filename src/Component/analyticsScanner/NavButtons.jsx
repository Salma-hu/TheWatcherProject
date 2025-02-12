import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BarChart, User } from "lucide-react";

const NavButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("?")[0];

  return (
    <div className="flex items-center bg-white rounded-full p-1 shadow-lg space-x-2">
      <button
        onClick={() => navigate("/AnalyticsOverviewScanner")}
        className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition ${
          currentPath === "/AnalyticsOverviewScanner"
            ? "bg-blue-300 text-white shadow-md"
            : "text-blue-500 hover:bg-blue-100"
        }`}
      >
        <BarChart size={14} />
        <span>Scanner Bot KPIs</span>
      </button>
      <button
        onClick={() => navigate("/AnalyticsOverviewTrading")}
        className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition ${
          currentPath === "/AnalyticsOverviewTrading"
            ? "bg-blue-300 text-white shadow-md"
            : "text-blue-500 hover:bg-blue-100"
        }`}
      >
        <User size={14} />
        <span>Trading Bot KPIs</span>
      </button>
    </div>
  );
};

export default NavButtons;
