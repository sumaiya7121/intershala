import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../Login/SignIn";



const RegistrationNavbar = () => {

 
  const menuItems = (
  
    <>
                <li className="">
              <label htmlFor="signin-modal" className="border h-9 w-24  border-sky-500 text-sky-500 mt-3 mr-3 rounded-md justify-center">Login</label>
            </li>
    
    </>

        
  );

  return (
    <div className="navbar bg-base-100 flex justify-evenly shadow-lg">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Logo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <SignIn></SignIn>
    </div>
  );
};

export default RegistrationNavbar;
