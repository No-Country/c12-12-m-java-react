import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/constants";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

const ShowCart = ({ state, addItem, removeItem }) => {
  let subtotal = 0;
  let shipping = 30.0;
  let totalItems = 0;
  state.forEach((item) => {
    subtotal += item.price * item.qty;
    totalItems += item.qty;
  });

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  {state.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div
                              className="bg-image rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image1}
                                alt={item.title}
                                className="w-[100px] h-[100px] md:object-contain"
                              />
                            </div>
                          </div>

                          <h3 className="col-lg-5 col-md-6 text-xl text-[#828282]">
                            {capitalizeFirstLetter(item.name)}
                          </h3>

                          <div className="col-lg-4 col-md-6">
                            <div className="flex items-center justify-between px-3 gap-4 bg-white outline outline-1 py-1 w-[156px] h-[34px] rounded-full">
                              <button
                                onClick={() => {
                                  removeItem(item);
                                }}
                              >
                                <AiOutlineMinus size={20} />
                              </button>
                              <span className="text-lg font-mont">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => {
                                  addItem(item);
                                }}
                              >
                                <AiOutlinePlus size={20} />
                              </button>
                            </div>
                            <div className="text-lg font-mont flex items-center justify-center px-3 gap-4 bg-white py-1 w-[156px] h-[34px] rounded-full">
                              {item.qty} x ${item.price}
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <ul className="text-base font-mont  list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong className="text-base font-bold font-mont">
                          Total amount
                        </strong>
                      </div>
                      <span>
                        <strong className="text-base font-bold font-mont">
                          ${Math.round(subtotal + shipping)}
                        </strong>
                      </span>
                    </li>
                  </ul>

                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Cart = () => {
  const state = useSelector((state) => state.handleCart.items);
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  return (
    <>
      <div className="container" style={{ paddingTop: "90px" }}>
        <h2 className="display-5 text-center" style={{ marginBottom: "2%" }}>
          Cart{" "}
        </h2>
        <hr />
        {state.length > 0 ? (
          <ShowCart state={state} addItem={addItem} removeItem={removeItem} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
