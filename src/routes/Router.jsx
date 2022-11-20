import React, { useEffect, useState } from "react";
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
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";


const Router = () => {
  const [isLoggedin, setIsLoggedIn] = useState(undefined);
  const [check, setcheck] = useState(true);
  const userStore = useSelector(store=>store.userStore)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        console.log(user);

      } else {
        setIsLoggedIn(false);
        console.log('nada mami siga intentando');
      }
      setcheck(false)
      // if (condition) {
        
      // }
    }
    );
  }, [setIsLoggedIn, setcheck])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAuthentication={isLoggedin} />}>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/verification" element={<Verification />} />
        </Route>
        <Route element={<PrivateRouter isAuthentication={isLoggedin} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register/:uid" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
