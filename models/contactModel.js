import mongoose from "mongoose";
import validator from "validator"


const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    companyEmail: {
        type: String,
        // unique: true,
        validator: [validator.isEmail, "Please enter a valid email"],
    },
    contactNumber: {
        type: Number,
    },
    company: {
        type: String,
    },
    message: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model("contact", contactSchema)