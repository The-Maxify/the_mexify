import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import axios from 'axios'
import ThankYouPage from "./Thankyou";
import { Fade,  Flip, Slide } from "react-awesome-reveal";
// import "../footer.css";

const ContactForm = ({showForm, setShowForm, }) => {

  const initialFormState = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyEmail: '',
    company: '',
    message: '',
  };

 
  const initialErrorState = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyEmail: '',
    company: '',
    message: '',
  };
  



  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [showPopup, setShowPopup] = useState(false)

  console.log("object", showPopup)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const newErrors = {};

    // Basic validation checks
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    // if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
    if (!formData.companyEmail) newErrors.companyEmail = 'Company Email is required';
    // if (!formData.company) newErrors.company = 'Company is required';
    // if (!formData.message) newErrors.message = 'Message is required';

    // Email validation (basic regex for example purposes)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.companyEmail && !emailRegex.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Invalid email format';
    }

    // If there are any errors, update the errors state and return early
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:500/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Form submitted successfully');
        setFormData(initialFormState); // Reset the form fields
      
      // Close the form and open the popup
      // setShowForm(false);
 
      
      
        // Optionally handle successful response here
      } else {
        console.error('Form submission failed');
        // Optionally handle failed response here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setShowPopup(true);
    // setShowForm(false);

    console.log("objectssssssss", showPopup)

  
  };



  return (
    <div className="fixed flex h-[70vh] sm:w-[90%] md:w-[70%] justify-center items-center">
    <div className="relative w-[90%]">
      <div className="footer-contact-section sm:py-10 lg:py-10 lg:px-20 sm:px-5">
        <div className="lg:grid lg:grid-cols-12 gap-[5%] sm:flex sm:flex-col-reverse">
       
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
            <div className="mb-5 flex justify-between">
              <div className="text-center w-full">
                <h3 className="heading-h3 sm:hidden lg:block">Contact US</h3>
                <p className="para">We're all ears and eager to assist.</p>
              </div>
              <div className="text-3xl font-[700] cursor-pointer" onClick={()=>setShowForm(!showForm)}>
                <MdClose />
              </div>
            </div>

            
            <div className="footer-contact-form">
              <div className="flex sm:flex-col lg:flex-row justify-between gap-[5%]">
                <div className="w-full">
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  id=""
                />
                  {errors.firstName && <p className="text-red-500 pb-5">{errors.firstName}</p>}
                </div>
                <div className="w-full">
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  id=""
                />
                  {errors.firstName && <p className="text-red-500 pb-5">{errors.lastName}</p>}
                </div>
              </div>

              <div className="flex sm:flex-col lg:flex-row justify-between gap-[5%]">
                <div className="w-full">
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  id=""
                />
                     {errors.contactNumber && <p className="text-red-500 pb-5">{errors.contactNumber}</p>}
                </div>
                <div className="w-full">
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Company Email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  id=""
                />
                {errors.companyEmail && <p className="text-red-500 pb-5">{errors.companyEmail}</p>}
              
                </div>
               </div>

              <div>
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  id=""
                />
                   {errors.company && <p className="text-red-500 pb-5">{errors.company}</p>}
              </div>

              <textarea
                className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                name="message"
                value={formData.message}
                onChange={handleChange}
                id=""
                placeholder="Message"
                cols="10"
                rows="2"
              ></textarea>
                {/* {errors.message && <p className="text-red-500 pb-5">{errors.message}</p>} */}
              <button onClick={handleClick}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

      {showPopup?( <div className="fixed flex h-[50vh] items-center justify-center z-[9999] bg-black rounded-lg">
      <ThankYouPage showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>):("")}
    </div>
    </div>
  );
};

export default ContactForm;
