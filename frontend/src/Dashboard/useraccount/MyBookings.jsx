import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Loading from '../../component/Loader/Loading'
import Error from '../../component/Error/Error'
import DoctorCard from "../../component/Doctor/DoctorCard"

const MyBookings = () => {

    const {data:appointments, loading,error} = useFetchData(`${BASE_URL}/users/appointments/my-appointment`)


  return (
    <div>
       {loading && !error && <Loading/>}

    {error && !loading && <Error errorMessage={error}/>}

    {!loading && !error && (<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
            appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id}/>
        ))}
        </div>
    )}

    {!loading && !error && appointments.length === 0 && 
    <h2 className='mt-5 text-center  leading-7 text-[20px] font-semibold text-primaryColor'>
         You did not take appointment from doctor! </h2>}
    </div>
  )
}

export default MyBookings
