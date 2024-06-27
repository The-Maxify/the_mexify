import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const OurSuccessStories = () => {
  return (
    <>
      <div className="gray-section mt-5">
        <div className="container-section">
          <h3 className="success-heading text-center para success-text  text mb-2">
          Industries Solutions and Expertise
          </h3>
          <div className="border-line text-center m-auto #525CEB-line"></div>
          <p className="para disabled text-center">
          Employing Services and Solutions, diversifying the needs of Industries across the globe
          </p>
          <div className="grid grid-cols-12 mat-50">
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              {/* <Fade direction="left"> */}
              <div className="home-success-stories one">
                <Link>
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776646/MaxifyAssits/healthcare_image-removebg-preview_1_ai1l2q_anzw86.webp" alt="" />
                  <div className="content">
                    {/* <p className="para">Health Care</p> */}
                    <p className="para">Prominent Healthcare Services</p>
                  </div>
                </Link>
              </div>
              {/* </Fade> */}
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              {/* <Fade delay={200} direction="down"> */}
              <div className="home-success-stories two">
                <Link>
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776675/MaxifyAssits/industrial_image-removebg-preview_2_fqnihh_lzdjop.webp" alt="" />
                  <div className="content">
                    <p className="para">Empowering Industry Led process</p>
                  </div>
                </Link>
              </div>
              {/* </Fade> */}
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            {/* <Fade delay={400} direction="right"> */}
              <div className="home-success-stories three">
                <Link>
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776689/MaxifyAssits/life_science_image-removebg-preview_2_swusqx_kga33b.webp" alt="" />
                  <div className="content">
                    <p className="para">Redefining educational world</p>
                  </div>
                </Link>
              </div>
              {/* </Fade> */}
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            {/* <Fade delay={600} direction="left"> */}
              <div className="home-success-stories four">
                <Link>
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776595/MaxifyAssits/banking_and_financial_image-removebg-preview_ebymof_v2dfua.webp" alt="" />
                  <div className="content">
                    <p className="para">Streamlining Financial Services</p>
                  </div>
                </Link>
              </div>
              {/* </Fade> */}
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            {/* <Fade delay={800} direction="up"> */}
              <div className="home-success-stories five">
                <Link>
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776739/MaxifyAssits/telecom_and__media-removebg-preview_2_ow2fsq_kulj6m.webp" alt="" />
                  <div className="content">
                    <p className="para">Reimagining Global Media</p>
                  </div>
                </Link>
              </div>
              {/* </Fade> */}
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            {/* <Fade delay={1000} direction="right"> */}
              <div className="home-success-stories six">
                <Link>
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776737/MaxifyAssits/software_and_hi-tech-removebg-preview_2_z7jznc_mlbfeu.webp" alt="" />
                  <div className="content">
                    <p className="para">Accelerated hi-tech softwares</p>
                  </div>
                </Link>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSuccessStories;
