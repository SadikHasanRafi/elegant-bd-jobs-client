import "react";
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthUserRoleContext } from "../../Contexts/AuthUserContext";
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {

  const {currentUser,setCurrentUser} = useContext(AuthUserRoleContext)
  const navigate = useNavigate()

  //tesing er jonno ei block ta 
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      setCurrentUser(null)
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
    
  }


    const menuItems = (
        <>
        {/* <li>

  const menuItems = (
    <>
      {/* <li>
        <a>Item 1</a>
      </li> */}
      {/* <li tabIndex={0}>
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
      </li> */}
      <li>
        <Link to="/setrole">Select Role</Link>
      </li>
      <li>
        <Link to="/all-jobs">Show all jobs</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <div className="indicator">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path>
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <button className="font-thin text-sm text-left">1. Job due date</button>
            <button className="font-thin text-sm text-left">2. Job due date</button>
            <button className="font-thin text-sm text-left">3. Job due date</button>
            <div className="card-actions">
              <Link to="dashboard/dashboard/savedjobs">              <button className="btn-style  btn-block">See All</button></Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
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
          <Link to="/">
            <img src={logo} className="h-7" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
       {
        currentUser ?
        <div className="navbar-end">
          <button onClick={handleSignOut} className="btnOnlyText">
            Logout
          </button>
        </div>
        :
        <div className="navbar-end">
        <Link to="/login" className="btnOnlyText">
          Login
        </Link>
        <Link to="/signup" className="btn-style">Get started</Link>
      </div>
       }
      </div>





    </div>
  );
};

export default Navbar;
