import React from "react";
import { TrendingUp, Calendar, BarChart2 } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Today",
      value: "2,340",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Yesterday",
      value: "5,355",
      icon: <Calendar className="w-5 h-5 text-green-500" />
    },
    {
      title: "Week",
      value: "38,596",
      icon: <BarChart2 className="w-5 h-5 text-purple-500" />
    }
  ];

  return (
    <div className="p-2">
      <div className="flex flex-wrap gap-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-sm"
          >
            <div>{stat.icon}</div>
            <div>
              <div className="text-xs text-gray-500">{stat.title}</div>
              <div className="font-bold text-gray-900 dark:text-white text-sm">
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
