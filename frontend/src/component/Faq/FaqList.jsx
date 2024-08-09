import React from 'react'
import FaqItems from './FaqItems'
import { faqs} from "../../assets/data/faqs.js"

const FaqList = () => {
  return (
   <ul className='mt-[38px]'>
    {faqs.map((item, index )=>
        <FaqItems item={item} key={index}/>
     )}
   </ul>
  )
}

export default FaqList
