import { TypeAnimation } from "react-type-animation";
import myImage1 from '../portfolioImages/me2.png'

function BannerSection() {
     return (
          <div className="flex flex-col gap-10 mt-10 lg:flex-row items-center justify-between">
               <div className="w-full md:flex-1/2">
                    <div className="text-center lg:text-left">
                         <div className="">
                              <h2 className="text-2xl text-white">
                                   Hii, I am <TypeAnimation sequence={['Hardiik', 1000, 'Web Developer', 1000]} wrapper="span" speed={200} style={{ fontSize: "24px", display: "inline-flex", color: "#B2FFFF" }} repeat={Infinity} />
                              </h2>
                         </div>
                         <div className="my-5">
                              <h1 className="text-4xl font-extrabold text-white">A Best Digital Product Design</h1>
                         </div>
                         <div className="mb-10">
                              <p className="text-[var(--text-color)] text-base">
                                   This is just a simple text made for this unique and awesome template, you can replace it with any text.
                              </p>
                         </div>
                         <div>
                              <a href="#" className="px-4 py-3 inline-flex text-white bg-[var(--skin-color)] rounded-md text-lg font-medium">View My Work</a>
                         </div>
                    </div>
               </div>
               <div className="md:flex-1/2">
                    <div className="w-80 mx-auto md:w-100 lg:w-70">
                         <img src={myImage1} className="object-contain rounded-full" alt="Banner-Image" />
                    </div>
               </div>
          </div>
     )
}

export default BannerSection;