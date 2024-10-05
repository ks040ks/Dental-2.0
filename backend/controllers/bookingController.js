import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import Booking from "../models/BokkingSchema.js"
import Razorpay from "razorpay";

export const getCheckoutSession = async (res,req) => {
    try {

        //get currenly booked doctor
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        /// for Payment Method 
        const razorpay = new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        }) ;

        //create checkout session for the doctor 
        const session = await razorpay.checkout.sessions.create({
            payment_method_tyes: [ "card" ],
            mode:'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`, //CLIENT SITE URL
            cancel_url:`${req.protocol}://${req.get('host')}/doctor/${doctor.id}`,
            customer_email:user.email,                             
            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'INR',
                        unit_amaount:doctor.feePrice * 100,
                        product_data:{
                            name:doctor.name,
                            description:doctor.bio,
                            images:[doctor.photo]
                        }
                    },
                    quantity:1
                }
            ]
        })


        /// create new booking
        const booking = new Booking({
            doctor:doctor._id,
            user:user._id,
            feePrice:doctor.feePrice,
            session:session.id
        })

        await booking.save()

        res.status(200).json({success:true, message:"Successfully Paid", session})
    } catch (error) {
        res.status(500).json({success:false, message:"Error creating checkout session"})
    }
}