import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsFillChatDotsFill } from "react-icons/bs";
import Profile from "../StudentDashboard/Profile Section/Profile";
import { Button } from "@mui/material";
import SignIn from "../Login/SignIn";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setLoggedInUser(data));
  }, [user?.email]);

  const handleLogout = () => {
    logout()
      .then(toast.warning("User loged out"))
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      {user?.email && loggedInUser[0]?.role === "Student" && (
        <>
          <li>
            <Link to="/studentdashboard" className=" md:hover:bg-sky-500 md:hover:rounded-md mt-3 h-9 w-24 mr-6 md:justify-center">Internship</Link>
          </li>
            <li className="">
              <Link to="/jobs" className=" md:hover:bg-sky-500 md:hover:rounded-md mt-3 h-9 w-24 mr-6 md:justify-center">Jobs</Link>
            </li>
          <li>
            <Link to="/" className="mt-3 h-9 w-24 mr-6">Home</Link>
          </li>
          <li onClick={handleLogout}>
            <Link to="/" className="mt-3 h-9 w-24 mr-6">Logout</Link>
          </li>
          <li className="3xl">
            {" "}
            <Link to="/chat" className="mt-3 h-9 w-24 mr-6">
              <BsFillChatDotsFill className="text-blue-500 text-2xl"></BsFillChatDotsFill>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Profile></Profile>
            </Link>
          </li>
        </>
      )}

      {user?.email && loggedInUser[0]?.role === "Employer" && (
        <>
          <li onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </li>
        </>
      )}

      {!user?.email &&
        loggedInUser[0]?.role !== "Employer" &&
        loggedInUser[0]?.role !== "Student" && (
          <>
            <li>
              <Link to="/studentdashboard" className="font-bold hover:bg-sky-500 hover:rounded-md mt-3 h-9 w-24 mr-6">Internship</Link>
            </li>

            <li className="flex justify-center">
              <Link to="/jobs" className="font-bold hover:bg-sky-500 hover:rounded-md mt-3 h-9 w-24 mr-6 justify-center">Jobs</Link>
            </li>

            <li className="lg:inline md:hidden hidden">
              <label htmlFor="signin-modal" className="border h-9 w-24  border-sky-500 text-sky-500 mt-3 mr-3 rounded-md justify-center">Login</label>
            </li>
          

            <li className="lg:inline md:hidden hidden">
              <Link to="/signup">
               <Button variant="contained">Register</Button>
              </Link>
            </li>
            <li className="md:inline lg:hidden">
              <Link to="/signup">
                <button className="font-bold">Register</button>
              </Link>
            </li>
            <li className="lg:inline md:hidden hidden">
              <Link to="/">
              <Button variant="contained">Admin</Button>
              </Link>
            </li>

      
          </>
        )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between shadow-lg">
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

export default Navbar;
