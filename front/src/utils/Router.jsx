import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
  );
}

export default Router;
