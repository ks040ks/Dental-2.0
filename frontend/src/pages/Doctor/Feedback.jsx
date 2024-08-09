import React, { useState } from 'react'
import avatar from "../../assets/images/p.png"
import {AiFillStar} from "react-icons/ai"
import FeedbackForm from './FeedbackForm'
const Feedback = () => {

  const[showFeedbackForm, setShowFeedbackShow] = useState(false)



  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb:[30px]'>
          All reviews
        </h4>

      <div className='flex justify-between gap-10 mb-[30px]'>
        <div className='flex gap-3'>
        <figure className='w-10 h-10 rounded-full'>
          <img className =" w-full"src={avatar}/> {/*=====PHOTOOOO*/}
        </figure>

        <div>
          <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
            Ali ahemd
          </h5>
          <p className='text-[14px] leading-6 text-textColor'>
            4 June, 2024
          </p>
          <p className='mt-3 font-medium leading-[30px]  text-textColor '>
            Good Service, highly recommendation. 👍
          </p>
        </div>
      </div>

      <div className='flex gap-1'>
        {[...Array(5).keys()].map((_,  index) =>
           <AiFillStar key={index} color='#0067FF'/>)}
      </div>
      </div>
      </div>

     {!showFeedbackForm && <div className='text-center'>
        <button className=' bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]'
        onClick={() => setShowFeedbackShow(true)}>
          Give Feedback
        </button>
      </div>}

       {
        showFeedbackForm && <FeedbackForm />
       } 


    </div>
  )
}

export default Feedback
