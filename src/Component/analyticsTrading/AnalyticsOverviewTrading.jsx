import { useTheme } from "@/hooks/use-theme";  
import React from "react";

import NavButtons from "@/Component/analyticsScanner/NavButtons";
import TradeSummaryCard from "@/Component/analyticsTrading/TradeSummaryCard";
import PnLChart from "@/Component/analyticsTrading/PnLChart";
import RiskElements from "@/Component/analyticsTrading/RiskElements";
import WinRateGauge from "@/Component/analyticsTrading/WinRateGauge";
import FailedTransactions from "@/Component/analyticsTrading/FailedTransactions";


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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <WinRateGauge winRate={75} />
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <FailedTransactions/>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverviewTrading;
