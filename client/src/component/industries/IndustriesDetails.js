import React, { useEffect } from "react";

import WelcomeImg from "../../assets/welcome-img.jpg";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import { Fade,Bounce } from "react-awesome-reveal";
const IndustriesDetails = ({
  title,
  name,
  description1,
  descriptionMobile,
  description2,
  img,
  img2,
  IndustriesSubData,
  title2,
  text,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate = useNavigate();

  return (
    <>
      <MetaData titles={`Maxify industries ${name}`} />
      <div className="element-banner  lg:pt-[13%] lg:pb-[13%] sm:pt-[30%] sm:pb-[18%] industry-banner">
        <img className="banner" src={img2} alt="jpg" />
        <div className="container-section">
          <div className="element-banner-content w-[60%]">
            <h1 className=" sm:text-[24px] font-[600] md:text-[35px] sm:leading-[32px] lg:leading-[50px] lg:text-[35px] text-white">
              {title2}
            </h1>
            <p className="para sm:hidden md:block">{text}</p>
          </div>
        </div>
      </div>
      <div className="container-section mat-50">
        <div className="grid grid-cols-12 lg:gap-10 sm:gap-0">
          <div className="lg:col-span-7 xl:col-span-6 sm:col-span-12">
            {/* <div className="border-line"></div> */}
            <div className="element-container">
            <Fade direction="down"><h3 className="heading- poppins-medium sm:text-[18px]  sm:leading-[27px] lg:text-2xl text-[#1a1a1a] sm:text-center lg:text-start">{title}</h3></Fade>
              <p className="para1 sm:hidden md:block sm:text-base lg:text-base mt-6 text-justify">{description1}</p>
              <p className="para1 sm:block md:hidden sm:text-base lg:text-base mt-6 text-justify">{descriptionMobile}</p>
              <p className="para1 sm:text-base lg:text-base mt-6 text-justify">{description2}</p>
              <button
                class="custom-btn btn-16 mt-8"
                onClick={() => navigate("/contact-us")}
              >
                <span>CONTACT US</span>{" "}
              </button>
            </div>
          </div>
          {/* <!-- ... --> */}
          <div className="lg:col-span-5 xl:col-span-6 sm:col-span-12 xl:mt-0 sm:mt-5">
            <div className="element-container sm:w-full sm:h-full lg:w-[70%] xl:h-[70%] lg:overflow-hidden lg:ml-20 lg:mt-17">
              <div className="img-box">
                <img className="w-full" src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Custom eCommerce Development Services */}
      
      <div className="red-section lg:mt-32  sm:mt-10 xl:mt-0">
        <div className="container-section">
          <div className="border-line sm:hidden md:block text-center m-auto"></div>
          <h3 className="heading-h3 text-center">
            Our Custom {name}
          </h3>
          <div className="grid grid-cols-12  gap-6 mat-50">
            {IndustriesSubData.map((item, i) => (
              <div
                className="lg:col-span-4 md:col-span-6 sm:col-span-12"
                key={i}
              >
                <Bounce><div className="our-essence-box industries-details-box">
                  <h5 className="heading-h5">{item.heading}</h5>
                  <p className="white-color">{item.content}</p>
                </div></Bounce>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default IndustriesDetails;
