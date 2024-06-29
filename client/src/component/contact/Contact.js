import React, { useEffect, useState } from "react";
import "./contact.css";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    query: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation logic

    const newErrors = {};

    if (formData.fname.trim() === "") {
      newErrors.fname = "First Name is requi#525CEB";
    }
    if (formData.lname.trim() === "") {
      newErrors.lname = "Last Name is requi#525CEB";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is requi#525CEB";
    }
    if (formData.query.trim() === "") {
      newErrors.query = "Query is requi#525CEB";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const data = await axios.post("http://localhost:500/contact", formData);
      console.log("Form submitted:", data);
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      {/* serive banner */}
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] sm:pt-[30%] sm:pb-[18%] service-banner">
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="heading-h1"> Contact Us</h1>
          </div>
        </div>
      </div>
      {/* 
      <div className="gray-section ">
        <div className="container-section">
          <div className="grid grid-cols-12  gap-6 mat-50">
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
              <div className="contact-form">
                <div className="border-line"></div>
                <h3 className="heading-h3">Get in Touch</h3>
                <p className="para">
                  Have any queries? or want to know more? Contact us and we will
                  be happy to help.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
              <form action="" onSubmit={handleSubmit}>
                <div className="contact-form">
                  <div className="input-box two">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.fname}
                      onChange={handleInputChange}
                      name="fname"
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="Last  Name"
                      value={formData.lname}
                      onChange={handleInputChange}
                      name="lname"
                      id=""
                    />
                  </div>
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                  <div className="input-box two">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                      id=""
                    />
                    <input
                      type="number"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      name="phone"
                      id=""
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      name="company"
                      id=""
                    />
                  </div>
                  <div className="input-box">
                    <textarea
                      name="query"
                      placeholder="Please send Your Query"
                      value={formData.query}
                      onChange={handleInputChange}
                      id=""
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
