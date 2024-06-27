import React, { useEffect, useState } from "react";
import "./service.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import ContactForm from "../ContactForm";
import { Fade } from "react-awesome-reveal";
// import img2 from '../../assets/1715154300452_bjeoh5_2_0.jpg'

const ServicesDetails = ({
  title,
  name,
  description,
  description2,
  img,
  technologyTitle,
  technologydescription,
  technologyData,
  img2,
  title2,
  text,
  descriptionMobile,
  midsection,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <MetaData titles={`Maxify Industries ${name}`} />
      <div className="relative">
        <div className="element-banner lg:pt-[17%] lg:pb-[15%] md:pt-[25%] md:pb-[10%] sm:pt-[40%] sm:pb-[28%] ">
          <img className="banner" src={img} alt="jpg" />
          <div className="container-section">
            <div className="element-banner-content sm:w-full md:w-[70%]">
            <h1 className="heading-  sm:text-[20px] font-[600] md:text-[35px] sm:leading-[32px] lg:leading-[50px] lg:text-[40px] text-white">
                {title2}{" "}
              </h1>
              <p className="para sm:hidden md:block">{text}</p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto lg:mt-14 sm:mt-10">
          <div className="grid grid-cols-12 sm:gap-3 lg:gap-[5%]">
            <div className="lg:col-span-7 xl:col-span-6 sm:col-span-12">
              {/* <div className="border-line"></div> */}
              <div className="element-container"><Fade direction="down">
                <h3 className="heading- poppins-medium sm:text-[18px] sm:leading-[27px] lg:text-2xl text-[#1a1a1a] sm:text-center lg:text-start">
                  {title}
                </h3></Fade>
              
                <Fade ><p className="para1 sm:hidden md:block sm:text-base lg:text-base mt-6 text-justify">
                  {description}
                </p></Fade>
                <Fade ><p className="para1 sm:block md:hidden sm:text-base lg:text-base mt-6 text-justify">
                  {descriptionMobile}
                </p></Fade>

                <button class="custom-btn btn-16 mt-8" onClick={()=>setShowForm(!showForm)}>
                  <span>Contact us</span>{" "}
                </button>
              </div>
            </div>
            {/* <!-- ... --> */}

            <div className="lg:col-span-5 xl:col-span-6 sm:col-span-12 lg:mt-5 sm:mt-0">
              <div className="element-container sm:w-full sm:h-full lg:w-[70%] xl:h-[70%] lg:overflow-hidden lg:ml-20 lg:mt-10">
                <div className="img">
                  <img className="w-full" src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* service related technology  */}
        <div className="blue-section mt-2">
          <div className="container-section ">
            <div className="grid grid-cols-12 gap-4">
              <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                <div className="border-line"></div>
                <Fade direction="down"><h3 className="heading-h3">{technologyTitle}</h3></Fade>
                <Fade direction="up"><p className="para mt-3">{technologydescription}</p></Fade>
              </div>
              <div className="lg:col-span-8 md:col-span-6 sm:col-span-12">
                <div className="grid grid-cols-12 sm:gap-0 md:gap-4">
                  {technologyData.map((data, i) => (
                    <div
                      className="lg:col-span-6 md:col-span-12 sm:col-span-12"
                      key={i}
                    >
                     <Fade duration={1000}><div className="service-related-technology">
                        <img src={data.technologyImg} alt="" />
                        <h5 className="heading-h5">{data.technologyName}</h5>
                        <p>{data.technologyAbout}</p>
                        <div className="arrow-icons">
                          <IoIosArrowRoundForward />
                        </div>
                      </div></Fade> 
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showForm ? (
          <div className="absolute top-[3%] lg:left-[15%] sm:left-[5%] z-[100] lg:w-[70%] sm:w-[90%]">
            <ContactForm showForm={showForm} setShowForm={setShowForm} />
          </div>
        ) : (
          ""
        )}

        <OurSuccessStories />
      </div>
    </>
  );
};

export default ServicesDetails;
