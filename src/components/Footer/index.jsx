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
              <button onClick={() => window.open( 'https://www.linkedin.com/in/nathaliaacostav/')} className="p-2 rounded-lg mr-2 ">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M22.7234 0H2.27187C1.29219 0 0.5 0.773438 0.5 1.72969V22.2656C0.5 23.2219 1.29219 24 2.27187 24H22.7234C23.7031 24 24.5 23.2219 24.5 22.2703V1.72969C24.5 0.773438 23.7031 0 22.7234 0ZM7.62031 20.4516H4.05781V8.99531H7.62031V20.4516ZM5.83906 7.43438C4.69531 7.43438 3.77188 6.51094 3.77188 5.37187C3.77188 4.23281 4.69531 3.30937 5.83906 3.30937C6.97813 3.30937 7.90156 4.23281 7.90156 5.37187C7.90156 6.50625 6.97813 7.43438 5.83906 7.43438ZM20.9516 20.4516H17.3937V14.8828C17.3937 13.5562 17.3703 11.8453 15.5422 11.8453C13.6906 11.8453 13.4094 13.2937 13.4094 14.7891V20.4516H9.85625V8.99531H13.2687V10.5609H13.3156C13.7891 9.66094 14.9516 8.70938 16.6813 8.70938C20.2859 8.70938 20.9516 11.0813 20.9516 14.1656V20.4516Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3169_7045">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>Nathalia Acosta
              </button>
              <button onClick={() => window.open( 'https://www.linkedin.com/in/sebas-henao/')} className='p-2 rounded-lg mr-2 '>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M22.7234 0H2.27187C1.29219 0 0.5 0.773438 0.5 1.72969V22.2656C0.5 23.2219 1.29219 24 2.27187 24H22.7234C23.7031 24 24.5 23.2219 24.5 22.2703V1.72969C24.5 0.773438 23.7031 0 22.7234 0ZM7.62031 20.4516H4.05781V8.99531H7.62031V20.4516ZM5.83906 7.43438C4.69531 7.43438 3.77188 6.51094 3.77188 5.37187C3.77188 4.23281 4.69531 3.30937 5.83906 3.30937C6.97813 3.30937 7.90156 4.23281 7.90156 5.37187C7.90156 6.50625 6.97813 7.43438 5.83906 7.43438ZM20.9516 20.4516H17.3937V14.8828C17.3937 13.5562 17.3703 11.8453 15.5422 11.8453C13.6906 11.8453 13.4094 13.2937 13.4094 14.7891V20.4516H9.85625V8.99531H13.2687V10.5609H13.3156C13.7891 9.66094 14.9516 8.70938 16.6813 8.70938C20.2859 8.70938 20.9516 11.0813 20.9516 14.1656V20.4516Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3169_7045">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>Sebastian Henao
              </button>
              <button onClick={() => window.open( 'https://www.linkedin.com/in/jorge-arley-ospina-7a5611125/')} className='p-2 rounded-lg mr-2 '>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M22.7234 0H2.27187C1.29219 0 0.5 0.773438 0.5 1.72969V22.2656C0.5 23.2219 1.29219 24 2.27187 24H22.7234C23.7031 24 24.5 23.2219 24.5 22.2703V1.72969C24.5 0.773438 23.7031 0 22.7234 0ZM7.62031 20.4516H4.05781V8.99531H7.62031V20.4516ZM5.83906 7.43438C4.69531 7.43438 3.77188 6.51094 3.77188 5.37187C3.77188 4.23281 4.69531 3.30937 5.83906 3.30937C6.97813 3.30937 7.90156 4.23281 7.90156 5.37187C7.90156 6.50625 6.97813 7.43438 5.83906 7.43438ZM20.9516 20.4516H17.3937V14.8828C17.3937 13.5562 17.3703 11.8453 15.5422 11.8453C13.6906 11.8453 13.4094 13.2937 13.4094 14.7891V20.4516H9.85625V8.99531H13.2687V10.5609H13.3156C13.7891 9.66094 14.9516 8.70938 16.6813 8.70938C20.2859 8.70938 20.9516 11.0813 20.9516 14.1656V20.4516Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3169_7045">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>Jorge Ospina

              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="px-4 flex bg-[#0F0F0F] ">
        <div className="flex-auto w-50 ">
          <p>@2024 Streamvib, All Rights Reserved</p>
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