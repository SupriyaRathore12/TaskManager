import React, { useState, useCallback } from 'react';
import { FaUser, FaUserLock } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getInitials } from '../utils';
import { Fragment } from "react";


const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = useCallback(() => {
    console.log('logout');
  }, []);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton as={Fragment} className="w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-blue-600">
          <span className="text-white font-semibold">
            {getInitials(user.name)}
          </span>
        </MenuButton>
        
        <Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
>
    <MenuItems
    as="div"
    className="absolute right-0 mt-2 w-56 origin-top-right bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none rounded-md"
    >
    <div className="p-4 ">
      <MenuItem as="button"
        className={({ isActive }) =>
          `flex w-full items-center rounded-md px-2 py-2 text-base ${
            isActive ? "bg-gray-100 text-gray-900" : "text-gray-700"
          }`
        }
        onClick={() => setOpen(true)}
      >
        <FaUser className="mr-2" /> Profile
      </MenuItem>

      <MenuItem as="button"
        className={({ isActive }) =>
          `flex w-full items-center rounded-md px-2 py-2 text-base ${
            isActive ? "bg-gray-100 text-gray-900" : "text-gray-700"
          }`
        }
        onClick={() => setOpenPassword(true)}
      >
        <FaUserLock className="mr-2" /> Change Password
      </MenuItem>

      <MenuItem as="button"
        className={({ isActive }) =>
          `flex w-full items-center rounded-md px-2 py-2 text-base ${
            isActive ? "bg-red-100 text-red-600" : "text-red-600"
          }`
        }
        onClick={logoutHandler}
      >
        <IoLogOutOutline className="mr-2" /> Logout
      </MenuItem>
    </div>
  </MenuItems>
</Transition>


      </Menu>
    </div>
  );
};

export default UserAvatar;
