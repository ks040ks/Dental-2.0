import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../component/Service/ServiceCard'

const Service = () => {
  return (<section>
    <div className='max-w-full w-[1440px] px-5 mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-5 lg:gap-[30px]
   mt-[30px] lg:mt-[55px]'>
    {services.map((item, index) => 
        <ServiceCard item={item} index={index} key={index}/>)}
   </div>
    </div>
  </section>)
}

export default Service

