import React from 'react'
import {BASE_URL, token} from "./../../config" 
import {toast } from "react-toastify"

const SidePanel = ({doctorId, feePrice, timeSlots}) => {

  const bookingHandler = async() => {
    try {
      const res = await fetch(`${BASE_URL}/booking/checkout-session/${doctorId}`,{
          method:'post',
          headers:{
            Authorization:`Bearer ${token}`
          }
          
      })

      const data = await res.json();
      
      if(!res.ok){
        throw new Error(data.message + 'Please try again')
      }

      if(data.session.url){
        window.location.href = data.session.url
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // const url = "https://rzp.io/l/Hlh6NkelL"
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
     <div className='flex items-center justify-between'>
      <p className='mt-0 text-[18px] leading-[30px] font-semibold text-textColor '>
        Appointment Fee</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor
        font-bold'>Rs {feePrice}-/</span>
     </div>

     <p className='text-[18px] leading-[30px] font-semibold text-headingColor mt-2'>
        Contact no.- +91 8556980902
      </p>

     <div className='mt-[25px]'>
      <p className='text-[18px] leading-[30px] font-semibold text-headingColor mt-0'>
        Available Time Slots: At Jagdish Dental Clinic, Dalhousie Road.
      </p>
      
       <ul className='mt-3'>
      {timeSlots?.map((item,index)=> (
             <li key={index} className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            {item.startingTime} - {item.endingTime}
          </p>
        </li>
        ))}
        
      </ul>
     </div>

     <div className='mt-[30px]'>
      <p className='text-[18px] leading-[30px] font-semibold text-headingColor mt-0'>
        Available Time Slots: At Shella Dental Clinic, Sundar Chack.
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

        {/* <div  onClick={() => window.open(url, '_blank')}> */}
     <button onClick={bookingHandler}
     className='px-2 w-full rounded-md
      bg-primaryColor py-[15px]  text-white font-[600] mt-[38px]'>Book Appointment</button></div>
    // </div>
  )
}

export default SidePanel
