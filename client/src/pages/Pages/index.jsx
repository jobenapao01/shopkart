import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import CartPage from "../CartPage";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/product/:id" element={<ProductPage />} />
      <Route exact path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default Pages;
