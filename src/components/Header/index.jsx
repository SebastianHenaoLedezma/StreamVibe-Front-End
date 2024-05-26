import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="cursor-pointer">
          <img src={Logo} alt="Logo" onClick={() => handleButtonClick('/')}/>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="border-neutral-600 hidden md:flex space-x-4 bg-[#0F0F0F] border-solid border-2 rounded-lg p-2">
          <li>
            <button className={location.pathname === '/'
              ? 'font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs bg-neutral-800'
              : 'font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs'} onClick={() => handleButtonClick('/')} data-ripple-light="true">
              Home
            </button>
          </li>
          <li>
            <button className={location.pathname === '/movies'
              ? 'font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs bg-neutral-800'
              : 'font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs'} onClick={() => handleButtonClick('/movies')} data-ripple-light="true">
              Movies
            </button>
          </li>
          {/* <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true" onClick={() => handleButtonClick('/support')}>
              Support
            </button>
          </li> */}
        </ul>
        <div className="lg md:flex hidden justify-end items-center gap-2">
          <button className="border-solid border-2 border-neutral-700 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 rounded-lg text-xs h-10" data-ripple-light="true" onClick={() => handleButtonClick('/login')}>
            Login
          </button>
          <button className="bg-red-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 rounded-lg text-xs h-10" data-ripple-light="true" onClick={() => handleButtonClick('/register')}>
            Register
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <ul className="flex-col text-center md:hidden">
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true" onClick={() => handleButtonClick('/')}>
              Home
            </button>
          </li>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true" onClick={() => handleButtonClick('/movies')}>
              Movies
            </button>
          </li>
          {/* <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true" onClick={() => handleButtonClick('/support')}>
              Support
            </button>
          </li> */}
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
