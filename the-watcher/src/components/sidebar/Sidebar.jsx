import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/new-customer">New Customer</Link></li>
        <li><Link to="/verified-customers">Verified Customers</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/new-product">New Product</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
