import "react";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItems = (
        <>
        {/* <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          Parent
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li> */}
      </>
    )
  return (
    <div className="border-b-[1px] sticky top-0 z-10 w-full bg-white bg-opacity-90 backdrop-blur-md">
    <div className="navbar bg-transparent p-5 bg-base-100 md:w-4/5 mx-auto">
      <div className="navbar-start">
        {/* <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
          >
            {menuItems}
          </ul>
        </div> */}
       <Link to='/'><img src={logo} className="h-7" alt="logo" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btnOnlyText">Login</Link>
        <a className="btn-style">Get started</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
