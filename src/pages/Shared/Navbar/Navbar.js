import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logo from "../../../media/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0}>
                {user?.photoURL ?
                  <div className="w-12">
                    <img className="rounded-full" src={user.photoURL} alt="" />
                </div>
                : <FaUser className="text-gray-500" />                  
                }
              </label>
              <ul
                tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="w-full mb-2">{user?.displayName}</p>
                </li>
                <li>
                  <Link className="w-full mb-2" to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button className="w-full" onClick={handleLogOut}>Sign Out</button>
                </li>
                
              </ul>
            </div>
            <p></p>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Sign In</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-orange-50 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img width={"180px"} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default Navbar;
