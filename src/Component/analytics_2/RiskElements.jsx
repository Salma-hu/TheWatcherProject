import React from "react";



const KPIListItem = ({ title, value, description, trend }) => {
    const trendColor = trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-500';
    const trendIcon = trend > 0 ? '▲' : trend < 0 ? '▼' : '';
  
    return (
      <div className="flex items-center justify-between px-2 py-3 border-b last:border-b-0 hover:bg-[rgb(255,212,212)] transition-colors">
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-700 truncate">{title}</p>
          {description && (
            <p className="text-xs text-gray-400 truncate">{description}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-gray-900">{value}</p>
          {/* {trend !== undefined && (
            <span className={`${trendColor} text-xs`}>
              {trendIcon} {Math.abs(trend)}%
            </span>
          )} */}
        </div>
      </div>
    );
  };
  
  const RiskElements = () => {
    const metrics = [
      { title: 'Avg Slippage Impact Tracker', value: '45%', description: 'Slippage percentage' },
      { title: 'Avg Liquidity Depth Monitor', value: '32%', description: 'Available liquidity'},
      { title: 'Liquidity Lock Validator', value: '121', description: 'Tracks failed liquidity locks'},
    //   { title: 'Tokens Identified', value: '12,345', description: 'Today’s tokens', trend: 10 },
    ];
  
    return (
      // <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
        <div className="max-w-xs w-full bg-white shadow rounded-lg overflow-hidden">
          {/* Added title inside the list */}
          <div className="bg-[rgb(252,157,157)] text-gray-700 font-bold text-center py-2 text-sm">
            Risk Elements
          </div>
          {metrics.map((metric, index) => (
            <KPIListItem key={index} {...metric} />
          ))}
        </div>
    
    );
  };
  
  export default RiskElements;