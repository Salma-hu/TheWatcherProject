import { useTheme } from "@/hooks/use-theme";  
import React from "react";

import NavButtons from "@/Component/analytics/NavButtons";
import TradesExecutedWidget from "@/Component/analytics/TradesExecutedWidget";
import AverageBuyPrice from "@/Component/analytics/AverageBuyPrice";

const AnalyticsOverviewTrading = () => {
  const { theme } = useTheme();

  const tradesExecuted = 125;
  const averageBuyPrice = 45.6789;

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {/* Stats Cards and Navigation Buttons */}
        <div className="flex justify-between items-center">
          {/* Trades widget on the far left */}
          <TradesExecutedWidget />
          {/* Navigation buttons on the far right */}
          <NavButtons />
        </div>
        <div>
          <AverageBuyPrice />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverviewTrading;
