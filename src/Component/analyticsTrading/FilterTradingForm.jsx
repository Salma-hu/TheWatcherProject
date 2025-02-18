import React, { useState } from 'react';

const FilterTradingForm = () => {
  const [formData, setFormData] = useState({
    slippageFrom: '',
    slippageTo: '',
    gasFeesFrom: '',
    gasFeesTo: '',
    takeProfit: '',
    stopLoss: '',
    priority: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., pass to a parent component or filter data)
    console.log('Form Data:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-4"
    >
      {/* Slippage */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="slippageFrom">
          Slippage From (%)
        </label>
        <input
          type="number"
          id="slippageFrom"
          name="slippageFrom"
          placeholder="132"
          value={formData.slippageFrom}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="slippageTo">
          Slippage To (%)
        </label>
        <input
          type="number"
          id="slippageTo"
          name="slippageTo"
          placeholder="140"
          value={formData.slippageTo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Gas Fees */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="gasFeesFrom">
          Gas Fees From
        </label>
        <input
          type="number"
          id="gasFeesFrom"
          name="gasFeesFrom"
          placeholder="Enter minimum gas fee"
          value={formData.gasFeesFrom}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="gasFeesTo">
          Gas Fees To
        </label>
        <input
          type="number"
          id="gasFeesTo"
          name="gasFeesTo"
          placeholder="Enter maximum gas fee"
          value={formData.gasFeesTo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Take Profit */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="takeProfit">
          Take Profit (%)
        </label>
        <input
          type="number"
          id="takeProfit"
          name="takeProfit"
          placeholder="1"
          value={formData.takeProfit}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Stop Loss */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="stopLoss">
          Stop Loss (%)
        </label>
        <input
          type="number"
          id="stopLoss"
          name="stopLoss"
          placeholder="2"
          value={formData.stopLoss}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Priority Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="priority"
          name="priority"
          checked={formData.priority}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="priority" className="ml-2 block text-sm font-medium text-gray-700">
          Priority
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Apply Filter
      </button>
    </form>
  );
};

export default FilterTradingForm;
