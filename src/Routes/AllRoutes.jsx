import React from "react";
import { Route, Routes } from "react-router-dom";
import { SingleProduct } from "../Components/SingleProduct";
import { CartItem } from "./CartItem";
import { Checkout } from "./Checkout";
import { Home } from "./Home";
import { Login } from "./Login";
import { Payment } from "./Payment";
import { PrivateRoute } from "./PrivateRoute";
import { Product } from "./Product";
import { SignUp } from "./SignUp";
import { Thankyou } from "./Thankyou";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartItem />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
