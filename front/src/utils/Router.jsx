import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SingleCategory from "../pages/SingleCategory/SingleCategory";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";
import ProductDetail from "../pages/ProductDetail";

import ShippingMethod from "../pages/FooterPages/ShippingMethod";
import GiftCard from "../pages/FooterPages/GiftCard";
import ReturnsExchanges from "../pages/FooterPages/ReturnsExchanges";
import Faq from "../pages/FooterPages/Faq";
import SizeGuide from "../pages/FooterPages/SizeGuide";


function Router() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route exact path="/:cat/:id" element={<ProductDetail />} />
          <Route exact path="/categoria/:cat" element={<SingleCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/forgotpassword" element={<UnderConstruction />} />

          {/* Footer pages */}
          <Route path="/shipping-method" element={<ShippingMethod />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/returns-and-exchanges" element={<ReturnsExchanges />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/size-guide" element={<SizeGuide />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default Router;
