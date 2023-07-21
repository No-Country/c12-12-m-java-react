
import ImageProductSmall from "./ImageProductSmall";

function ImageProduct({image, name}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-3xl shadow bg-white lg:w-[470px] h-[550px] flex place-content-center items-center">
        <img
          src={image[0]}
          alt={name}
          className=" md:w-[300px] h-auto transition duration-300 object-cover hover:scale-105 md:hover:scale-125"
        />
      </div>

      <div className="flex gap-2 justify-between">
        <ImageProductSmall image={image[0]} alt="image 1" />
        <ImageProductSmall image={image[1]} alt="image 2" />
        <ImageProductSmall image={image[2]} alt="image 3" />
      </div>
    </div>
  );
}

export default ImageProduct;
