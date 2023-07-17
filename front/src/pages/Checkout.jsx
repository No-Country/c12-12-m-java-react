import { useSelector } from "react-redux";
import ShowCheckout from "../components/ShowCheckout";
import EmptyCart from "../components/EmptyCart";


const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
console.log(state, "state")
  

  
  return (
    <>
      <div className="container my-3 py-3" >
        <h1 className="text-center" style={{marginBottom: '1%', fontSize: '20px'}}>Checkout</h1>
        <hr />
        {state.items ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;
