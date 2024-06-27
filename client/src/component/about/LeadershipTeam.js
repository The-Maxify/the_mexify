import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MetaData from "../../layout/MetaData";
import { Fade } from "react-awesome-reveal";
const LeadershipTeam = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <MetaData titles={`Maxify Industries Leadership Team`} />
      {/* banner */}
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] sm:pt-[28%] sm:pb-[18%]  about-company-banner">
        <img className="banner" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776689/MaxifyAssits/leadership_banner_fgnkqi_vfl0fm.webp" alt="jpg" />
        <div className="container-section ">
          <div className="element-banner-content lg:w-[60%]">
            <h1 className="text-heading- sm:text-[24px] font-[600] sm:w-[70%] md:w-[90%] sm:leading-[32px] lg:leading-[50px] lg:text-[35px]">
              Powering Great Ideas, Driving Excellence Through Our
              Solutions
            </h1>
          </div>
        </div>
      </div>

      <div className="container-section-2 mat-50">
        <div className="grid grid-cols-12  gap-5">
          <div className="lg:col-span-8 xl:col-span-6 sm:col-span-12">
            <div className="element-container">
              <div className="border-line"></div>
              <Fade direction="down"><h3 className="heading-h3 ">Meet our team</h3></Fade>
              <Fade><p className="par text-[1.1rem] text-justify mt-6">
                Our Maxify leaders embody a rich tapestry of experience,
                expertise and vision that propels us to move forward and bring
                unwavering dedication and zeal to pursue our dreams bringing
                excellence to the work we deliver. Each member of the team
                brings set of unique skills creating room for more ideas and
                create a dynamic environment that fosters innovation and growth.
                We stand together to push walls of our mind and go beyond to
                explore new things in this digital world, delivering solutions
                that empowers each one of us and thrive to evolve in this
                ever-changing landscape. They are a source of inspiration,
                dedication, creation bringing all of us together and work in one
                way which brings us closer to each other and to our individual
                goals.
              </p></Fade>
            </div>
          </div>
          {/* <!-- ... --> */}
          <div className="lg:col-span-5 xl:col-span-6 sm:col-span-12 lg:mt-20 sm:mt-0">
            <div className="element-container sm:w-full sm:h-full lg:w-[70%] xl:h-[70%] lg:overflow-hidden lg:ml-20">
              <div className="img-box about-leadership-main">
                <img className="w-full" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776793/MaxifyAssits/welcome-img_1_w9k7l7_fhdxse.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-section-2 mat-0 sm:mt-20">
        <Fade direction="down"><h4 className="text-heading-h4 left-line sm:mt-10 lg:mt-0">Management Team</h4></Fade>
        <div className="flex flex-wrap gap-4 justify-center mat-50">
          <div className="w-[400px]">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776731/MaxifyAssits/profile_cj6crw_dxzqpl.webp" alt="" className="w-full lg:h-[25rem] sm:h-[21rem]" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776675/MaxifyAssits/india-logo_uaybm2_unwqvg.webp" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[400px]">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776731/MaxifyAssits/profile_cj6crw_dxzqpl.webp" alt="" className="w-full lg:h-[25rem] sm:h-[21rem]" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776675/MaxifyAssits/india-logo_uaybm2_unwqvg.webp" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
         
        
        
        </div>
      </div>
      {/* <div className="container-section-2 mat-100">
        <Fade direction="down"><h4 className="text-heading-h4 left-line">Developer Team</h4></Fade>
        <div className="grid grid-cols-12  gap-4 mat-50">
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img h-[]" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img h-[]" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img h-[]" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img h-[]" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div> */}
    </>
  );
};

export default LeadershipTeam;
