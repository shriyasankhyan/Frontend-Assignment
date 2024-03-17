import React, { useState } from 'react';
import DropDownItem from './DropDownItem';

const Dropdown = ({selected, setSelected}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = ["Last 5 minutes", "Last 15 minutes", "Last 30 minutes", "Last 1 hour", "Last 6 hours"]

  return (
    <div className="relative z-50 my-4 list-none rounded-lg border border-[#BBD2F1]" id="language-dropdown-menu">
      <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-40 text-[#3E5680] focus:ring-2 focus:outline-none focus:ring-[#BBD2F1] font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center relative z-10" type="button">
        {selected}
        <svg className={`w-2.5 h-2.5 ms-3 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isOpen && (
        <div id="dropdown" className="bg-white absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-40 font-semibold border-[#BBD2F1] border-[0.3px] rounded">
          <ul className="text-sm text-left justify-center" aria-labelledby="dropdownDefaultButton">
          {options.map(option => {
            return <DropDownItem text={option} setSelected={setSelected} setIsOpen={setIsOpen}/>
             })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
