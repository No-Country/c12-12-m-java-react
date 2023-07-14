import React from "react";

function Size({children}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="capitalize text-lg">size:</h3>
      <div className="flex flex-row gap-3">
        {children}
      </div>
      <p className="text-[#878787] text-xs font-mont">Only sizes available**</p>
    </div>
  );
}

export default Size;
