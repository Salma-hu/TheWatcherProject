// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './routes/DashboardRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;