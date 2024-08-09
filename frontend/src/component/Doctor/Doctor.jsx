// import useFetchData from "../../hooks/useFetchData.jsx"
// import { BASE_URL } from "../../config.js"
import DoctorCard from "./DoctorCard.jsx";
// import Loader from "../../component/Loader/Loading.jsx"
// import Error from "../../component/Error/Error.jsx"
import {doctors} from "./../../assets/data/doctor.js"
const Doctor = () => {

  // const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctor`)
  return (
  <>
 <div className='grid grid-col-1 sm:grid-cols-2 
      gap-5 lg:gap-[30px] mt-[30px] lg-mt-[55px]'>
    {doctors.map((doctor) =>
       { return <DoctorCard key={doctor.id} doctor={doctor} /> })}
    </div>
    </>
  )
}

export default Doctor
