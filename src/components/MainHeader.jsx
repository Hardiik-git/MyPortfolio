import { useState } from 'react';
import myLogo from '../portfolioImages/MyLogo.png';
import BannerSection from './BannerSection';

function MainHeader() {
     const [isNavOpen, setIsNavOpen] = useState(false);

     return (
          <div className="bg-[url('./src/portfolioImages/bg1.png')] h-[1000px] bg-cover bg-no-repeat bg-center w-full md:h-screen">
               <div className="container mx-auto px-4">
                    {/* Navigation Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between py-5">
                         {/* Logo */}
                         <div className='w-full flex justify-between md:flex-1/3'>
                              <a href="#"><img src={myLogo} alt="My-Logo" className='w-28 h-auto object-contain' /></a>
                              <div className='md:hidden'>
                                   <button className='open-nav text-right text-white p-3 rounded-sm' onClick={() => setIsNavOpen(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                             className="size-6">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                        </svg>
                                   </button>
                              </div>
                         </div>

                         {/* Navigation Links */}
                         <div className={`nav-bar flex flex-col gap-8 text-center w-full h-lvh fixed top-0 p-6 bg-black z-10 transition-all duration-300 ease-in-out md:static md:h-auto md:w-auto md:p-0 md:bg-transparent md:flex md:items-center md:z-auto md:flex-row ${isNavOpen ? 'left-0' : '-left-full'}`}>
                              <div className='w-full text-right md:hidden'>
                                   <button className='close-x text-right p-3 text-white' onClick={() => setIsNavOpen(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                             className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                   </button>
                              </div>
                              <a href="#" className='block text-white font-semibold uppercase text-xs tracking-widest'>Home</a>
                              <a href="#" className='block text-white font-semibold uppercase text-xs tracking-widest'>About Us</a>
                              <a href="#" className='block text-white font-semibold uppercase text-xs tracking-widest'>Work</a>
                              <a href="#" className='block text-white font-semibold uppercase text-xs tracking-widest'>Services</a>
                              <a href="#" className='block text-white font-semibold uppercase text-xs tracking-widest'>Testimonial</a>
                              <a href="#" className='block text-white font-semibold uppercase text-xs tracking-widest'>Contact</a>
                         </div>
                    </div>
                    <>
                         <BannerSection />
                    </>
               </div>
          </div>
     );
}

export default MainHeader;
