import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Footer from "./components/footer/Footer";
import Log from "./components/Log/Log";
import Verify from "./pages/verify/verify";
import Orders from "./pages/myord/Orders";

// 🔐 Protected Route
const ProtectedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem("role");
  console.log(userRole);

  if (!userRole) return <Navigate to="/" />;

  if (role && userRole !== role) {
    return role === "admin" ? <Navigate to="/" /> : <Navigate to="/admin" />;
  }

  return children;
};

const App = () => {
  const [sh, ssh] = useState(false);

  return (
    <>
      <div className="app">
        {sh && <Log sh={sh} ssh={ssh} />}
        <Nav ssh={ssh} />

        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />

          <Route
            path="/ct"
            element={
              <ProtectedRoute role="user">
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/od"
            element={
              <ProtectedRoute role="user">
                <Order />
              </ProtectedRoute>
            }
          />

          <Route
            path="/myorders"
            element={
              <ProtectedRoute role="user">
                <Orders />
              </ProtectedRoute>
            }
          />

          {/* ADMIN ROUTE
          <Route path="/admin" element={<AdminRedirect />} /> */}

          {/* PUBLIC ROUTES */}
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
