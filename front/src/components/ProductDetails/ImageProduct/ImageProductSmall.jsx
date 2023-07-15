import React from "react";

function ImageProductSmall({image, alt}) {
  return (
    <div className="w-[150px] h-[155px] shadow rounded-lg bg-white flex place-content-center items-center">
      <img
        src={image}
        alt={alt}
        className="w-[100px] h-auto transition hover:scale-110"
      />
    </div>
  );
}

export default ImageProductSmall;
