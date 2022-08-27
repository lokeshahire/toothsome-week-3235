import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";

// import SingleProduct from "./SingleProduct";
import ProductPage from "./MensProduct/ProductPage";

import { useDispatch } from "react-redux";

import { get_products } from "../features/Product/productSlice";

import { SubdirectoryArrowLeft } from "@mui/icons-material";
import { get_home_products } from "../features/Home/HomeSlice";
//import HomeProductPage from "./HomeProduct/HomePage";

import FinalPayment from "./FinalPayment";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_products());

    dispatch(get_home_products());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/products/mens" element={<ProductPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkOut" element={<Checkout />} />
        <Route exact path="/checkOut/payment" element={<FinalPayment />} />

        {/* 
                
       <Route exact path="/products/mens/:id" element={<SingleProduct />} />
    <Route exact path="/products/home/:id" element={<SingleHome />} />
           <Route exact path="/products/home" element={<HomeProductPage />} />
         */}

        {/* <Route exact path="/stories" element={<Story />} />
      
         */}
      </Routes>

      <Footer />
    </>
  );
}
