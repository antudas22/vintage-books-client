import React from "react";

const BookNowModal = ({booking}) => {
    const {name, resalePrice, mobile, location} = booking; 
  return (
    <>
      <input type="checkbox" id="booknow-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booknow-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
