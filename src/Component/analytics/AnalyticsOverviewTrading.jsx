import { useTheme } from "@/hooks/use-theme";  
import React from "react";

import NavButtons from "@/Component/analytics/NavButtons";
import TradeSummaryCard from "@/Component/analytics/TradeSummaryCard";
import PnLChart from "@/Component/analytics/PnLChart";

const AnalyticsOverviewTrading = () => {
  const { theme } = useTheme();

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {/* Stats Cards and Navigation Buttons */}
        <div className="flex justify-between items-center">
          {/* Trades widget on the far left */}
          <TradeSummaryCard />
          {/* Navigation buttons on the far right */}
          <NavButtons />
        </div>

        <div>
          <PnLChart />a
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverviewTrading;
