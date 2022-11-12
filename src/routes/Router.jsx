import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/session/Login";
import Register from "../components/session/Register";
import Phone from "../components/session/Phone";
import Verification from "../components/session/Verification";
import { Home } from "../components/home/Home";
import LoadingPage from "../components/loading/LoadingPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      // <Route path="/" element={<LoadingPage />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/home" element={<Home />} />


        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
