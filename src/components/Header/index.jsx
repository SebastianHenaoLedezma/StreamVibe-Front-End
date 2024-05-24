import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='p-4'>
      <div className="flex items-center justify-between">
        <div className="">
          <img src="src/assets/icons/Logo.png" alt="Logo" />
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toogleMenu}>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        <ul className='border-neutral-600 hidden md:flex space-x-4 bg-gray-950 border-solid border-2 rounded-lg p-2'>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true">
              Home
            </button>
          </li>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true">
              Movies
            </button>
          </li>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true">
              Support
            </button>
          </li>
        </ul>
        <div className="lg md:flex hidden justify-end items-center gap-2">
          <button className="border-solid border-2 border-neutral-700 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 rounded-lg text-xs h-10" ata-ripple-light="true">
            Login
          </button>
          <button className="bg-red-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 rounded-lg text-xs h-10" ata-ripple-light="true">
            Register
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <ul className='flex-col text-center md:hidden'>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true">
              Home
            </button>
          </li>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true">
              Movies
            </button>
          </li>
          <li>
            <button className="bg-neutral-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true">
              Support
            </button>
          </li>
        </ul>
      ) : null}



    </nav>
  )
}

export default Header