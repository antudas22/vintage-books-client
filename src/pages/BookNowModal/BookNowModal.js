import React from "react";

const BookNowModal = ({booking, setBooking}) => {
    const {name, resalePrice, location} = booking;

    const handleBookNow = e => {
        e.preventDefault();
        const form = e.target;
        const book = form.book.value;
        const price = form.price.value;
        const location = form.location.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const bookNow = {
            bookName: book,
            price,
            location,
            userName: name,
            email,
            phone,
            meetingLocation: meetingLocation,
        }

        console.log(bookNow);
        setBooking(null)
    }
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
          <h3 className="text-lg font-bold">Submit With Legal Information.</h3>
          <form onSubmit={handleBookNow}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="book" type="text" disabled value={name} placeholder="Type here" className="input input-bordered w-full" />
          <label className="label">
            <span className="label-text">Price: $</span>
          </label>
          <input name="price" type="text" disabled value={resalePrice} placeholder="Type here" className="input input-bordered w-full mt-2" />
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input name="location" type="text" disabled value={location} placeholder="Type here" className="input input-bordered w-full mt-2" />
          <input name="name" type="text" disabled placeholder="Your Name" className="input input-bordered w-full mt-2" />
          <input name="email" type="email" disabled placeholder="Email" className="input input-bordered w-full mt-2" />
          <input name="phone" type="text" placeholder="Your mobile number" className="input input-bordered w-full mt-2" />
          <input name="meetingLocation" type="text" placeholder="Put your meeting location" className="input input-bordered w-full mt-2" />
          <input type="submit" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 w-full mt-6" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
