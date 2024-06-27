import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import Shape5 from "../../assets/shape5.png";
import { FaUsersGear } from "react-icons/fa6";
import OurMission from "../../assets/our-mission.jpg";
import { useNavigate } from "react-router-dom";
import { Fade,  Flip, Slide } from "react-awesome-reveal";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>     
      <div className="welcome-section mt-[30px]">
        <div className="container-section">
          <div className="grid grid-cols-12  gap-[5%]">
            <div className="lg:col-span-6 sm:col-span-12">
              <div className="element-container">
              <Fade direction="top" duration={1000} triggerOnce>
                <h6 className="text mb-2 sm:text-center lg:text-left">WELCOME TO MAXIFY</h6>
                <div className="welcome sm:relative sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:left-0 lg:translate-x-0"></div>
                <h2 className="heading-h3 text sm:text-center lg:text-left">
                  Simplifying, Strengthening Business Worldwide
                </h2>
                </Fade>
                <Fade duration={1000} triggerOnce>
                <p className="sm:hidden md:block text-[#595959] text-[1rem]   mt-6 text-justify">
                {/* <p className="text-[#595959] sm:text-[1rem] lg:text-[1rem] xl:text-[1.5rem]  mt-6 "> */}
                  Maxify is the right platform for all your development and
                  marketing needs. From Strategies to providing end-to-end
                  solutions we have it all covered. We provide our expertise in
                  eCommerce, digital marketing, web and app development
                  services. We help our customers create websites and
                  applications that are feature-rich and fast-performing with
                  human centered designs and experiences. We approach unique and
                  customized strategies that attract customers and helps grow
                  your business. Keeping customer as the foremost priority, we
                  empower your business with the best crafted solutions to get
                  the desired results and excel in the market. Our team of
                  experienced professionals is dedicated to delivering
                  high-quality services that drive success. By leveraging the
                  latest technologies and industry trends, we ensure your
                  business stays ahead of the competition. Partner with Maxify
                  to transform your vision into reality and achieve sustainable
                  growth. Let us help you maximize your potential and reach new
                  heights.
                </p>
                <p className="sm:block md:hidden text-[#595959] text-[1rem] leading-[1.44rem]  mt-2 text-justify">
                {/* <p className="text-[#595959] sm:text-[1rem] lg:text-[1rem] xl:text-[1.5rem]  mt-6 "> */}
                  Maxify is the right platform for all your development and
                  marketing needs. We provide our expertise in
                  eCommerce, digital marketing, web and app development
                  services. We help our customers create websites and
                  applications that are feature-rich. We approach unique and
                  customized strategies that attract customers and helps grow
                  your business. Keeping customer as the foremost priority, we
                  empower your business with the best crafted solutions to get
                  the desired results and excel in the market. Our team of
                  experienced professionals is dedicated to delivering
                  high-quality services that drive success. By leveraging the
                  latest technologies and industry trends. Partner with Maxify
                  to transform your vision into reality and achieve sustainable
                  growth. Let us help you maximize your potential and reach new
                  heights.
                </p>
                </Fade>
                <p className="para para-red mt-4"></p>
                <button
                  class="custom-btn btn-16 mt-8"
                  onClick={() => navigate("/services")}
                ><Fade duration={1000} triggerOnce>
                  <span>Our Services</span>{" "}</Fade>
                </button>
                
              </div>
            </div>
            {/* <!-- ... --> */}
            <div className="lg:col-span-6 sm:col-span-12 sm:mt-0 lg:mt-10">
            {/* <Slide direction="right" duration={1500} delay={500} triggerOnce> */}
              <div className="element-container lg:w-[80%] lg:h-[70%] lg:overflow-hidden lg:mt-[50px] sm:mt-10 2xl:mt-10 lg:ml-20">
                <div className="img-box sm:mb-20 lg:mb-0">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776564/MaxifyAssits/1716623974614_owuxdh_2_0_ptyhfi_-_Copy_2_habccb.webp" alt="" />
                </div>
              </div>
              {/* </Slide> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
