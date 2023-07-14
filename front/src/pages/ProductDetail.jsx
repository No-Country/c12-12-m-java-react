import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Rating } from "@mui/material";
import { BsHeart } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

import Loading from "../components/Loading";
import ImageProduct from "../components/ProductDetails/ImageProduct/ImageProduct";
import Size from "../components/ProductDetails/Size/Size";
import ShippingCard from "../components/ProductDetails/ShippingCard/ShippingCard";
import ButtonSize from "../components/ProductDetails/Size/ButtonSize";
import Quantity from "../components/ProductDetails/Quantity/Quantity";
import ButtonTo from "../components/ProductDetails/ButtonTo";
import Footer from "../components/Footer/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const rating = Math.floor(Math.random() * 5) + 1;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://apimocha.com/vivavintage/products`
        );

        const productData = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center place-content-center items-center top-2/4">
        <Loading />
      </div>
    );
  }

  let sizes = [];
  if (
    product.category === "pants" ||
    product.category === "hats" ||
    product.category === "shirts" ||
    product.category === "jackets"
  ) {
    sizes = ["xs", "s", "m", "l", "xl"];
  } else if (product.category === "shoes") {
    sizes = ["9", "9.5", "10", "10.5", "11", "11.5"];
  } else if (product.category === "accesories") {
    sizes = ["10x10", "16x10", "22x10"];
  }

  return (
    <>
      <div className="py-5 px-3 md:px-40 bg-[#f2f2f2]">
        <div className="flex flex-col lg:flex-row gap-10 font-serif place-content-center">

          <ImageProduct image={product.image} name={product.name} />

          <div className="flex flex-col gap-4">
            <Rating precision={0.5} name="read-only" value={rating} readOnly />
            <div className="flex justify-between items-center gap-5 md:gap-20">
              <h1 className="text-2xl md:text-4xl uppercase font-semibold">
                {product.name}
              </h1>
              <BsHeart
                size={20}
                className="hover:text-rose-600 transition cursor-pointer"
              />
            </div>
            <p className="text-xl text-[#828282] md:w-[490px]">
              {product.description}
            </p>
            <strong className="text-xl md:text-2xl font-bold font-mont">
              ${product.price} USD
            </strong>

            <Size>
              {sizes.map((size) => (
                <ButtonSize key={size} size={size} />
              ))}
            </Size>
            <ShippingCard />
            <Quantity price={product.price} />

            <div className="flex flex-wrap place-content-center md:place-content-start gap-4">
              <Link to="/cart">
                <ButtonTo
                  icon={<MdOutlineAddShoppingCart size={20} />}
                  name="add to cart"
                />
              </Link>
              <Link to="/checkout">
                <ButtonTo
                  icon={<IoBagCheckOutline size={20} />}
                  name="go to checkout"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
