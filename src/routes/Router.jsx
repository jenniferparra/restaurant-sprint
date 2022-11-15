import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/session/Login";
import Register from "../components/session/Register";
import Phone from "../components/session/Phone";
import Verification from "../components/session/Verification";
import { Home } from "../components/home/Home";
import LoadingPage from "../components/loading/LoadingPage";
import Search from "../components/search/Search";
import Order from "../components/order/Order";
import Profile from "../components/profile/Profile";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoadingPage />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
