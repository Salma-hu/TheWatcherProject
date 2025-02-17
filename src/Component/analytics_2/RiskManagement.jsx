import React from "react";
import RiskElements from "@/Component/analytics_2/RiskElements";
import NumbersList from "@/Component/analytics/NumbersList";

const RiskManagement = () => {

  return (
    <div className="flex justify-between items-center">
      <h1>in the resk management</h1>
      <RiskElements/>
      <NumbersList/>
    </div>
  );
};

export default RiskManagement ;
