import { useState } from "react";

import React from "react";

import "./App.css";
import Home from "./Components/Home";

import Profile from "./Components/Profile";
import { Route, Routes } from "react-router";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import Checkout from "./Components/Checkout";
import Products from "./Components/Products";
import NewProducts from "./Components/NewProducts";
import TrendingProducts from "./Components/TrendingProducts";
import Payment from "./Components/Payment";
import UserDetails from "./Components/Users/UserDetails";
import Users from "./Components/Users/Users";
import Admin from "./Components/Users/Admin";

const LazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <>
      <Navbar />

      <h2>React - Router</h2>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading....">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="products" element={<Products />}>
            <Route index element={<TrendingProducts />} />
            <Route path="new" element={<NewProducts />} />
            <Route path="trending" element={<TrendingProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
