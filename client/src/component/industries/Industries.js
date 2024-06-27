import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./industries.css";
import { IndustriesData } from "./IndustriesData";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import { Fade } from "react-awesome-reveal";
const Industries = () => {
  const navigate = useNavigate();
  return (
    <>
      <MetaData titles="Maxify industries" />
      {/* serive banner */}
      <div className="element-banner industry-banner lg:pt-[12%] lg:pb-[10%] sm:pt-[30%] sm:pb-[5%] ">
        {/* <div className="element-banner industry-banner sm:pt-[30%] sm:pb-[5%] lg:py-[200px] xl:py-[222px] service-banner"> */}
        <div className="container-section ">
          <div className="element-banner-content sm:w-full md:w-[70%]">
            <h1 className="heading- sm:text-[24px] font-[700] sm:leading-[32px] lg:leading-[64px] lg:text-[40px] text-white">
              Explore the Dynamic World of Industries with Maxify Web Solutions
            </h1>
            <p className="para sm:hidden md:block">
              Revolutionizing Industries through Innovative Solutions
            </p>
          </div>
        </div>
      </div>

      {/* service container */}
      <div className="container-section mat-50 mab-50">
        <div className="border-line"></div>
        <Fade direction="down"><h3 className="heading- sm:text-[23px] font-[600] sm:leading-[30px] lg:text-3xl text-gray-600">
          Delivering Digital Excellence Across Industries
        </h3></Fade>
        <Fade><p className="para mt-5">
          We employ our expertise, capabilities and insights into curating
          world-class digital solutions for various industries across the globe.
        </p></Fade>
        <div className="grid grid-cols-12  gap-4 mat-50">
          {IndustriesData.map((item, i) => (
            <div
              className="industry-box lg:col-span-6 md:col-span-6 sm:col-span-12"
              key={i}
            >
              <div
                className="single-industries-box"
                onClick={() => navigate(item.url)}
              >
                <div className="img">
                  <img className="" src={item.industriesImg} alt="" />
                </div>
                <div className="content">
                  <h4 className="heading-h4 mt-4">{item.industriesHeading}</h4>
                  <p className="para mt-4">{item.industriesText}</p>
                  <button class="">
                    <IoIosArrowRoundForward />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default Industries;
