import React from 'react';
import { useTheme } from '@/hooks/use-theme';

const KPIListItem = ({ title, value }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`flex items-center justify-between px-2 py-3 border-b last:border-b-0 transition-colors
      ${isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-50'}`}>
      <div className="flex-1">
        <p className={`text-xs font-semibold truncate ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {title}
        </p>
      </div>
      <div className="text-right">
        <p className={`text-sm font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

const NumbersList = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const metrics = [
    { title: 'Tokens Identified', value: '2000' },
    { title: 'Gas Fees Spent', value: '350' },
    { title: 'Transaction Success Rate', value: '180' },
    { title: 'Validation Rate', value: '156' },
    { title: 'Error Rate', value: '50' },
    { title: 'Trade Failures', value: '152' },
  ];

  return (
    <div className={`max-w-xs w-full shadow rounded-lg overflow-hidden 
      ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'}`}>
      <div className={`font-bold text-center py-2 text-sm 
        ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
        System Performance
      </div>
      {metrics.map((metric, index) => (
        <KPIListItem key={index} {...metric} />
      ))}
    </div>
  );
};

export default NumbersList;
