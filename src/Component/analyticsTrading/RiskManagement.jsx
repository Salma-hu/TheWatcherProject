import React from "react";
import NumbersList from "@/Component/analyticsScanner/NumbersList";
import RiskElements from "@/Component/analyticsTrading/RiskElements";

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
