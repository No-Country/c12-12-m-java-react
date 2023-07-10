import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SingleCategory from "../components/SingleCategory/SingleCategory";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route exact path="/categoria/:cat" element={<SingleCategory/>} />
      </Routes>
  );
}

export default Router;
