import React, { useEffect } from "react";
import "../services/service.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import { Fade } from "react-awesome-reveal";
import { SuccessData } from "./SuccessData";
// import img2 from '../../assets/1715154300452_bjeoh5_2_0.jpg'

const SuccessDetails = ({
  title,
  name,
  description,
  description2,
  weburl,
  img,
  img2,
  img3,
  img22,
  title2,
  title3,
  text,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  challenge,
  challenge1,
  challenge2,
  challenge3,
  challenge4,
  goal,
  highlight1,
  highlight2,
  highlight3,
  IndustriesSubData,
  type,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <MetaData titles={`Maxify ${name}`} />
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] md:pt-[17%] md:pb-[18%] sm:pt-[30%] sm:pb-[18%] ">
        <img className="banner brightness-75" src={img} alt="jpg" />
        <div className="container-sectio sm:w-[90%] sm:mx-auto lg:w-[70%] lg:mx-20">
          <div className="element-banner-content">
            <h1 className="sm:text-[20px] font-[600] sm:w-[90%] md:w-[70%] md:text-[35px] sm:leading-[32px] lg:leading-[50px] lg:text-[35px] text-white">
              {" "}
              {title2}{" "}
            </h1>
            <p className="para sm:hidden md:block">{text}</p>
          </div>
        </div>
      </div>
      <div className="container-section mat-100">
        <div className="grid grid-cols-12  gap-4">
          <div className="lg:col-span-7 md:col-span-12 sm:col-span-12">
            <div className="border-line"></div>
            <h2 className="para heading-h5">{title3}</h2>
            <div className="element-container ">
              {/* <h3 className="heading-h3 text-white">Charles & Keith empowers women around the world to express themselves freely through fashion with Ranosys commerce experts."</h3> */}
              <p className="para mt-6">{description}</p>
              <p className="para mt-4">{description2}</p>
            </div>
          </div>
          {/* <!-- ... --> */}
          <div className="lg:col-span-1 right-full-border sm:flex-none"></div>
          <div className="lg:col-span-4  md:col-span-12 sm:col-span-12">
            <div className="element-container  flex columns-lg h-[100%] justify-center sm:flex-col">
              <a href={weburl} className="para" target="blank">
                <b>Website :</b> {weburl}
              </a>
              <p className="para sm:mt-4">
                <b>Industry :</b> {type}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Goal  */}

      <div className="container-section mt-4">
        <div className="grid grid-cols-12 gap-6 mt-[4rem]">
          <div className="lg:col-span-6  md:col-span-12 sm:col-span-12">
            <div className="element-container ">
              <div className="success-stories-middle-section">
                <div className="img-box-1 sm:mt-0 md:mt-20">
                  <img src={img2} alt="" />
                </div>
                <div className="img-box-2">
                  <img className="" src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-5  md:col-span-12 sm:col-span-12">
            <Fade duration={1000}>
              <div className="element-container ">
                <div className="success-stories-middle-section mt-5">
                  <h6 className="heading-h6">
                    <b>CHALLENGE</b>
                  </h6>
                  <div className="border-line" style={{ height: "3px" }}></div>
                  <p className="para">{challenge}</p>
                  <li className="para">{challenge1}</li>
                  <li className="para">{challenge2}</li>
                  <li className="para">{challenge3}</li>
                  <h6 className="heading-h6 mt-3">
                    <b>THE GOAL</b>
                  </h6>
                  <div
                    className="border-line"
                    style={{ height: "3px", width: "96px" }}
                  ></div>
                  <p className="para">{goal}</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="red-section lg:mt-32  sm:mt-10 xl:mt-[80px]">
        <div className="container-section">
          <div className="border-line sm:block md:block text-center m-auto"></div>
          <h3 className="heading text-[36px] font-semibold text-center">Result</h3>
          <div className="grid grid-cols-12  gap-6 mat-50">
            {IndustriesSubData.map((item, i) => (
              <div
                className="lg:col-span-4 md:col-span-6 sm:col-span-12"
                key={i}
              >
                <div className="our-essence-box industries-details-box">
                  <h5 className="heading-h5">{item.heading}</h5>
                  <p className="white-color">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="relative sm:h-[390px] md:h-[515px] lg:h-[650px]  highlight mt-4">
        
          <img src={img22} alt="" />
        <div className="highlight-data sm:backdrop-blur-0">
          <h2>Highlight</h2>
          <li>{highlight1}</li>
          <li>{highlight2} </li>
          <li>{highlight3}</li>
        </div>
      </div>

      {/* technologies */}
      <div className="technologies mt-1 para py-10">
        <div className="tec-inne w-[100%] mx-auto">
        <div className="border-line sm:hidden md:block text-center m-auto"></div>
          <h2 className="text-center mt-4">Technology Stack</h2>
          {/* <div className='technologies-data'>
                        <p>Frameworks: </p><div className='tec-img'><img src={logo1} alt="" /><img src={logo2} alt="" /></div>
                    </div> */}
          <div className="technologies-data mt-10">
            <p>Languages:</p>
            <div className="tec-im flex md:flex-row sm:flex-row self-start gap-4">
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default SuccessDetails;
