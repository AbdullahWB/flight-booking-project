import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHome, FaHouseUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserNav = () => {
    return (
        <div>
            <NavLink
                to='UserHome'
                className={({ isActive }) =>
                    `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${isActive
                        ? 'bg-white text-cyan-500 active:border rounded-full'
                        : 'text-white'
                    }`
                }
            >
                <FaHouseUser className='w-5 h-5' />

                <span className='mx-4 font-medium'>User Home</span>
            </NavLink>
            <NavLink
                to='booking'
                className={({ isActive }) =>
                    `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${isActive
                        ? 'bg-white text-cyan-500 active:border rounded-full'
                        : 'text-white'
                    }`
                }
            >
                <FaHouseUser className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Book</span>
            </NavLink>
            <NavLink
                to='account'
                className={({ isActive }) =>
                    `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${isActive
                        ? 'bg-white text-cyan-500 active:border rounded-full'
                        : 'text-white'
                    }`
                }
            >
                <BsFillPersonFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Account</span>
            </NavLink>
        </div>
    );
};

export default UserNav;
