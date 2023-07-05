import { useState } from "react";
import Router from "../src/utils/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import "./App.css";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ToastContainer toastClassName='toastContainerBox' transition={Flip} position='top-center' />
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Router/>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
