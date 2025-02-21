import React from "react";
import { useTheme } from "@/hooks/use-theme";

const KPIListItem = ({ title, value, description }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`flex items-center justify-between px-2 py-3 border-b last:border-b-0 transition-colors
        ${isDarkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-red-100"}`}
    >
      <div className="flex-1">
        <p className={`text-xs font-semibold truncate ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          {title}
        </p>
        {description && (
          <p className={`text-xs truncate ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            {description}
          </p>
        )}
      </div>
      <div className="text-right">
        <p className={`text-sm font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>{value}</p>
      </div>
    </div>
  );
};

const RiskElements = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const metrics = [
    { title: "Avg Slippage Impact Tracker", value: "45%", description: "Slippage percentage" },
    { title: "Avg Liquidity Depth Monitor", value: "32%", description: "Available liquidity" },
    { title: "Liquidity Lock Validator", value: "121", description: "Tracks failed liquidity locks" },
  ];

  return (
    <div
      className={`max-w-xs w-full shadow rounded-lg overflow-hidden
        ${isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"}`}
    >
      <div
        className={`font-bold text-center py-2 text-sm
          ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-red-300 text-gray-700"}`}
      >
        Risk Elements
      </div>
      {metrics.map((metric, index) => (
        <KPIListItem key={index} {...metric} />
      ))}
    </div>
  );
};

export default RiskElements;
