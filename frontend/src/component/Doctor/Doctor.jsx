import useFetchData from "../../hooks/useFetchData.jsx"
import { BASE_URL } from "../../config.js"
import DoctorCard from "./DoctorCard.jsx";
import Loader from "../../component/Loader/Loading.jsx"
import Error from "../../component/Error/Error.jsx"

const Doctor = () => {

   const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctor`)
  return (
  <>
  {loading && <Loader/>}
  {error && <Error/>}

 {!loading && !error && <div className='grid grid-col-1 sm:grid-cols-2 
      gap-5 lg:gap-[30px] mt-[30px] lg-mt-[55px]'>
    {doctors.map(doctor =>(
        <DoctorCard key={doctor._id} doctor={doctor} /> ))}
    </div>}
    </>
  )
}

export default Doctor
