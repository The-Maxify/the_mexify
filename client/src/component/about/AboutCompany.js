import React, { useEffect, useState } from "react";
import "./about.css";
import MetaData from "../../layout/MetaData";
import ContactForm from "../ContactForm";
import { Fade } from "react-awesome-reveal";
const AboutCompany = () => {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <MetaData titles={`Maxify Abouts Us`} />
      <div>
      {/* banner */}
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] sm:pt-[36%] sm:pb-[25%] about-company-banner">
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="text-heading- sm:text-[24px] font-[700] sm:leading-[32px] lg:leading-[50px] lg:text-[35px]">
              Driving Growth with Cutting-Edge Solutions
            </h1>
            <p className="para sm:hidden md:block">
              Leading business to new heights with innovation
            </p>
          </div>
        </div>
      </div>

      <div className="container-section-2 mat-50">
        <div className="grid grid-cols-12  gap-4">
          <div className="lg:col-span-7 md:col-span-6 sm:col-span-12">
            <div className="element-container">
              <div className="border-line"></div>
              <Fade direction="down"><h3 className="heading-h3 ">
                Rejuvenating Innovation within The Digital Landscape
              </h3></Fade>
              <Fade><p className="para mt-6 sm:hidden md:block">
                We are more than just being a agency, we are the ones who are
                along with you all way to help you establish a new milestone and
                get a clear understanding of your goals and how to reach them.
                With relentless passion running through, we are committed to
                transform business thrive and succeed.
                <h3>Our Mission:</h3>
                Our mission is to provoke simple yet advanced solutions that can
                align well with the needs of clients and help them achieve their
                goal. To turn your vision into reality, we are standing along
                and wish to create a impactful solutions for your needs that can
                help you grow, develop and pursue with excellence.
                <h3>Our Vision:</h3>
                Our vision is to be a catalyst of growth and innovation in your
                journey of success. We envision a future where people from all
                industries can harness and leverage the power of technology and
                innovation to achieve their potential and benchmark new ways to
                success. With combination of creativity and innovation, we aim
                to bring excellence and inculcate new spheres of inspiration to
                the digital world.
              </p></Fade>
              <Fade><p className="para mt-6 sm:block md:hidden">
                We are more than just being a agency, we are the ones who are
                along with you all way to help you establish a new milestone and
                get a clear understanding of your goals and how to reach them.
                With relentless passion running through, we are committed to
                transform business thrive and succeed.
                <h3>Our Mission:</h3>
                Our mission is to provoke simple yet advanced solutions that can
                align well with the needs of clients and help them achieve their
                goal.
                <h3>Our Vision:</h3>
                Our vision is to be a catalyst of growth and innovation in your
                journey of success. We envision a future where people from all
                industries can harness and leverage the power of technology and
                innovation to achieve their potential and benchmark new ways to
                success.
              </p></Fade>

              <button class="custom-btn btn-16 mt-8" onClick={()=>setShowForm(!showForm)}>
                <span>Contact Us</span>{" "}
              </button>
            </div>
          </div>
          {/* <!-- ... --> */}
          <div className="lg:col-span-5 md:col-span-6 sm:col-span-12">
            <div className="element-container">
              <div className="img-box about-company-im sm:w-full sm:h-full 2xl:w-[80%] 2xl:ml-20">
                <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776565/MaxifyAssits/about_us_page_1_cepnfn_r0n2aq.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our ethos are our foundation */}
      <div className="container-section mat-100">
        <div className="grid grid-cols-12  gap-4">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="element-container">
              <div className="img-box ">
                <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776738/MaxifyAssits/success_story_image_gnsyai_abosxv.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6 sm:col-span-12 ms-5 sm:ms-0 ">
            <div className="border-line"></div>
            <h3 className="heading-h3 ">Our ethos are our foundation</h3>
            <ul className="our-ethos-ul w-full">
              <li>
                <div className="number">1</div>
                <div className="content">
                  <p>More Than Just Lines of Codes</p>
                  <h4 className="heading-h4 uppercase">We Deliver Value</h4>
                </div>
              </li>
              <li>
                <div className="number">2</div>
                <div className="content">
                  <p>More than proactive collaboration</p>
                  <h4 className="heading-h4 uppercase">We Offer Insights</h4>
                </div>
              </li>
              <li>
                <div className="number">3</div>
                <div className="content">
                  <p>Desire a focus beyond deadlines</p>
                  <h4 className="heading-h4 uppercase">
                    We Strive to ignite growth
                  </h4>
                </div>
              </li>
              <li>
                <div className="number">4</div>
                <div className="content">
                  <p>As you celebrate your achievements</p>
                  <h4 className="heading-h4 uppercase">
                    We will remain by your side
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {showForm ? (
          <div className="fixed top-[13%] lg:left-[15%] sm:left-[5%] z-[100] lg:w-[70%] sm:w-[90%]">
            <ContactForm showForm={showForm} setShowForm={setShowForm} />
          </div>
        ) : (
          ""
        )}

      {/* Our essence
       */}

      <div className="black-section  mat-100">
        <div className="container-section">
          <div className="border-line text-center m-auto"></div>
          <h3 className="heading-h3 text-center text-white">
            Contributing to the Industry
          </h3>
          {/* <p className="para text-center white-color">Professional, Passionate and Proactive</p> */}
          <div className="grid grid-cols-12  gap-4 mt-5">
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
              <div className="our-essence-box">
                <h5 className="heading-h5">Tailored Solutions To Your Needs</h5>
                <p className=" white-color">
                  To understand your way of business better, we understand to
                  tailor solutions that align well with your business and how
                  they can help you in leveraging it. How effective the
                  solutions can be and what steps should be taken to make it
                  more convenient and drive results that are well ahead of time.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
              <div className="our-essence-box">
                <h5 className="heading-h5">Cutting-Edge Solutions</h5>
                <p className=" white-color">
                  In today’s time it is very important for businesses to stay
                  ahead of their competition. To make sure it stays ahead we use
                  solutions and methods that are innovative and moulded in a way
                  that it satisfies your business needs and immerses customer in
                  a world where they can experience satisfaction and contentment
                  to their queries.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
              <div className="our-essence-box">
                <h5 className="heading-h5">Customer Satisfaction</h5>
                <p className=" white-color">
                  Everything we do we analyse and understand if it can satisfy
                  the user intent. Because customer is the forefront in helping
                  and building a strong brand. We keep in mind to develop a
                  product which is trustable, engaging, and full of vision that
                  attracts user to spend more time on platform and attracts him
                  to use the platform again and again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutCompany;
