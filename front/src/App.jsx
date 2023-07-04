import './App.css';
import Router from "../src/utils/Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <Router/>
    <ToastContainer />
    </>
  )
}

export default App
