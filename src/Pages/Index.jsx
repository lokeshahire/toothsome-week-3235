import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
// //import Kids from "./Kids";
// import Mens from "./Mens";
// import Women from "./Women";
// //import KidsProductPage from "./KidsProduct/KidsProductPage";
// import SingleProduct from "./SingleProduct";
// import ProductPage from "./MensProduct/ProductPage";
// import SingleKidsProduct from "./KidsProduct/SingleKidsProduct";
// import WomenProductPage from "./WomenProduct/WomenPage";
// import SingleWomen from "./WomenProduct/SingleWomen";
import { useDispatch } from "react-redux";
// //import { get_kids_products } from "../features/Kids/KidsSlice";
// import { get_products } from "../features/Product/productSlice";
// import { get_women_products } from "../features/Women/WomenSlice";
//import Story from "./Stories";
import { SubdirectoryArrowLeft } from "@mui/icons-material";
import { get_home_products } from "../features/Home/HomeSlice";
import HomeProductPage from "./HomeProduct/HomePage";
import SingleHome from "./HomeProduct/SingleHome";
// import FinalPayment from "./FinalPayment";
// import Cart from "./Cart";
// import Checkout from "./Checkout";

export default function Index() {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(get_products());
  //     dispatch(get_kids_products());
  //     dispatch(get_women_products());
  //     dispatch(get_home_products());
  //   }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        {/* <Route exact path="/mens" element={<Mens />}></Route>
        <Route exact path="/women" element={<Women />}></Route>
        <Route exact path="/kids" element={<Kids />}></Route>
        <Route exact path="/products/mens" element={<ProductPage />} />
        <Route exact path="/products/mens/:id" element={<SingleProduct />} />
        <Route exact path="/products/kids" element={<KidsProductPage />} />
        <Route
          exact
          path="/products/kids/:id"
          element={<SingleKidsProduct />}
        />
        <Route exact path="/products/women" element={<WomenProductPage />} />
        <Route exact path="/products/women/:id" element={<SingleWomen />} /> */}
        <Route exact path="/products/home" element={<HomeProductPage />} />
        <Route exact path="/products/home/:id" element={<SingleHome />} />
        {/* <Route exact path="/stories" element={<Story />} />
        <Route exact path="/checkOut" element={<Checkout />} />
        <Route exact path="/checkOut/payment" element={<FinalPayment />} />
        <Route exact path="/cart" element={<Cart />} /> */}
      </Routes>

      <Footer />
    </>
  );
}
