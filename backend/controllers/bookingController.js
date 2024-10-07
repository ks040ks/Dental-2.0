import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js"; // Fixed typo in BookingSchema import
import Razorpay from "razorpay";

export const getCheckoutSession = async (req, res) => {
    try {
        // Get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Initialize Razorpay
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        // Create checkout session for the doctor
        const session = await razorpay.orders.create({
            amount: doctor.feePrice * 100,
            currency: 'INR',
            receipt: `receipt_order_${new Date().getTime()}`,
            payment_capture: 1,
        });

        // Create new booking
        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            feePrice: doctor.feePrice,
            session: session.id,
        });

        await booking.save();

        res.status(200).json({
            success: true,
            message: "Successfully created checkout session",
            session,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ success: false, message: "Error creating checkout session", error: error.message });
    }
};
