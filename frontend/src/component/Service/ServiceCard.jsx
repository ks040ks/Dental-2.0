import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs";

 const ServiceCard = ({item, index}) => {

   const {name,  desc ,bgColor, textColor} = item

  return (
    <div className='"py-[30px] px-3 lg:px-5 '>
      <h2 className='text-[26px] leading-9 font-[700] text-headingColor'>{name}</h2> 
      <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>{desc}</p>
      

      <div className='flex items-center justify-between mt-[30px]'>
      <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid
              border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor
              hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
              </Link>
              <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px]
              font-[600]' style={{
                background:`${bgColor}`,
                Color:`${textColor}`,
                borderRadius:"6px 0 0 6px"
                }}
                >{index + 1}
              </span>
      </div>
      
    </div>

    // <div className="py-16 bg-white">
    //   <div className="container mx-auto text-center">
    //     <h2 className="text-4xl font-bold mb-4">Our Work</h2>
    //     <p className="text-2xl text-gray-600 mb-8">
    //       Take a look at some of the amazing transformations we've achieved for our patients. See the difference our care can make for you.
    //     </p>
    //     <div className="border-b-2 border-gray-300 w-20 mx-auto mb-8"></div>
    //     <div className="grid grid-cols-1 md:grid-cols-3 mx-6 gap-6">
    //       <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
    //         <img
    //           src={Smile}
    //           className="w-full h-40 object-cover"
    //         />
    //         <p className="mt-2 text-black px-3 py-1 rounded">Smile Makeovers</p>
    //       </div>
    //       <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
    //         <img
    //           src={XRay}
    //           className="w-full h-40 object-cover"
    //         />
    //         <p className="mt-2 text-black px-3 py-1 rounded">Dental X-rays</p>
    //       </div>
    //       <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
    //         <img
    //           src={Ortho}
    //           className="w-full h-40 object-cover"
    //         />
    //         <p className="mt-2 absolute bottom-4 left-4 text-black px-3 py-1 rounded">Orthodontic Solution</p>
    //       </div>
    //       <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
    //         <img
    //           src={Implant}
    //           className="w-full h-40 object-cover"
    //         />
    //         <p className="mt-2 text-black px-3 py-1 rounded">Implant Procedure</p>
    //       </div>
    //       <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
    //         <img
    //           src={RCT}
    //           className="w-full h-40 object-cover"
    //         />
    //         <p className=" mt-2  text-black px-3 py-1 rounded">R C T</p>
    //       </div>
    //       <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
    //         <img
    //           src={Ped}
    //           className="w-full h-40 object-cover"
    //         />
    //         <p className=" mt-2  text-black px-3 py-1 rounded">Pediatric Dentistry</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ServiceCard

