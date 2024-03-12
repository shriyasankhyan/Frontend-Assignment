import React from 'react';
import Dropdown from './subcomponents/Dropdown';
import NavbarItem from './subcomponents/NavbarItem';

export const Navbar = ({selected, setSelected}) => {
  return (
    <nav className="bg-[#FFFFFF] w-screen-xl flex items-center justify-between py-4 px-8 sticky top-0 z-40">
      <div className="flex items-center">
        <div className="w-871px h-38px flex-shrink-0">
          <img src="/Assets/Sidepane/TF%20logo.svg" alt="Truefoundry_Logo" />
        </div>
        <div className="ml-20 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
            <NavbarItem text="Metrics" url="/metrics"/>
            </li>
            <li>
            <NavbarItem text="Logs" url="/logs"/>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-61px h-38px p-7px mr-16px">
        <Dropdown selected={selected} setSelected={setSelected}/>
      </div>
    </nav>
  );
};
