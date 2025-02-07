import React, { Component } from "react";

class TradesExecutedWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradesExecuted: 0,
      buyTrades: 0,
      sellTrades: 0,
    };
    this.intervalId = null;
  }

  fetchTradeData = async () => {
    try {
      const response = await fetch("/api/trade-stats");
      const data = await response.json();
      this.setState({
        tradesExecuted: data.total,
        buyTrades: data.buys,
        sellTrades: data.sells,
      });
    } catch (error) {
      console.error("Error fetching trade stats:", error);
    }
  };

  componentDidMount() {
    this.fetchTradeData();
    this.intervalId = setInterval(this.fetchTradeData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { tradesExecuted, buyTrades, sellTrades } = this.state;
    return ( 
      <div className="bg-white shadow-sm rounded-md p-2 w-full max-w-[150px] border border-gray-300">
        <h2 className="text-xs font-semibold text-gray-700 text-center">
          Trades
        </h2>
        <div className="text-lg font-bold text-[#003399] text-center my-1">
          {tradesExecuted}
        </div>
        <div className="flex justify-between text-gray-600 text-[10px] mt-1">
          <span className="text-green-500 font-medium">B: {buyTrades}</span>
          <span className="text-red-500 font-medium">S: {sellTrades}</span>
        </div>
      </div>
    );
  }
}

export default TradesExecutedWidget;
