import React, { useEffect, useState } from 'react'
import DoctorCard from '../../component/Doctor/DoctorCard.jsx'
import Testimonial from "../../component/Testimonial/Testmonial.jsx"
import useFetchData from "../../hooks/useFetchData.jsx"
import { BASE_URL } from "../../config.js"
import Loader from "../../component/Loader/Loading.jsx"
import Error from "../../component/Error/Error.jsx"

const Doctors = () => {
  const [query, setQuery] =  useState('');
  const [debounceQuery,setDebounceQuery] = useState('')

  const handleSearch =()=>{
    setQuery(query.trim())

    console.log('handle search');
  };

  useEffect(() =>{


    const timeout = setTimeout(()=>{
        setDebounceQuery(query)
    },700)

    return()=> clearTimeout(timeout);

  },[query])
  
  const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctor?query=${query}`);

  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='max-w-full w-[1440px] px-5 mx-auto text-center'>
        <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor'> About Our Doctors!!</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-betweent'
      >
        <input type='search' 
        className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
        cursor-pointer placeholder:text-textColor' 
        value={query}
        onChange={e=> setQuery(e.target.value)}
        placeholder="Search Your Doctor by name"/>

        <button className=' bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600]  rounded-r-md' 
        onClick={handleSearch}>
        Search</button>
      </div>
      </div>
    </section>

    <section>
      <div className='max-w-full w-[1440px] px-5 mx-auto'>

        {loading && <Loader/>}
        {error && <Error/>}
      { !loading && !error && (<div className='grid grid-col-1 sm:grid-cols-2  lg:grid-cols-4
      gap-5 lg:gap-[30px] mt-[30px] lg-mt-[55px]'>
    {doctors.map(doctor => (
        <DoctorCard key={doctor._id} doctor={doctor} />
   ))}
   
    </div>)}
      </div>
    </section>

    <section>
      <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='text-[44px] leading-[54px] font-[400] text-headingColor text-center'>
            What Our patient Says.
          </h2>
          <p className='text-center  text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic maiores tempore officiis nam commodi iure sapiente minima vitae veritatis quod?
          </p>
        </div>

     <Testimonial/>


      </div>
    </section>
    </>
  )
}

export default Doctors



