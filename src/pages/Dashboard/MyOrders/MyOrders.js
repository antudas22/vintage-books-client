import React, { useContext } from 'react';
import {useQuery} from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `https://vintage-books-server.vercel.app/booked?email=${user?.email}`;

    const {data: booked = []} = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center my-8'>My Orders</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Book Name</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        booked &&
        booked?.map((book, i) => <tr key={book._id} className="hover">
        <th>{i + 1}</th>
        <td>{book.user}</td>
        <td>{book.bookName}</td>
        <td>${book.price}</td>
        <td><button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 btn-sm'>Pay</button></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;