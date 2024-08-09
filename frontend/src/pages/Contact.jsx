import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-sm'>
        <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor text-center'>
         Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-[18px] leading-[30px] text-textColor mt-[18px]'>
          Got a Technical issue? want to send a feedback about a beta feature ? let us Know..
          </p>
          <form action='#' className='space-y-8'>
            <div>
              <label htmlFor='email' className='form_label'>Your Email</label>
              <input 
              type='email' 
              id='email' 
              placeholder='example@gmail.com' 
              className=' w-full px-6 py-5 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
        text-[16px] leading-7 text-headingColor placeholder:text-textColor
        cursor-pointer rounded-md mt-1'/>
            </div>

            <div>
              <label htmlFor='subject' className=' text-textColor font-semibold text-[16px] mb-2;'>Subject</label>
              <input 
              type='text' 
              id='subject' 
              placeholder='subject' 
              className=' w-full px-6 py-5 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
        text-[16px] leading-7 text-headingColor placeholder:text-textColor
        cursor-pointer rounded-md mt-1'/>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='message' className='text-textColor font-semibold text-[16px] mb-2'>Message</label>
              <textarea
              type='text'
              rows='6' 
              id='message' 
              placeholder='Leave a Comment..' 
              className=' w-full px-6 py-5 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
        text-[16px] leading-7 text-headingColor placeholder:text-textColor
        cursor-pointer rounded-md mt-1'/>
            </div>
            <button type='submit' 
            className=' bg-primaryColor py-[15px] px-[35px] rounded sm:w-fit text-white font-[600] mt-[38px]'>
              Submit
              </button>
          </form>
      </div>
    </section>
  )
}

export default Contact
