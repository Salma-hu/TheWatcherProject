import { useTheme } from "@/hooks/use-theme";  
import React from "react";
import HourlyChart from "@/Component/analyticsScanner/HourlyChart";
import WeekChart from "@/Component/analyticsScanner/WeekChart";
import TokensPieChart from "@/Component/analyticsScanner/TokensPieChart";
import StatsCards from "@/Component/analyticsScanner/StatsCards";
import AverageTimeList from "@/Component/analyticsScanner/AverageTimeList";
import RejectionChart from "@/Component/analyticsScanner/RejectionChart";
import NavButtons from "@/Component/analyticsScanner/NavButtons";

const AnalyticsOverviewScanner = () => {
  const { theme } = useTheme();

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {/* Stats Cards and Navigation Buttons */}
        <div className="flex justify-between items-center">
          <StatsCards />
          <NavButtons />
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

        {/* RejectionChart (1/4) and AverageTimeList (3/4) spanning full height */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 flex flex-col gap-4">
            <RejectionChart />
          </div>
          <div className="col-span-1 row-span-3">
            <AverageTimeList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverviewScanner;
