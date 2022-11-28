import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5'>All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) => <tr key={user._id} className="hover">
        <th>{i + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 btn-xs'>Make Admin</button></td>
        <td><button className='btn bg-gradient-to-r from-orange-500 to-red-500 border-0 btn-xs'>Delete</button></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;