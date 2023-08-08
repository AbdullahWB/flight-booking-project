import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TiTicket } from "react-icons/ti";
import { RxCaretDown } from "react-icons/rx";
import { BiScatterChart } from "react-icons/bi";
import logoBlack from "../../assets/icon/airblissBlack.png";
import LoginSignupModal from "../../Components/LoginSignupModal";

const Navbar = () => {
  const [user, setUser] = useState(false); // It's temporary state for checking
  const [isMenuOne, setIsMenuOne] = useState(false);
  const [isMenuTwo, setIsMenuTwo] = useState(false);
  const [isLoginSignupModalOpen, setIsLoginSignupModalOpen] = useState(false);

  const navOption = (
    <>
      <ul className="text-gray-600">
        <li onClick={() => setIsMenuOne(!isMenuOne)} className="">
          <p className="font-font-medium">
            Bookings {isMenuOne ? <FaAngleUp /> : <FaAngleDown />}
          </p>
          {isMenuOne && (
            <ul className="grid gap-1">
              <li>Flight Booking</li>
              <li>Hotels Booking</li>
              <li>Cars Booking</li>
            </ul>
          )}
        </li>
        <li onClick={() => setIsMenuTwo(!isMenuTwo)} className="">
          <p className="font-font-medium">
            Categories {isMenuTwo ? <FaAngleUp /> : <FaAngleDown />}
          </p>
          {isMenuTwo && (
            <ul className="grid gap-1">
              <li>Blogs</li>
              <li>Gallery</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
  return (
    <div className="shadow">
      <div className="navbar text-sm bg-white px-0 justify-between max-w-7xl mx-auto">
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
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-40"
            >
              {navOption}
            </div>
          </div>
          <a href="/" className="text-xl font-semibold md:pl-5 text-cyan-500">
            <img src={logoBlack} className="h-10 sm:h-12" alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="px-1 flex gap-5">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="m-1 flex items-center font-medium cursor-pointer"
              >
                <TiTicket className="text-lg mr-1" /> Bookings <RxCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
              >
                <li className="cursor-pointer">Flight Booking</li>
                <li className="cursor-pointer">Hotels Booking</li>
                <li className="cursor-pointer">Cars Booking</li>
              </ul>
            </div>
            <div className="dropdown">
              <label
                tabIndex={0}
                className="m-1 flex items-center font-medium cursor-pointer"
              >
                <BiScatterChart className="text-lg mr-1" /> Categories{" "}
                <RxCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
              >
                <li className="cursor-pointer">Blogs</li>
                <li className="cursor-pointer">Gallery</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          {user ? (
            <div className="dropdown dropdown-end ml-5">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/Ws1r9fp/images.png"
                    }
                    alt={user.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
              >
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <a
              href="#"
              onClick={() => setIsLoginSignupModalOpen(true)} // Open the modal on click
              className="px-5 py-1 flex items-center font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  className="b"
                  d="M3.535,18.712a.58.58,0,0,1,0-.817,10.38,10.38,0,0,1,14.682,0,.583.583,0,0,1,0,.813,10.383,10.383,0,0,1-14.686,0Zm.939-.409a9.436,9.436,0,0,0,12.8,0,9.432,9.432,0,0,0-12.8,0Zm13.079.255h-.008Zm2.372-2.569a.5.5,0,0,1-.217-.665,9.785,9.785,0,0,0,1.055-4.45,9.887,9.887,0,0,0-19.775,0,9.771,9.771,0,0,0,1.054,4.45.494.494,0,1,1-.882.446A10.765,10.765,0,0,1,0,10.876a10.876,10.876,0,0,1,21.752,0,10.76,10.76,0,0,1-1.162,4.9.493.493,0,0,1-.441.271A.511.511,0,0,1,19.926,15.99Zm-13-6.137a3.955,3.955,0,1,1,3.955,3.954A3.96,3.96,0,0,1,6.921,9.853Zm.989,0a2.966,2.966,0,1,0,2.966-2.967A2.97,2.97,0,0,0,7.91,9.853Z"
                ></path>
              </svg>
              <span className="ml-2 font-medium">Login | Sign up</span>
            </a>
          )}
        </div>
      </div>
      {/* Render the modal conditionally */}
      {isLoginSignupModalOpen && (
        <LoginSignupModal onClose={() => setIsLoginSignupModalOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;
