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
        <ul className='hidden md:flex space-x-4 bg-gray-900 border-2 border-stone-700 rounded-lg p-1'>
          <li>
            <button className="bg-gray-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true">
              Home
            </button>
          </li>
          <li>
            <button className="bg-gray-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true">
              Movies
            </button>
          </li>
          <li>
            <button className="bg-gray-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 rounded-lg text-xs" data-ripple-light="true">
              Support
            </button>
          </li>
        </ul>
        <div className="lg md:flex hidden justify-end items-center">
          <button className="bg-red-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 rounded-lg text-xs h-10" ata-ripple-light="true">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" style={{ display: 'inline' }}>
              <path d="M20.5041 0.513763C20.4812 0.511917 20.4619 0.5 20.4381 0.5H10.584C9.06783 0.5 7.83398 1.73384 7.83398 3.25V4.16661C7.83398 4.67267 8.24454 5.08339 8.7506 5.08339C9.25665 5.08339 9.66721 4.67267 9.66721 4.16661V3.25C9.66721 2.74495 10.0788 2.33339 10.584 2.33339H14.8547L14.575 2.42688C13.8327 2.68352 13.334 3.38293 13.334 4.16661V17.9166H10.584C10.0788 17.9166 9.66721 17.5051 9.66721 17V15.1666C9.66721 14.6607 9.25665 14.25 8.7506 14.25C8.24454 14.25 7.83398 14.6607 7.83398 15.1666V17C7.83398 18.5162 9.06783 19.75 10.584 19.75H13.334V20.6666C13.334 21.6777 14.1561 22.5 15.1672 22.5C15.3634 22.5 15.5496 22.4716 15.7511 22.4092L21.2585 20.5731C22.0019 20.3165 22.5006 19.6171 22.5006 18.8334V2.33339C22.5006 1.26454 21.5793 0.426651 20.5041 0.513763Z" fill="white" />            <path d="M10.3142 9.01645L6.64757 5.34984C6.38539 5.08766 5.99129 5.00877 5.64838 5.15094C5.30647 5.29294 5.0829 5.62762 5.0829 5.99789V8.74789H1.41612C0.910233 8.74789 0.499512 9.15861 0.499512 9.66451C0.499512 10.1706 0.910233 10.5813 1.41612 10.5813H5.0829V13.3313C5.0829 13.7016 5.30647 14.0361 5.64838 14.1782C5.99129 14.3202 6.38539 14.2415 6.64757 13.9793L10.3142 10.3126C10.6727 9.95421 10.6727 9.37497 10.3142 9.01645Z" fill="white" />
            </svg>
            <span className='ms-2'>Logout</span>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <ul className='flex-col text-center md:hidden'>
          <li>
            <button className="bg-gray-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true">
              Home
            </button>
          </li>
          <li>
            <button className="bg-gray-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true">
              Movies
            </button>
          </li>
          <li>
            <button className="bg-gray-800 font-bold hover:shadow-lg hover:shadow-red-500/40 px-6 py-3 m-1 rounded-lg text-xs" data-ripple-light="true">
              Support
            </button>
          </li>
        </ul>
      ) : null}



    </nav>
  )
}

export default Header