import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarItem = ({ text, url }) => {
    const location = useLocation();
    const isActiveRoute = location.pathname === url;

    const imgSrc = isActiveRoute ? `/Assets/Sidepane/${url}_active.png` : `/Assets/Sidepane/${url}.png`;

    return (
        <Link 
            to={url} 
            className={`block py-2 px-3 md:p-0 flex items-center ${isActiveRoute ? 'border-b-4 border-[#5501E1]' : ''}`}
        >
            <img src={imgSrc} alt={text} className="w-4 mr-2" />
            <span className={`text-[${isActiveRoute ? '#010202' : '#4B5563'}]`}>{text}</span>
        </Link>
    );
}

export default NavbarItem;
