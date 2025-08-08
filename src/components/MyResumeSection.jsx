import { useState } from 'react';

export default function ResumeTabSwitcher() {
     const tabs = ['Home', 'Profile', 'Settings'];
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
                    <div className="relative bg-[var(--light-color)] overflow-hidden">
                         {/* Sliding Red Background */}
                         <div className="absolute top-0 left-0 h-[40px] w-full bg-[var(--skin-color)] transition-transform duration-300" style={{ transform: `translatey(${activeIndex * 100}%)` }}></div>

                         {/* Tab Buttons */}
                         <div className="relative z-10 flex flex-col">
                              {tabs.map((tab, index) => (<button key={tab} onClick={() => setActiveIndex(index)} className={`w-full py-2 text-center font-medium transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-700'}`}>{tab}</button>))}
                         </div>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6 text-lg text-gray-700">
                         {activeIndex === 0 &&
                              <div className='px-4'>
                                   <div className='flex'>
                                        <div className='flex-1/2'>
                                             <div>
                                                  <h2 className='text-black font-medium text-3xl'>Lead Software Developer</h2>
                                             </div>
                                             <div>
                                                  <p className='text-[var(--light-color)]'>Hello, I'm Hardik, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry, specializing in creating user-centric products that exceed expectations. Let's collaborate and bring your ideas to life!</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>}
                         {activeIndex === 1 && <div>👤 This is the Profile tab content.</div>}
                         {activeIndex === 2 && <div>⚙️ This is the Settings tab content.</div>}
                    </div>
               </div>
          </div>
     );
}
