import contactModel from "../models/contactModel.js";
import sendEmail from "../utils/sendEmail.js";

export const contactForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      companyEmail,
      contactNumber,
      company,
      message,
    } = req.body;

    const contact = await contactModel.create(req.body);
    res.status(200).json({
      success: true,
      message: "form submit successfully",
      contact,
    });
    sendEmail({
      firstName: contact.firstName,
      lastName: contact.lastName,
      companyEmail: contact.companyEmail,
      contactNumber: contact.contactNumber,
      company: contact.company,
      message: contact.message,
    });
    // console.log("object", contact)
  } catch (error) {
    // console.log(error)
    res.status(500).send({
      success: false,
      message: "Error in contact form",
      error,
    });
  }
};
