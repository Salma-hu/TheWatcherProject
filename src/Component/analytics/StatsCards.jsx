import React from "react";
import { TrendingUp, Calendar, BarChart2 } from "lucide-react";

const StatsCards = () => {
  const stats = [
    { title: "Today", value: "2,340", percentage: "14.6%", change: "up", icon: <TrendingUp className="w-8 h-8 text-blue-500" /> },
    { title: "Yesterday", value: "5,355", percentage: "32.9%", change: "up", icon: <Calendar className="w-8 h-8 text-green-500" /> },
    { title: "Week", value: "38596", percentage: "-2.7%", change: "down", icon: <BarChart2 className="w-8 h-8 text-purple-500" /> }
  ];

  return (
    <div className="w-full p-4 lg:p-6 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col justify-between p-4 sm:p-6 h-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  {stat.icon}
                </div>
                <div className="text-gray-500 text-sm">
                  {stat.title} Value
                </div>
                <div className={`text-sm font-medium flex items-center ${stat.change === "up" ? "text-green-500" : "text-red-500"}`}>
                  {stat.percentage} {stat.change === "up" ? "↑" : "↓"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCards;