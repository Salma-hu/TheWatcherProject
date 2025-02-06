import { useTheme } from "@/hooks/use-theme";  
import React from "react";

import NavButtons from "@/Component/analytics/NavButtons";

const AnalyticsOverviewTrading = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-between items-center">
          <div></div>
          <NavButtons />
    </div>
  );
};

export default AnalyticsOverviewTrading;
