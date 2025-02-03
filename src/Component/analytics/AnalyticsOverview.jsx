import { useTheme } from "@/hooks/use-theme";  
import React from 'react';
import HourlyChart from "@/Component/analytics/HourlyChart";
import YesterdayChart from "@/Component/analytics/YesterdayChart";
import WeekChart from "@/Component/analytics/WeekChart";
import TokensPieChart from "@/Component/analytics/TokensPieChart";
import StatsCards from "@/Component/analytics/StatsCards";


const AnalyticsOverview = () => {
  const { theme } = useTheme();

  return (
    <div>
     <div className="flex justify-between items-center mb-10">
        <div className="flex-1 flex justify-center">
          <HourlyChart />
          <YesterdayChart />
          <WeekChart />
          <TokensPieChart />
          <StatsCards />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;