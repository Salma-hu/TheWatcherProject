import React from "react";
import { TrendingUp, Calendar, BarChart2 } from "lucide-react";

const StatsCards = () => {
    const stats = [
        { title: "To day", value: "254,789", icon: <TrendingUp className="w-4 h-4 text-blue-500" /> },
        { title: "Yesterday", value: "2,000", icon: <Calendar className="w-4 h-4 text-green-500" /> },
        { title: "Week", value: "7,000", icon: <BarChart2 className="w-4 h-4 text-purple-500" /> }
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-2">
            <div className="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 divide-x divide-gray-300 dark:divide-gray-700">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center justify-center px-4 py-2 min-w-[100px] text-xs ${
                            index === 0 ? "rounded-l-md" : index === stats.length - 1 ? "rounded-r-md" : ""
                        }`}>
                        {stat.icon}
                        <span className="font-medium text-gray-700 dark:text-gray-300">{stat.title}</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsCards;
