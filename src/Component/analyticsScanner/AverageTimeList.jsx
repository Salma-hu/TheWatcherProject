import React from 'react';

const KPIListItem = ({ title, value, description, trend }) => {
  const trendColor =
    trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-500';
  const trendIcon = trend > 0 ? '▲' : trend < 0 ? '▼' : '';

  return (
    <div className="flex items-center justify-between px-2 py-3 border-b last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
          {title}
        </p>
        {description && (
          <p className="text-xs text-gray-400 dark:text-gray-400 truncate">
            {description}
          </p>
        )}
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
          {value}
        </p>
        {trend !== undefined && (
          <span className={`${trendColor} text-xs`}>
            {trendIcon} {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  );
};

const AverageTimeList = () => {
  const metrics = [
    { title: 'Avg Time to Identify', value: '200ms' },
    { title: 'Time to Validate', value: '350ms' },
    { title: 'Time in the Trade', value: '150ms' },
    { title: 'Avg Buy Price', value: '150' },
    { title: 'Avg ROI', value: '180' },
    { title: 'Avg Liquidity Distribution', value: '156' },
    { title: 'Avg Average Market Cap', value: '2635' },
  ];

  return (
    <div className="max-w-xs w-full bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold text-center py-2 text-sm">
        Average Time
      </div>
      {metrics.map((metric, index) => (
        <KPIListItem key={index} {...metric} />
      ))}
    </div>
  );
};

export default AverageTimeList;
