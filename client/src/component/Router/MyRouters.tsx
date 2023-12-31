import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import SingIn from "../SingIn/SingIn";
import ProductPage from "../ProductPage/ProductPage";
import Categories from "../Categories/Categories";
import ComparePrices from "../ComparePrices/ComparePrices";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Layout from "../Layout/Layout";

function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/singIn" element={<SingIn />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/comparePrices" element={<ComparePrices />} />
          <Route path="/categories/:cat" element={<Categories />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default MyRouter;
