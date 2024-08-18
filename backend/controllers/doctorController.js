import Doctor from '../models/DoctorSchema.js';
import BookingSchema from "../models/BokkingSchema.js"

export const updateDoctor = async (req, res) => {

    const id = req.params.id

    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id, 
            {$set:req.body}, 
            {new:true}
        );

        if (!updateDoctor) {
            return res.status(404).json({
                success: false, 
                message: 'Doctor not found'
            });
        }

        res
        .status(200)
        .json({
            sucess: true, 
            message:"Successfully updated Doctor", 
            data:updateDoctor
        })

    } catch (error) {
        res
        .status(404)
        .json({
            sucess: false, 
            message:'failed to update Doctor'
        })
    }

}

export const deleteDoctor = async (req, res) => {

    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(
            id, 
        );

        res
        .status(200)
        .json({
            sucess: true, 
            message:"sucessfully deleted Doctor"
        })

    } catch (error) {
        res
        .status(404)
        .json({
            sucess: false, 
            message:'failed to delete Doctor'
        })
    }

}

export const getSingleDoctor = async (req, res) => {

    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id)
        .populate('reviews')
        .select("-password");

        res
        .status(200)
        .json({
            sucess: true, 
            message:"Successfull founded Doctor", 
            data:doctor,
        })

    } catch (error) {
        res
        .status(500)
        .json({
            sucess: false, 
            message:'Doctor not Found'
        })
    }

}

export const getAllDoctor = async (req, res) => {

    const id = req.params.id

    try {

        const {query} = req.query;
        let doctors;

        if(query){
            doctors = await Doctor.find({
                isApproved:'approved' ,
                $or:[{name:{$regex:query, $option:"i"}},
                    {specialization:{$regex:query, $option:"i"}}
                ],
            }).select('-password')
        }
        else{
            doctors = await Doctor.find({isApproved:"approved"})
            .select("-password")
            }

        res
        .status(200)
        .json({
            sucess: true, 
            message:"Doctors found", 
            data:doctors,
        })

    } catch (error) {
        res
        .status(500)
        .json({
            sucess: false, 
            message:'Doctors not Found'
        })
    }

}

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;
    

    try {
        const doctor = await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404)
            .json({
                sucess:false,
                message:"doctor not found"})
        }

        const {password, ...rest} = doctor._doc
        const appointment = await BookingSchema.find({doctor:doctorId})

        res.status(200)
        .json({
            sucess:true, 
            message:"profile info is getting",
            data :{...rest,appointment}})
    } catch (error) {
        res.status(501)
        .json({
            sucess:false, 
            message:"Something went wrong, cannot get profile"})
    }
 }

