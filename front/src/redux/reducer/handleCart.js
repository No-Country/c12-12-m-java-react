const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    let updatedState;
  
    switch (action.type) {
      case "ADDITEM": {
        const exist = state.find((x) => x.id === product.id);
        if (exist) {
          updatedState = state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          );
        } else {
          updatedState = [...state, { ...product, qty: 1 }];
        }
        break;
      }
      case "DELITEM": {
        const exist2 = state.find((x) => x.id === product.id);
        if (exist2.qty === 1) {
          updatedState = state.filter((x) => x.id !== exist2.id);
        } else {
          updatedState = state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
        break;
      }
      default:
        updatedState = state;
        break;
    }
  
    return updatedState;
  };
  
  export default handleCart;
  