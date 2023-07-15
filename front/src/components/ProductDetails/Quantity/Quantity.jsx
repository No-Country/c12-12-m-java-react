import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Quantity({ price }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className="flex gap-16 items-center">
      <div className="flex items-center justify-between px-3 gap-4 bg-white outline outline-1 py-1 w-[156px] h-[34px] rounded-full">
        <button onClick={handleDecrease}>
          <AiOutlineMinus size={20} />
        </button>
        <span className="text-lg font-mont">{quantity}</span>
        <button onClick={handleIncrease}>
          <AiOutlinePlus size={20} />
        </button>
      </div>
      <div className="flex md:gap-3 font-mont text-sm md:text-lg">
        <div>
          You have selected {quantity} unit{quantity > 1 ? "s" : ""}: <span className="font-bold"> ${totalPrice}</span> subtotal!
        </div>
      </div>
    </div>
  );
}

export default Quantity;
