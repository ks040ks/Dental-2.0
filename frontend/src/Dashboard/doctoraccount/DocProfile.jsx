

import React, { useEffect, useState } from 'react'
import {AiOutlineDelete} from "react-icons/ai"
import uploadImageToCloudinary from "./../../utils/cloudinary";
import { BASE_URL,token } from "./../../config";
import {toast} from "react-toastify"
import useGetProfile from "../../hooks/useFetchData"


const DocProfile = ({doctorData}) => {

    const [formData, setFormData] = useState({
        name:'',
        email:"",
        password:"",
        phone:"",
        bio:"",
        gender:"",
        specialization:"",
        feePrice:31,
        qualification:[],
        experiences:[],
        timeSlots:[],
        about:"",
        photo:null

    })


    // useEffect(() => {
    //     setFormData({
    //         name:doctorData?.name,
    //         email:doctorData?.email,
    //         bio:doctorData?.bio,
    //         phone:doctorData?.phone,
    //         gender:doctorData?.gender,
    //         specialization:doctorData?.specialization,
    //         feePrice:31,
    //         qualification:doctorData?.qualification,
    //         experiences:doctorData?.experiences,
    //         timeSlots:doctorData?.timeSlots,
    //         about:doctorData?.about,
    //         photo:doctorData?.photo
    //     })
    // },[doctorData])

    const handleInputChange = e=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleFileInputChange =async event =>{

            const file = event.target.files[0]
            const data = await uploadImageToCloudinary(file)
              
            setFormData({...formData, photo:data?.url})
    }

    const updateProfileHandler = async (e) =>{
               e.preventDefault();
                console.log(doctorData);
console.log(doctorData ? doctorData._id : 'No doctor data');

               if (!doctorData) {
                toast.error("Doctor data is not loaded yet");
                return;
              }
        
               try {
                 const res = await fetch(`${BASE_URL}/doctor/${doctorData._id}`, {
                   method:"put",
                   headers:{
                     "content-type":"application/json",
                     Authorization :`Bearer ${token}`
                   },
                   body: JSON.stringify(formData)
                 })
        
                   const result = await res.json()
        
                 if(!res.ok){
                   throw Error(result.message)
                 }
        
                 toast.success(result.message);
        
        
               } catch (error) {
                 toast.error(error.message, "failed!")
               }
    };


    //// reusable FUNCTIONN FOR adding item
    const addItem = (key, item) => {

        setFormData(prevformData => (
            {...prevformData,
            [key]:[...prevformData[key], item]
        }))
    };

    ////reuasble INPUT CHANGE FUNC
    const handleReusableInputChangeFunc = (key,index,event) =>{

        const {name, value} = event.target

        setFormData(prevformData=>{
            const updateItems = [...prevformData[key]]

            updateItems[index][name]= value

            return{
                ...prevformData,
                [key]: updateItems,
            }
        })
    };

    /// reusable function  for deleting item

    const deleteItem = (key,index)=>{
        setFormData(prevformData => ({
            ...prevformData,
            [key]:prevformData[key].filter((_,i) =>i !== index ),
        }))
    }

    const addQualification = e=>{
        e.preventDefault()

        addItem('qualification',{
            startingDate:"",
            endingDate:"",
            degree:"BDS (Bachelor of Dental Surgery)",
            university:"Himachal Pradesh University"
        })
    }  ;
    
    const handleQualificationChange = (event,index) => {
                handleReusableInputChangeFunc('qualification', index,event)
    }
        
    const deleteQualification = (e, index) => {
               e.preventDefault()
               deleteItem('qualification', index)
    };

    const addExperiences = e=>{
               e.preventDefault()
        
            addItem('experiences',{
                startingDate:"",
                endingDate:"",
                position:"JR. Dentist",
                hospital:"Civil Hospital, PTK."
            })
    } ;
            
    const handleExperienceChange = (event,index) => {
                   handleReusableInputChangeFunc('experiences', index,event)
    }
                
    const deleteExperience = (e, index) => {
                       e.preventDefault()
                       deleteItem('experiences', index)
    };

    const addTimeSlots  = e=>{
                        e.preventDefault()
                 
                     addItem('timeSlots',{
                        day:"Sunday",
                        startingTime:"10:00",
                        endingTime:"1:30"
                     })
     } ;
                     
    const handleTimeSlotChange = (event,index) => {
                            handleReusableInputChangeFunc('timeSlots', index,event)
   }
                         
    const deleteTimeSlot = (e, index) => {
        e.preventDefault()
        deleteItem('timeSlots', index)
      };

  return (
    <div>
        <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
            Profile Information
        </h2>

                <form>
                <div className='mb-5'>
                 <p  
                 className=' text-textColor font-semibold text-[16px] mb-2'>Name*</p>
                 <input 
                 type='text' 
                 name='name' 
                 value={formData.name} 
                 onChange={handleInputChange}
                 placeholder='Full Name' 
                 className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                text-[16px] leading-7 text-headingColor placeholder:text-textColor
                cursor-pointer rounded-md'/>
             </div>
             <div className='mb-5'>
                 <p  
                 className=' text-textColor font-semibold text-[16px] mb-2'>Email*</p>
                 <input 
                 type='email' 
                 name='email' 
                 value={formData.email} 
                 onChange={handleInputChange}
                 placeholder='Email' 
                 className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                text-[16px] leading-7 text-headingColor placeholder:text-textColor
                cursor-pointer rounded-md'
                readOnly
                aria-readonly
                disabled={true}
                />
             </div>
             <div className='mb-5'>
                 <p  
                 className=' text-textColor font-semibold text-[16px] mb-2'>Phone*</p>
                 <input 
                 type='number' 
                 name='number' 
                 value={formData.phone} 
                 onChange={handleInputChange}
                 placeholder='Phone number' 
                 className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                text-[16px] leading-7 text-headingColor placeholder:text-textColor
                cursor-pointer rounded-md'
           
                />
             </div>
             <div className='mb-5'>
                 <p  
                 className=' text-textColor font-semibold text-[16px] mb-2'>Bio*</p>
                 <input 
                 type='text' 
                 name='bio' 
                 value={formData.bio} 
                 onChange={handleInputChange}
                 placeholder='Bio' 
                 className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                text-[16px] leading-7 text-headingColor placeholder:text-textColor
                cursor-pointer rounded-md'
           
                />
             </div>
             <div className="mb-5">
             <div className='grid grid-cols-3 gap-5 mb-[30px]'>
                 <div>
                     <p className=' text-textColor font-semibold text-[16px] mb-2'>Gender*</p>
                     <select name="gender" 
                     value={formData.gender} 
                     onChange={handleInputChange}
                     className='w-full px-6 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                    text-[16px] leading-7 text-headingColor placeholder:text-textColor
                    cursor-pointer rounded-md py-3.5'>
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
           
         </select>
            </div>
            <div>
                     <p className=' text-textColor font-semibold text-[16px] mb-2'>Specialization*</p>
                     <select name="specialization" 
                     value={formData.specialization} 
                     onChange={handleInputChange}
                     className='w-full px-6 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                    text-[16px] leading-7 text-headingColor placeholder:text-white
                    cursor-pointer rounded-md py-3.5'>
             <option value="">Select</option>
             <option value="Dentist">SR.Dentist</option>
             <option value="AllRounder">Allrounder</option>
           
         </select>
            </div>
            <div>
                <p className='text-textColor font-semibold text-[16px] mb-2'>
                    Fee Price*
                </p>
                <input type='number' 
                placeholder='100' name='feePrice' 
                value={formData.feePrice}
                className='w-full px-6 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                text-[16px] leading-7 text-headingColor placeholder:text-textColor
                cursor-pointer rounded-md py-3'
                onChange={handleInputChange}/>
            </div>
            </div>
            </div>

            <div className='mb-5'>
            <p className='text-textColor font-semibold text-[16px] mb-2'>Qualification*</p>
            {formData.qualification?.map((item,index)=> 
            <div key={index}>
                <div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Starting Date*
                            </p>
                            <input type='date' 
                            name='startingDate' 
                            value={item.startingDate}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleQualificationChange(e,index)}/>
                        </div>
                         <div>
                            <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Ending Date*
                            </p>
                            <input type='date' 
                            name='endingDate' 
                            value={item.endingDate}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleQualificationChange(e,index)}/>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div>
                        <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Degree*
                            </p>
                            <input type='text' 
                            name='degree' 
                            value={item.degree}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleQualificationChange(e,index)}/>
                        </div>
                        <div>
                        <p className='text-textColor font-semibold text-[16px] mb-2'>
                                University*
                            </p>
                            <input type='text' 
                            name='university' 
                            value={item.university}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleQualificationChange(e,index)}/>
                            </div>
                    </div>

                    <button onClick={e=>deleteQualification(e,index)}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer '>
                   <AiOutlineDelete/>
                 </button>
                </div>
            </div>)}

            <button onClick={addQualification}
            className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Qualification
            </button>
            </div>

            <div className='mb-5'>
            <p className='text-textColor font-semibold text-[16px] mb-2'>Experiences*</p>
            {formData.experiences?.map((item,index)=> 
            <div key={index}>
                <div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Starting Date*
                            </p>
                            <input type='date' 
                            name='startingDate' 
                            value={item.startingDate}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleExperienceChange(e,index)}/>
                        </div>
                         <div>
                            <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Ending Date*
                            </p>
                            <input type='date' 
                            name='endingDate' 
                            value={item.endingDate}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleExperienceChange(e,index)}/>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div>
                        <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Position*
                            </p>
                            <input type='text' 
                            name='position' 
                            value={item.position}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleExperienceChange(e,index)}/>
                        </div>
                        <div>
                        <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Hospital*
                            </p>
                            <input type='text' 
                            name='clinic' 
                            value={item.hospital}
                            className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleExperienceChange(e,index)}/>
                            </div>
                    </div>

                    <button onClick={e=>deleteExperience(e,index)}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer '>
                   <AiOutlineDelete/>
                 </button>
                </div>
            </div>)}

            <button onClick={addExperiences}
            className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Experience
            </button>

            
            </div>
            <div className='mb-5'>
            <p className='text-textColor font-semibold text-[16px] mb-2'>Time Slots*</p>
            {formData.timeSlots?.map((item,index)=> 
            <div key={index}>
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                        <div>
                            <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Days*
                            </p>
                          <select name='day' 
                          value={item.day}
                          className='w-full px-6 py-4 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md
                            '
                            onChange={e=> handleTimeSlotChange(e,index)}>
                            <option value="">Select</option>
                            <option value="sunday">Sunday</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thrusday">Thrusday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                           
                            </select>
                        </div>
                         <div>
                            <p className='text-textColor font-semibold text-[16px] mb-2'>
                                Starting Time*
                            </p>
                            <input type='time' 
                            name='startingTime' 
                            value={item.startingTime}
                            className='w-full px-6 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleTimeSlotChange(e,index)}/>
                        </div>
                        
                        <div>
                        <p className='text-textColor font-semibold text-[16px] mb-2'>
                                End Time*
                            </p>
                            <input type='time' 
                            name='endingTime' 
                            value={item.endingTime}
                            className='w-full px-6 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
                            text-[16px] leading-7 text-headingColor placeholder:text-textColor
                            cursor-pointer rounded-md'
                            onChange={e=> handleTimeSlotChange(e,index)}/>
                        </div>

                        <div className='flex items-center'
                        onClick={e=>deleteTimeSlot(e,index)}>
                        <button 
                    className='bg-red-600 p-2 rounded-full text-white text-[18px]  mb-[30px] cursor-pointer mt-6'>
                   <AiOutlineDelete/>
                 </button>
                        </div>
                        </div>
                   
                </div>
            </div>
           )}
            <button onClick={addTimeSlots}
            className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add TimeSlots
            </button>

            
            </div>
            <div className="mb-5">
            <p className='text-textColor font-semibold text-[16px] mb-2'>About*</p>
             <textarea name="about" rows={5} 
             value={formData.about} placeholder='Write about you'
             onChange={handleInputChange} className='w-full px-6 py-5 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor
         text-[16px] leading-7 text-headingColor placeholder:text-textColor
         cursor-pointer rounded-md'></textarea>
         </div>

         <div className='mb-5 flex items-center gap-3'>
         {formData.photo && (
                   <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                     <img 
                     src={formData.photo} 
                     className='w-full rounded-full' />
                   </figure>
                 )}

                 <div className='relative w-[160px] h-[50px]'>
                   <input
                     type='file'
                     name='photo'
                     id="customFile"
                     onChange={handleFileInputChange}
                     accept='jpg.png'
                     className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                   />
                   <label
                     htmlFor='customFile'
                     className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] p-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
                   >
                     Upload Photo..
                   </label>
                   </div>
         </div>

         <div className="mt-7">
            <button type='submit' onClick={updateProfileHandler} 
            className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4
            rounded-lg'>
            Update Profile
            </button>
         </div>
        </form>
    </div>
    
    
  )
}

export default DocProfile

