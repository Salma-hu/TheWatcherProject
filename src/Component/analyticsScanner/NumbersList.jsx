import React from 'react';

const KPIListItem = ({ title, value, description, trend }) => {
  const trendColor = trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-500';
  const trendIcon = trend > 0 ? '▲' : trend < 0 ? '▼' : '';

  return (
    <div className="flex items-center justify-between px-2 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-700 truncate">{title}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

const NumbersList = () => {
  const metrics = [
    { title: 'Tokens Identified', value: '2000'},
    { title: 'Gas Fees Spent', value: '350'},
    { title: 'Transaction Success Rate ', value: '180'},
    { title: 'Validation Rate', value: '156'},
    { title: 'Error Rate', value: '50'},
    { title: 'Trade Failures', value: '152'},
  ];

  return (
      <div className="max-w-xs w-full bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-[#98acd5] bg-gray-200 text-gray-700 font-bold text-center py-2 text-sm">
        System Performance 
        </div>
        {metrics.map((metric, index) => (
          <KPIListItem key={index} {...metric} />
        ))}
      </div>
  
  );
};

export default NumbersList;
