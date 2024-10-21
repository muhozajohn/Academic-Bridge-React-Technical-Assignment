import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashLayout from "../layouts/DashLayout";
import App from "../App";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
