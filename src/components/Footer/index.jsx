import React from 'react'

const index = () => {


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  return (
    <>

      <div className="px-4 flex-auto w-100 bg-[#0F0F0F]">
        <div className="flex">
          <div className="flex-auto">
            <p className='font-bold my-4'>Home</p>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('categories')}>Categories</button>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('devices')}>Devices</button>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('faq')}>FAQ</button>
          </div>
          <div className="flex-auto">
            <button className='font-bold my-4'>Movies</button>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('genres')}>Genres</button>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('popular')}>Popular</button>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('releases')}>New Releases</button>
            <button className='my-4 hover:bg-red-800 rounded-lg px-2' onClick={() => scrollToSection('must')}>Must-watch</button>
          </div>
          <div className="flex-auto">
            <p className='font-bold my-4'>Support</p>
            <p className='my-4'>Contact Us</p>
          </div>
          <div className="flex-auto">
            <p className='font-bold my-4'>Connect With Us</p>
            <div className="flex">
              <button className="bg-zinc-700 p-2 rounded-lg mr-2 ">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 17.9895 4.8882 22.954 10.625 23.8542V15.4687H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1576 4.6875C16.4701 4.6875 17.8438 4.92187 17.8438 4.92187V7.875H16.3306C14.84 7.875 14.375 8.80008 14.375 9.75V12H17.7031L17.1711 15.4687H14.375V23.8542C20.1118 22.954 24.5 17.9895 24.5 12Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3169_7039">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className='bg-zinc-700 p-2 rounded-lg mr-2 '>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M8.05016 21.7497C17.1045 21.7497 22.0583 14.2465 22.0583 7.74162C22.0583 7.53068 22.0536 7.31505 22.0442 7.10412C23.0079 6.40722 23.8395 5.54401 24.5 4.55505C23.6025 4.95436 22.6496 5.21514 21.6739 5.32849C22.7013 4.71266 23.4705 3.74523 23.8391 2.60552C22.8726 3.17831 21.8156 3.58237 20.7134 3.80037C19.9708 3.01132 18.989 2.48887 17.9197 2.31381C16.8504 2.13874 15.7532 2.32081 14.7977 2.83185C13.8423 3.3429 13.0818 4.15446 12.6338 5.14107C12.1859 6.12767 12.0754 7.23437 12.3195 8.29005C10.3625 8.19185 8.44794 7.68346 6.69998 6.79785C4.95203 5.91225 3.40969 4.66919 2.17297 3.14927C1.5444 4.233 1.35206 5.5154 1.63503 6.73585C1.918 7.95629 2.65506 9.0232 3.69641 9.71974C2.91463 9.69492 2.14998 9.48444 1.46563 9.10568V9.16662C1.46492 10.3039 1.8581 11.4063 2.57831 12.2865C3.29852 13.1667 4.30132 13.7703 5.41625 13.9947C4.69206 14.1929 3.93198 14.2218 3.19484 14.0791C3.50945 15.0572 4.12157 15.9126 4.94577 16.5261C5.76997 17.1395 6.76512 17.4804 7.79234 17.501C6.04842 18.8709 3.89417 19.6139 1.67656 19.6104C1.28329 19.6098 0.890399 19.5857 0.5 19.5382C2.75286 20.9835 5.37353 21.7511 8.05016 21.7497Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3169_7042">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className='bg-zinc-700 p-2 rounded-lg mr-2 '>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M22.7234 0H2.27187C1.29219 0 0.5 0.773438 0.5 1.72969V22.2656C0.5 23.2219 1.29219 24 2.27187 24H22.7234C23.7031 24 24.5 23.2219 24.5 22.2703V1.72969C24.5 0.773438 23.7031 0 22.7234 0ZM7.62031 20.4516H4.05781V8.99531H7.62031V20.4516ZM5.83906 7.43438C4.69531 7.43438 3.77188 6.51094 3.77188 5.37187C3.77188 4.23281 4.69531 3.30937 5.83906 3.30937C6.97813 3.30937 7.90156 4.23281 7.90156 5.37187C7.90156 6.50625 6.97813 7.43438 5.83906 7.43438ZM20.9516 20.4516H17.3937V14.8828C17.3937 13.5562 17.3703 11.8453 15.5422 11.8453C13.6906 11.8453 13.4094 13.2937 13.4094 14.7891V20.4516H9.85625V8.99531H13.2687V10.5609H13.3156C13.7891 9.66094 14.9516 8.70938 16.6813 8.70938C20.2859 8.70938 20.9516 11.0813 20.9516 14.1656V20.4516Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3169_7045">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>

              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="px-4 flex bg-[#0F0F0F] ">
        <div className="flex-auto w-50 ">
          <p>@2023 streamvib, All Rights Reserved</p>
        </div>
        <div className="border-2 flex-auto w-50">
          <div className="flex justify-end">
            <p className='ps-8'>Terms of Use</p>
            <p className='ps-8'>Privacy Policy</p>
            <p className='ps-8'>Cookie Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default index