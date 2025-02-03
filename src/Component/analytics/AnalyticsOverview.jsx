import { useTheme } from "@/hooks/use-theme";  
import React from "react";
import HourlyChart from "@/Component/analytics/HourlyChart";
import WeekChart from "@/Component/analytics/WeekChart";
import TokensPieChart from "@/Component/analytics/TokensPieChart";
import StatsCards from "@/Component/analytics/StatsCards";

const AnalyticsOverview = () => {
  const { theme } = useTheme();

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {/* Stats Cards */}
        <div>
          <StatsCards />
        </div>

        {/* Hourly Chart (Full Width) */}
        <div className="grid grid-cols-1">
          <HourlyChart />
        </div>

        {/* TokensPieChart & WeekChart side by side */}
        <div className="grid grid-cols-2 gap-4">
          <TokensPieChart />
          <WeekChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
