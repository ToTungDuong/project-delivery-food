import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/FoodDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/foods" element={<AllFoods></AllFoods>}></Route>
      <Route path="/foods/:id" element={<FoodDetails></FoodDetails>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  );
};

export default Routers;
