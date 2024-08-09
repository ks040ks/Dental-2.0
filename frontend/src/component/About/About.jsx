import React from 'react'
import Image5 from "../../assets/images/x.png"
import Image6 from "../../assets/images/about-card.png"
import {Link} from "react-router-dom"
const About = () => {
  return (
    <section>
        <div className='max-w-full w-[1440px] px-5 mx-auto'>
            <div className='flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

                
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ml-10'>
                    <img src={Image5} alt='About img'/>
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7%] '>
                        <img src={Image6} alt='About img'/>
                    </div>
                </div>

                
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='text-4xl font-bold mb-4 '>   
                    About Our Clinic
                    </h2>
                    <p className='text-lg text-gray-700 mb-4 '> 
                    Our dental clinic offers top-notch dental care with a focus on comfort and personalized treatment. We use the latest technology and techniques to ensure your oral health is in the best hands.
                    </p>
                    <Link to="/">
                    <button className='bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px] '>Learn More..</button>
                    </Link>
                </div>
            </div>
        </div> 
        {/* <div className="container mx-auto px-4 py-20 flex flex-col  md:flex-row items-center">
      <div className="md:w-1/2 text-left md:pr-8">
        <h2 className="text-4xl font-bold mb-4 px-14">About our Clinic</h2>
        <p className="text-lg text-gray-700 mb-4 px-14 ">
          We are more than just a dental clinic. We are dedicated professional who is passionate about ensuring the best dental health for our patients.
        </p>
        <p className="text-lg text-gray-700 px-14">
          Experience the difference with us.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="" alt="About our clinic" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>*/}
    </section>
  )
}

export default About
