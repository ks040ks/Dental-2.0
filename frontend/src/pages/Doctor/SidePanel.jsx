import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
     <div className='flex items-center justify-between'>
      <p className='mt-0 text-[18px] leading-[30px] font-semibold text-textColor '>
        Appointment Fee</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor
        font-bold'>29-/ RS</span>
     </div>

     <div className='mt-[30px]'>
      <p className='text-[18px] leading-[30px] font-semibold text-headingColor mt-0'>
        Available Time Slots: At Jagdish Dental Clinic, Badhroya.
      </p>
      <ul className='mt-3'>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            Sunday
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            9:00 AM - 2:00 PM
          </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            Mon - Sat 
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            5:00 PM - 8:30 PM
          </p>
        </li>
        
      </ul>
     </div>

     <div className='mt-[30px]'>
      <p className='text-[18px] leading-[30px] font-semibold text-headingColor mt-0'>
        Available Time Slots: At Jagdish Dental Clinic, Badhroya.
      </p>
      <ul className='mt-3'>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            Mon - Sat 
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            11:00 AM - 02:30 PM
          </p>
        </li>     
      </ul>
     </div>

     <button className='px-2 w-full rounded-md
      bg-primaryColor py-[15px]  text-white font-[600] mt-[38px]'>Book Appointment</button>
    </div>
  )
}

export default SidePanel
