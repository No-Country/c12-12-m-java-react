import React, { useState } from "react";

function ButtonSize({ size }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      className={`uppercase outline outline-1 rounded-xl py-1 w-12 hover:scale-110 transition font-mont ${
        selected ? "bg-white hover:scale-100" : ""
      }`}
      onClick={handleClick}
      style={{ outline: selected ? "1px solid #000" : "" }}
    >
      {size}
    </button>
  );
}

export default ButtonSize;
