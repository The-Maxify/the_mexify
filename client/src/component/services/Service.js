import React, { useEffect } from "react";
import "./service.css";

import { MdOutlineConstruction } from "react-icons/md";
import { ServiceData } from "./ServiceData";
import { Link, useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import { Fade } from "react-awesome-reveal";
const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate = useNavigate();

  return (
    <>
      <MetaData titles={`Maxify Industries Services`} />
      {/* serive banner */}

      <div className="element-banner lg:pt-[15%] lg:pb-[10%] sm:pt-[20%] sm:pb-[15%] service-banner">
      {/* <div className="element-banner pt-[15%] pb-[15%]  service-banner"> */}
        {/* <div className="element-banner sm:pt-[30%] sm:pb-[5%] lg:py-[200px] xl:py-[222px] service-banner"> */}
        <div className="container-section">
          <div className="element-banner-content">
           <h1 className="heading- sm:text-[24px] font-[700] sm:leading-[32px] lg:leading-[64px] lg:text-[56px] text-white">
              Maxify Services
            </h1>
            <p className="para lg:w-[50%] md:w-[60%] sm:w-[90%]">
              Maxifying Your Business Requirements with our tailored solutions
              to the table to beat the odds
            </p>
          </div>
        </div>
      </div>
      {/* service container */}
      <div className="container-section mat-50 mab-50">
        <div className="grid grid-cols-12  gap-6">
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
           <Fade duration={1000}> <div className="grid grid-cols-12 single-service-box">
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content lg:p-10 sm:p-0">
                <Link to="/web-development">
                <div className="border-line"></div>
                <p className="para uppercase">
                  Tailored Mobile App Development Services
                </p>
                <h5 className="sevices-text ">
                  Top-Notch Mobile App Development Services that suit your
                  business needs the most. Commitment, creativity and
                  consistency are the strategies we adhere by to match your
                  expectations and demands.Further leading to an increase in targeted potential users by leveraging them with fine dashboards and easy to navigate buttons. We bring the best brand exposure to users by delivering delightful experiences, building trust and loyalty by delivering high-end performance.
                </h5>
                </Link>
              </div>
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776691/MaxifyAssits/mobile_app_yo4pfh_o6inf7.webp" alt="Application Image" />
              </div>
            </div></Fade>
          </div>
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
          <Fade duration={1000}><div className="lg:grid lg:grid-cols-12 sm:flex sm:flex-col-reverse single-service-box">
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776559/MaxifyAssits/1714554235083_29zv92_2_0_xth8qs_su3wls.webp" alt="" />
              </div>
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content lg:p-10 sm:p-0">
                <Link to="/application-development">
                <div className="border-line"></div>
                <p className="para uppercase ">
                  Customized Web Development Services
                </p>
                <h5 className="sevices-text ">
                  {" "}
                  Our Web Development Services offers comprehensive solution
                  that brings your vision to life. Having expertise in website
                  development, we believe in delivering solutions that takes
                  your business to new heights. With tremendous change in the business industry, we stand out in the high-paced environment and by giving flexibility and pushing boundaries to give users a seamless experience and pushing your brand value to new heights.
                </h5>
                </Link>
              </div>
            </div></Fade>
          </div>
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
          <Fade duration={1000}><div className="grid grid-cols-12 single-service-box">
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content lg:p-10 sm:p-0">
                <div className="border-line"></div>
                <Link to="/digital-marketing">
                
                <p className="para uppercase">Best Digital Marketing Agency</p>
                <h5 className="sevices-text">
                  Being the best digital marketing agency, we provide custom
                  SEO, SMO, PPC, and other marketing services that helps you in
                  growing your business. To attract new users to the platform and increase their retention rate we develop marketing strategies according to the platform and the type of industry we are serving. We serve custom digital marketing services by understanding your market and goals and execute strategies.
                </h5>
                </Link>
              </div>
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776561/MaxifyAssits/1714567529414_2n6b6f_2_0_uuislw_s9akij.webp" alt="" />
              </div>
            </div></Fade>
        </div>
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default Service;
