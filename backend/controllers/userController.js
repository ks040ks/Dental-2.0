import User from '../models/UserSchema.js';
import Booking from "../models/BokkingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req, res) => {

    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(
            id, 
            {$set:req.body}, 
            {new:true}
        );

        res
        .status(200)
        .json({
            sucess: true, 
            message:"Successfully updated user", 
            data:updateUser
        })

    } catch (error) {
        res
        .status(500)
        .json({
            success: false, 
            message:'failed to update user'
        })
    }

}

export const deleteUser = async (req, res) => {

    const id = req.params.id

    try {
        await User.findByIdAndDelete(
            id, 
        );

        res
        .status(200)
        .json({
            sucess: true, 
            message:"sucessfully deleted user"
        })

    } catch (error) {
        res
        .status(404)
        .json({
            sucess: false, 
            message:'failed to delete user'
        })
    }

}

export const getSingleUser = async (req, res) => {

    const id = req.params.id

    try {
        const user = await User.findById(
            id, 
            ).select("-password");

        res
        .status(200)
        .json({
            sucess: true, 
            message:"Successfully founded user", 
            data:user,
        })

    } catch (error) {
        res
        .status(500)
        .json({
            sucess: false, 
            message:'User not Found'
        })
    }

}

export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({}).select("-password");

        res
        .status(200)
        .json({
            sucess: true, 
            message:"Users found", 
            data:users,
        })

    } catch (error) {
        res
        .status(500)
        .json({
            sucess: false, 
            message:'Users not Found'
        })
    }

}

export const getUserProfile = async(req,res) =>{
    const userId = req.userId

    try {
        const user = await User.findById(userId)

        if(!user){
            return res.status(404)
            .json({
                sucess:false, 
                message:"User not found"
            })
        }

        const {password, ...rest} = user._doc

        res.status(200).json({
            sucess:true, 
            message:"profile info is getting",
            data :{...rest}})
    } catch (error) {
        res.status(500).json({sucess:false, message:"Something went wrong, cannot get profile"})
    }
}    ;

export const getMyAppointments = async (req, res) => {
    try {
        
        //step:1 retrieve all appointments of the user.
        const bookings = await  Booking.find({user:req.userId})

        //step2 extract doctor id from appointement
        const doctorIds = bookings.map(el => el.doctor.id)

        //step: retrieve doctor info based on 
        const doctor = await Doctor.find({_id:{$in:doctorIds}}.select("-password"))

        res.status(200).json({sucess:true, message:"appointments found", data:doctor})

    } catch (error) {
        res.status(500).json({sucess:false, message:"Something went wrong, cannot get appointments"})
    }
}