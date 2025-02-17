import React from 'react';
import PropTypes from 'prop-types';

/**
 * WinRateGauge - Circular progress indicator for displaying win percentages
 * Uses SVG to create a gauge visualization with smooth transitions
 * 
 * @param {number} winRate - Percentage value between 0 and 100
 */
const WinRateGauge = ({ winRate }) => {
  // Further reduced gauge size: adjust the radius to make the gauge even smaller
  const radius = 30; // Reduced from 40 to 30
  const stroke = 10; // Gauge stroke thickness remains the same
  const normalizedRadius = radius - stroke / 2; // Adjust for stroke alignment
  const circumference = normalizedRadius * 2 * Math.PI;
  
  // Calculate progress based on winRate
  const strokeDashoffset = circumference - (winRate / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg 
        height={radius * 2} 
        width={radius * 2}
        aria-label={`Win rate gauge showing ${winRate}%`}
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          role="presentation"
        />
        
        <circle
          stroke="#10b981"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          style={{ 
            transition: 'stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          role="progressbar"
          aria-valuenow={winRate}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </svg>
      
      <div className="mt-2 text-xl font-bold text-gray-800">
        {winRate}%
      </div>
    </div>
  );
};

WinRateGauge.propTypes = {
  /**
   * Current win percentage value (0-100)
   */
  winRate: PropTypes.number.isRequired,
};

/**
 * @param {number} winRate - Percentage value between 0 and 100
 */

const WinRateGaugeCard = ({ winRate }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
    {/* // <div className="bg-white shadow-lg rounded-lg p-6 w-fit hover:shadow-xl transition-shadow"> */}
      <header className="mb-4">
        <h2 className="text-l font-semibold text-gray-800">
          {/* Trading Performance */}
          Percentage of Profitable Trades
        </h2>
        {/* <p className="text-sm text-gray-600 mt-1">
          Percentage of trades that were profitable
        </p> */}
      </header>
      
      <WinRateGauge winRate={winRate} />
    </div>
  );
};

WinRateGaugeCard.propTypes = {
  /**
   * Win percentage to display in the gauge
   */
  winRate: PropTypes.number.isRequired,
};

export default WinRateGaugeCard;
