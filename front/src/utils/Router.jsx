import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import { Provider } from "react-redux";
import store from "../redux/store";

function Router() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Provider>
  );
}

export default Router;
