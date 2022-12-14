import React from "react";
import { ImLocation } from "react-icons/im";
import { FaPhone } from "react-icons/fa";

const Product = ({ product, setBooking }) => {
  const {
    name,
    img,
    location,
    resalePrice,
    originalPrice,
    usedTime,
    condition,
    mobile,
    description,
  } = product;
  return (
    <div className="p-5">
      <div className="card min-h-[780px] bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt=""
            className="rounded-2xl max-h-96"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
            <div className="flex justify-between w-full my-4">
            <h4 className="text-lg font-semibold">Resale Price: ${resalePrice}</h4>
            <div className="flex items-center">
            <ImLocation className="mr-1" /> <p>{location}</p>
            </div>
            <h4 className="text-lg font-semibold">Original Price: ${originalPrice}</h4>
            </div>
            <div className="flex justify-between w-full mb-4">
                <p>Used Time: {usedTime}</p>
                <div className="flex items-center gap-1">
                    <FaPhone /><p>{mobile}</p>
                </div>
                <p>Condition: {condition}</p>
            </div>
          <div className="card-actions w-full">
          <label onClick={() => setBooking(product)} htmlFor="booknow-modal" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 w-full">Book Now</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
