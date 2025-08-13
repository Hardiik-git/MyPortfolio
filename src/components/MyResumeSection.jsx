import { useState } from 'react';
import myImage2 from '../portfolioImages/Me1.png';
import html from '../PortfolioImages/HTML.png';
import css from '../PortfolioImages/CSS.png';
import js from '../PortfolioImages/JS.png';
import reactjs from '../PortfolioImages/ReactJs.png';

export default function ResumeTabSwitcher() {
     const tabs = ['About Me', 'Experience', 'Education', 'Skills'];
     const [activeIndex, setActiveIndex] = useState(0);

     return (
          <div className="py-10">
               <div className="container mx-auto">
                    <div className="text-center w-1/2 mx-auto">
                         <p className="px-5 py-3 text-[var(--skin-color)] font-medium border-2 rounded-full border-[var(--skin-color)] capitalize">Resume</p>
                    </div>
                    <div className="text-center py-5">
                         <h2 className="text-black font-semibold text-3xl">My Resume</h2>
                    </div>
                    <div className="relative bg-[var(--light-color)] overflow-hidden rounded-full">
                         {/* Sliding Red Background */}
                         <div className="absolute top-0 left-0 h-[40px] w-[25%] bg-[var(--skin-color)] transition-transform duration-300 rounded-full" style={{ transform: `translateX(${activeIndex * 100}%)` }}></div>

                         {/* Tab Buttons */}
                         <div className="relative z-10 flex">
                              {tabs.map((tab, index) => (<button key={tab} onClick={() => setActiveIndex(index)} className={`w-full py-2 text-center font-medium transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-700'}`}>{tab}</button>))}
                         </div>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6">
                         {activeIndex === 0 &&
                              <div className='px-4'>
                                   <div className='flex flex-col-reverse gap-5 md:flex-row'>
                                        <div className='flex-1/2 p-5 border-1 rounded-md'>
                                             <div className='mb-5'>
                                                  <h2 className='text-black font-medium text-3xl'>Lead Software Developer</h2>
                                             </div>
                                             <div>
                                                  <p className='text-[color:red;]'>Hello, I'm Hardik, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry, specializing in creating user-centric products that exceed expectations. Let's collaborate and bring your ideas to life!</p>
                                             </div>
                                             <div className='mt-5'>
                                                  <div>
                                                       <p className='font-semibold text-base'>Name : Hardik</p>
                                                       <p className='font-semibold text-base'>Nationality : Indian</p>
                                                       <p className='font-semibold text-base'>E-mail : hardiik003@gmail.com</p>
                                                       <p className='font-semibold text-base'>Phone : +91 82954-48963</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='flex-1/2'>
                                             <div className='overflow-hidden'>
                                                  <img src={myImage2} alt="My Image" className='rounded-md h-[350px] mx-auto' />
                                             </div>
                                        </div>
                                   </div>
                              </div>}
                         {activeIndex === 1 &&
                              <div className='px-4'>
                                   <div>
                                        <div className='flex-col gap-5 flex md:flex md:gap-5 md:justify-between md:flex-row'>
                                             <div className='p-5 border-1 rounded-sm'>
                                                  <div className='pb-1'>
                                                       <p className='text-sm'>Present</p>
                                                  </div>
                                                  <div className='pb-1'>
                                                       <h5 className='text-base font-semibold'>Junior Web Developer</h5>
                                                       <h5 className='text-base font-semibold'>Web Media Infotech, Zirakpur</h5>
                                                  </div>
                                                  <div>
                                                       <p className='text-base'>Enhance the knowledge about Web Designs And Development</p>
                                                  </div>
                                             </div>
                                             <div className='p-5 border-1 rounded-sm'>
                                                  <div className='pb-1'>
                                                       <p className='text-sm'>Aug 2023 - Dec 2023</p>
                                                  </div>
                                                  <div className='pb-1'>
                                                       <h5 className='text-base font-semibold'>Web Designer Intern</h5>
                                                       <h5 className='text-base font-semibold'>Apptunix Technologies Pvt. Ltd., Mohali </h5>
                                                  </div>
                                                  <div>
                                                       <p className='text-base'>As an intern, I actively participated in front-end web development, refining my skills in HTML, CSS, and Bootstrap. </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>}
                         {activeIndex === 2 &&
                              <div className='px-4'>
                                   <div>
                                        <div className='flex-col gap-5 flex md:flex md:gap-5 md:justify-between md:flex-row'>
                                             <div className='p-5 border-1 rounded-sm'>
                                                  <div className='pb-1'>
                                                       <p className='text-sm'>July 2021 - July 2023</p>
                                                  </div>
                                                  <div className='pb-1'>
                                                       <h5 className='text-base font-semibold'>Diploma In Computer Enggineering</h5>
                                                       <h5 className='text-base font-semibold'>Govt. Polytechnic Ambala City</h5>
                                                  </div>
                                             </div>
                                             <div className='p-5 border-1 rounded-sm'>
                                                  <div className='pb-1'>
                                                       <p className='text-sm'>April 2020 - March 2021</p>
                                                  </div>
                                                  <div className='pb-1'>
                                                       <h5 className='text-base font-semibold'>12th with Science</h5>
                                                       <h5 className='text-base font-semibold'>Govt. Sr. Sec. School Nahoni, Ambala</h5>
                                                  </div>
                                             </div>
                                             <div className='p-5 border-1 rounded-sm'>
                                                  <div className='pb-1'>
                                                       <p className='text-sm'>April 2018 - March 2019</p>
                                                  </div>
                                                  <div className='pb-1'>
                                                       <h5 className='text-base font-semibold'>10th</h5>
                                                       <h5 className='text-base font-semibold'>Govt. Sr. Sec. School Gokalgarh, Ambala</h5>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </div>}
                         {activeIndex === 3 &&
                              <div className='px-4'>
                                   <div>
                                        <div className='flex-col gap-5 flex justify-center md:flex md:gap-5 md:justify-between md:flex-row'>
                                             <div className='bg-gray-950 rounded-full border-1 w-[300px] h-[300px] mx-auto flex items-center justify-center flex-col gap-5'>
                                                  <div>
                                                       <img src={html} alt="" className='w-20 h-20 object-contain' />
                                                  </div>
                                                  <div>
                                                       <h2 className='text-white text-3xl font-semibold'>98%</h2>
                                                  </div>
                                                  <div>
                                                       <h5 className='text-white font-medium text-lg'>HTML</h5>
                                                  </div>
                                             </div>
                                             <div className='bg-gray-950 rounded-full border-1 w-[300px] h-[300px] mx-auto flex items-center justify-center flex-col gap-5'>
                                                  <div>
                                                       <img src={css} alt="" className='w-20 h-20 object-contain' />
                                                  </div>
                                                  <div>
                                                       <h2 className='text-white text-3xl font-semibold'>90%</h2>
                                                  </div>
                                                  <div>
                                                       <h5 className='text-white font-medium text-lg'>CSS</h5>
                                                  </div>
                                             </div>
                                             <div className='bg-gray-950 rounded-full border-1 w-[300px] h-[300px] mx-auto flex items-center justify-center flex-col gap-5'>
                                                  <div>
                                                       <img src={js} alt="" className='w-20 h-20 object-contain' />
                                                  </div>
                                                  <div>
                                                       <h2 className='text-white text-3xl font-semibold'>80%</h2>
                                                  </div>
                                                  <div>
                                                       <h5 className='text-white font-medium text-lg'>Java Script</h5>
                                                  </div>
                                             </div>
                                             <div className='bg-gray-950 rounded-full border-1 w-[300px] h-[300px] mx-auto flex items-center justify-center flex-col gap-5'>
                                                  <div>
                                                       <img src={reactjs} alt="" className='w-20 h-20 object-contain' />
                                                  </div>
                                                  <div>
                                                       <h2 className='text-white text-3xl font-semibold'>60%</h2>
                                                  </div>
                                                  <div>
                                                       <h5 className='text-white font-medium text-lg'>React JS</h5>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>}
                    </div>
               </div>
          </div>
     );
}
