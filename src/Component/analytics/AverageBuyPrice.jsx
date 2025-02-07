import React, { useState, useEffect } from 'react';

function AverageBuyPrice() {
  const [averageBuyPrice, setAverageBuyPrice] = useState(0);
  const [tokensBought, setTokensBought] = useState([]); // Array to store buy prices

  useEffect(() => {
    // Simulate fetching or calculating average buy price
    // Replace this with your actual data fetching/calculation logic
    const calculateAverage = () => {
        if (tokensBought.length === 0) {
            return 0; // Avoid division by zero
        }
        const sum = tokensBought.reduce((acc, price) => acc + price, 0);
        return sum / tokensBought.length;
    };


    const newAverage = calculateAverage();
    setAverageBuyPrice(newAverage);

  }, [tokensBought]); // Recalculate when tokensBought changes

    const handleBuyToken = (price) => {
        // In your real application, this would be where you interact with your trading API
        // and get the actual execution price.
        setTokensBought([...tokensBought, price]); // Add the new price
    };

  return (
    <div className="p-4 bg-gray-100"> {/* Main container with padding and background */}
      <h2 className="text-2xl font-bold mb-4">Trading Dashboard</h2>

      {/* Average Buy Price Display */}
      <div className="bg-white rounded-lg shadow p-4 mb-4"> {/* Card-like styling */}
        <p className="text-lg font-medium">Average Buy Price:</p>
        <p className="text-xl font-bold text-green-500">
          {averageBuyPrice.toFixed(2)} {/* Display with 2 decimal places */}
        </p>
      </div>

      {/* Example Buy Button (Replace with your actual trading logic) */}
      <button
        onClick={() => handleBuyToken(Math.random() * 100)} // Simulate buying with a random price
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buy Token
      </button>

        {/* Display history of bought tokens (optional) */}
        <div className="mt-4">
            <h3 className="text-lg font-medium">Bought Token History</h3>
            <ul>
                {tokensBought.map((price, index) => (
                    <li key={index}>{price.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default AverageBuyPrice;