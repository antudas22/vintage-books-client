import React, { useEffect, useState } from "react";
import BookNowModal from "../BookNowModal/BookNowModal";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const [advertises, setAdvertises] = useState([]);
  
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => setAdvertises(data));
  }, []);
  return (
  <div>

    <h2 className='text-3xl font-bold my-16 text-center'>Advertise</h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
    {
        advertises.map(advertise => <AdvertiseCard
                key={advertise._id}
                advertise={advertise}
            />)
    }
    </div>
    {
                booking &&
                <BookNowModal
                booking={booking}
                setBooking={setBooking}
                />
            }
  </div>
  );
};

export default Advertise;
