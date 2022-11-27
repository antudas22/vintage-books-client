import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({Children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center h-screen'>
            <progress className="progress w-56 ="></progress>
        </div>
    }

    if(user){
        return Children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>;
};

export default PrivateRoute;