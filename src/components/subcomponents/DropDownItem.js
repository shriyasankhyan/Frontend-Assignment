import React from 'react'

const DropDownItem = ({text, setSelected, setIsOpen}) => {
  const handleClick = () =>{
    setSelected(text);
    setIsOpen(false);
  }
  return (
    <li className="border-b border-[#E0ECFD] hover:bg-gray-100 p-1">
    <button onClick={handleClick} className="block px-4 py-1">
    {text}
    </button>
  </li>
  )
}

export default DropDownItem;
