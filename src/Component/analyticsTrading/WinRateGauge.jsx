import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/hooks/use-theme';

/**
 * WinRateGauge - Circular progress indicator for displaying win percentages
 */
const WinRateGauge = ({ winRate }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const radius = 30;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (winRate / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2} aria-label={`Win rate gauge showing ${winRate}%`}>
        {/* Background Circle */}
        <circle
          stroke={isDarkMode ? "#374151" : "#e5e7eb"} // Dark mode: gray-700
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          role="presentation"
        />
        
        {/* Progress Circle */}
        <circle
          stroke={isDarkMode ? "#3B82F6" : "#4888d9"} // Dark mode: blue-500
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          role="progressbar"
          aria-valuenow={winRate}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </svg>
      
      <div className={`mt-2 text-xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
        {winRate}%
      </div>
    </div>
  );
};

WinRateGauge.propTypes = {
  winRate: PropTypes.number.isRequired,
};

/**
 * WinRateGaugeCard - Card wrapper for WinRateGauge
 */
const WinRateGaugeCard = ({ winRate }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`shadow-lg rounded-lg p-6 w-full max-w-sm transition-shadow 
      ${isDarkMode ? "bg-gray-900 text-gray-300 hover:shadow-gray-700" : "bg-white text-gray-800 hover:shadow-xl"}`}>
      
      <header className="mb-4">
        <h2 className={`text-l font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
          Percentage of Profitable Trades
        </h2>
      </header>
      
      <WinRateGauge winRate={winRate} />
    </div>
  );
};

WinRateGaugeCard.propTypes = {
  winRate: PropTypes.number.isRequired,
};

export default WinRateGaugeCard;
