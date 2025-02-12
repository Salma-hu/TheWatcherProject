import { useTheme } from "@/hooks/use-theme";  
import React from "react";

import NavButtons from "@/Component/analyticsScanner/NavButtons";
import TradeSummaryCard from "@/Component/analyticsTrading/TradeSummaryCard";
import PnLChart from "@/Component/analyticsTrading/PnLChart";
import RiskElements from "@/Component/analyticsTrading/RiskElements";


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
              <RiskElements />
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
