import { useTheme } from "@/hooks/use-theme";  
import React from "react";

import NavButtons from "@/Component/analyticsScanner/NavButtons";
import TradeSummaryCard from "@/Component/analyticsTrading/TradeSummaryCard";
import PnLChart from "@/Component/analyticsTrading/PnLChart";
import RiskElements from "@/Component/analyticsTrading/RiskElements";
import WinRateGauge from "@/Component/analyticsTrading/WinRateGauge";
import FailedTransactions from "@/Component/analyticsTrading/FailedTransactions";
import GasFeesCard from "@/Component/analyticsTrading/GasFeesCard";


const AnalyticsOverviewTrading = () => {
  const { theme } = useTheme();
  
  return (
    <div className="p-4">
      <div className="grid gap-4">
        <div className="flex justify-between items-center">
          <TradeSummaryCard />
          <NavButtons />
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <GasFeesCard totalGasFees={0.25} />
        </div>

      </div>
    </div>
  );
};

export default AnalyticsOverviewTrading;
