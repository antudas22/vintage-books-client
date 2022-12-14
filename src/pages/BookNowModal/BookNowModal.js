import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookNowModal = ({booking, setBooking}) => {
    const {name: bookName, resalePrice, location} = booking;
    const {user} = useContext(AuthContext);

    const handleBookNow = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const location = form.location.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const booked = {
            bookName,
            price,
            location,
            user: name,
            email,
            phone,
            meetingLocation: meetingLocation,
        }

        fetch('https://vintage-books-server.vercel.app/booked', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booked)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.acknowledged){
            setBooking(null);
            toast.success('Booked')
          }
        })
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
          <input name="book" type="text" disabled value={bookName} placeholder="Type here" className="input input-bordered w-full" />
          <label className="label">
            <span className="label-text">Price: $</span>
          </label>
          <input name="price" type="text" disabled value={resalePrice} placeholder="Type here" className="input input-bordered w-full mt-2" />
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input name="location" type="text" disabled value={location} placeholder="Type here" className="input input-bordered w-full mt-2" />
          <input name="name" defaultValue={user?.displayName} type="text" disabled placeholder="Your Name" className="input input-bordered w-full mt-2" />
          <input name="email" defaultValue={user?.email} type="email" disabled placeholder="Email" className="input input-bordered w-full mt-2" />
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
