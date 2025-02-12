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
        <div className="flex justify-between items-center">
          <TradeSummaryCard />
          <NavButtons />
        </div>
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 row-span-3">
              {/* <AverageTimeList /> */}
            </div>
            <div className="col-span-3 flex flex-col gap-4">
              <PnLChart />
            </div>
          </div>
      </div>
    </div>
  );
};

export default AnalyticsOverviewTrading;
