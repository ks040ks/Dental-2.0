import React from 'react'
import DOCTOR from "../assets/images/o.png"
import image1 from "../../src/assets/images/icon01.png"
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs";
import image2 from "../../src/assets/images/icon02.png"
import image3 from "../../src/assets/images/icon03.png"
import About from '../component/About/About';
import ServiceList from '../component/Service/ServiceList';
import Pd from "../assets/images/pd.png"
import VideoIcon from "../assets/images/video-icon.png"
import Doctor from '../component/Doctor/Doctor.jsx';
import faqImg from "../assets/images/faq-img.png"
import FaqList from '../component/Faq/FaqList.jsx';
import Testmonial from '../component/Testimonial/Testmonial.jsx';

const Home = () => {
  return (
    <>
    {/* =======Hero Section=== */}
    
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
    <div className='max-w-full w-[1440px] px-5 mx-auto'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        
        {/*=======hero section content ======*/}
        <div>
          <div className='lg:w-[570px] ml-10'>
          <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
          md:leading-[70px]'>
          Exceptional Dental Care For You And Your Tooth😁
          </h1>
          <p className='text_para'>
          Welcome to our dental clinic, where we provide top-notch care for all your dental needs. Say goodbye to dental problems with our expertise! We are here to help you!
          </p>

          <button className=" bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">
            Request an Appointment
          </button>
          </div>
    
        {/*======hero counter=======*/}
        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
        lg:gap-[30px] ml-11'>
          <div>
            <h2 className='text-[36px]  leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
            text-headingColor'> 5000+
            </h2>
            <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
            </span>
            <p className='text_para'>Patient Treated</p>
          </div>

          <div>
            <h2 className='text-[36px]  leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
            text-headingColor'> 100%
            </h2>
            <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>
            </span>
            <p className='text_para'>Patient Satisfaction</p>
          </div>

          <div>
            <h2 className='text-[36px]  leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
            text-headingColor'> 10+ 
            </h2>
            <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
            </span>
            <p className='text_para'>Years of Experience</p>
          </div>

        </div>

        </div>
        {/*=======hero section content ======*/}


      <div className='flex gap-[30px] justify-end ml-10'>
        <div>
          <img className='w-full' src={DOCTOR} alt='Vishall image'/>{/*  VISHAL IMAGE */}
        </div>
       
      </div>
       
      </div>
    </div>
    </section>

    <section>
      <div className="max-w-full w-[1440px] px-5 mx-auto ">
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor text-center '>
          Providing th best dental care.
          </h2>
          <p className='text_para text-center'>
          When it comes to your dental Health , trust the experts who are commited to providing exceptional care and results
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
        lg:mt-[55px] items-center'>
        {/* <div className='flex items-center justify-center mt-9'> */}

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={image1} alt='Vishall image'/>{/* VISHAL IMAGE*/}
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                About Doctor
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              We are more than just a dental clinic. We are dedicated professional who is passionate about ensuring the best dental health for our patients.
              </p>

              <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid
              border-[#181A1E] mt-[30px mx-auto flex items-center justify-center group hover:bg-primaryColor
              hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={image2} alt='Vishall image'/>{/* VISHAL IMAGE*/}
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find Location
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Locate our nearest clinic for world-class care and expert healthcare services. Accessible, convenient, and here to serve you better.
              </p>

              <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid
              border-[#181A1E] mt-[30px mx-auto flex items-center justify-center group hover:bg-primaryColor
              hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={image3} alt='Vishall image'/>{/* VISHAL IMAGE*/}
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Appointment
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Schedule your appointment with ease. Our online booking system ensures quick and convenient access to our expert healthcare services.
              </p>

              <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid
              border-[#181A1E] mt-[30px mx-auto flex items-center justify-center group hover:bg-primaryColor
              hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <About/>

    {/*=======services section======== */}
    <section>
      <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor text-center'>Our Services</h2>
          <p className='text-center  text-[16px] leading-7 mt-3'> 
          Our dental clinic provides a comprehensive range of services to meet all your oral health needs. From routine cleanings and preventive care to advanced cosmetic and restorative treatments, we are committed to delivering the highest standard of dental care.    
                     </p>
        </div>

        <ServiceList />
      </div>
    </section>
    {/*=======services section emd ======== */}

    {/**feature Section ========= */}

    <section>
      <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>

          {/* -------Feature contants========= */}
          <div className='xl:w-[670px]'>
            <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor'>
              Get Virtual Treatment.
            </h2>
            <ul className="pl-4">
              <li className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                1. Schedule the Appointment directly.</li>
                <li className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                2. Contact their office and Doctor directly.</li>
                <li className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                3. Use the Online scheduling tool to select an appointment time..</li>

            </ul>
            <Link to="/">
            <button className=' bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]'>Learn More</button>
            </Link>
          </div>

          {/*=======feature img========= */}
          <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img src={Pd} alt='' className='w-3/4'/>

            <div className='w-[150px] lg:w-[248px] bg-white absolute botton-[50px] left-0
            md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[6px] lg:gap-3'>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                  font-[700]'>Mon-Sat </p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                  font-[700]'>5:00-9:00PM </p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={VideoIcon}/>
                </span>
              </div>

              <div className='w-[65px] lg:w-[64px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px]
              lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4
              rounded-full '>
                Doctor
              </div>

              <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                <img src=''/> {/* `IMAGEEEEEEEEEEEEEEEEEEEEE */}
                <h4 className='text-[10px] leading-3 lg:text-[16px]'>Vishal Sharma</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    {/*=======feature section end ======== */}
    {/*=======our Doctors=========*/}
    <section>
    <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor text-center'>Our Doctor Info</h2>
          <p className='text-center  text-[16px] leading-7 mt-3;'>
          Our dental clinic provides a comprehensive range of services to meet all your oral health needs. From routine cleanings and preventive care to advanced cosmetic and restorative treatments, we are committed to delivering the highest standard of dental care.
          </p>
        </div>
        <Doctor/>

      </div>
    </section>
    {/*----------------our doctors-------------------- */}

{/*=========faq Section end ========*/}

<section>
      <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='flex justify-between gap-[50px] lg:gap-0 '>
          <div className='w-1/2 hidden md:block '>
            <img  src={faqImg} alt=''/> {/*=====IMAGEEE=====*/}
          </div>

          <div className='w-full md:w-1/2'>
          <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor'>
            Most question by our Beloved patients.</h2>

            <FaqList/>
          </div>

        </div>
      </div>
    </section>

    {/*=======testimonial section  ========*/}
    <section>
      <div className=' w-[1440px] px-5 mx-auto'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor text-center'>What our patients says.</h2>
          <p className='text-center  text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'> Take a look at some of the amazing transformations we've achieved for our patients. See the difference our care can make for you.</p>
        </div>

        <Testmonial/>
      </div>
    </section>

     {/*=======testimonial section  end ========*/}

    
    </>
  )
}

export default Home
