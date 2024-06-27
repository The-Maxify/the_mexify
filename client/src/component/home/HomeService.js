import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const HomeService = () => {
  return (
    <>
      <div className="black-section mt-10 bg-black-100">
        <div className="container-section sm:py-0 md:py-10">
          <h3 className="heading-h3 text-center text-white">Our services</h3>
          <div className="border-line text-center m-auto my-2"></div>
          <p className="para text-center" style={{ color: "white" }}>
            Entrust Us with Your Business Needs, We Have Got It All Covered
            Here.
          </p>

          <div className="grid grid-cols-12 mat-50 gap-6">
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
              <div className="home-services-box">
                  <div className="content">
                    <div>
                      <h5 className="text-[1.3rem] font-[700] ">
                        Website <br /> Design &
                      </h5>
                      <h5 className="text-[1.3rem] font-[700] ">
                        {" "}
                        Development<span></span>
                      </h5>
                    </div>
                    <div className="img">
                      <img
                        src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776566/MaxifyAssits/api_c4usbl_qsfxbr.webp"
                        alt=""
                      />
                    </div>
                  </div>
                <Link
                  to="/web-development"
                  className="home-service-back-content"
                >
                  <figure className="back-icons">
                    <img
                      src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776566/MaxifyAssits/api_c4usbl_qsfxbr.webp"
                      alt=""
                    />
                  </figure>
                  <h5 className="text-[1.3rem] font-[700] ">
                    Website Design & Development
                  </h5>
                  <div className="border-line"></div>
                  <ul class="list-unstyled">
                    <li>
                      <Link>
                        Framework Design and Strategy
                        <div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        UI/UX Design<div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        Website Designing and development
                        <div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        e-commerce web development<div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        CMS web development<div class="arrow"> </div>
                      </Link>
                    </li>
                  </ul>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
              <div className="home-services-box">
                  <div className="content">
                    <div>
                      <h5 className="text-[1.3rem] font-[700] ">
                        Application <br /> Development
                      </h5>
                      <h5 className="text-[1.3rem] font-[700] ">
                        & Management<span></span>
                      </h5>
                    </div>
                    <div className="img">
                      <img
                        src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776566/MaxifyAssits/app-development_iqsdi6_fsagqo.webp"
                        alt=""
                      />
                    </div>
                  </div>
                <Link
                  to="/application-development"
                  className="home-service-back-content"
                >
                  <figure className="back-icons">
                    <img
                      src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776566/MaxifyAssits/app-development_iqsdi6_fsagqo.webp"
                      alt=""
                    />
                  </figure>
                  <h5 className="text-[1.3rem] font-[700] ">
                    Application Development & Management
                  </h5>
                  <div className="border-line"></div>
                  <ul class="list-unstyled">
                    <li>
                      <Link>
                        Android App Development
                        <div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        iOS App Development<div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        React Native App Development<div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        Software Development<div class="arrow"> </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        Application maintenance and support
                        <div class="arrow"> </div>
                      </Link>
                    </li>
                  </ul>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                <div className="home-services-box">
                  <div className="content">
                    <div>
                      <h5 className="text-[1.3rem] font-[700]">
                        Digital <br /> Marketing &
                      </h5>
                      <h5 className="text-[1.3rem] font-[700] ">
                        Advertising<span></span>
                      </h5>
                    </div>
                    <div className="img">
                      <img
                        src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776623/MaxifyAssits/digital-campaign_wudbkk_pepujt.webp"
                        alt=""
                      />
                    </div>
                  </div>
                  <Link
                    to="/digital-marketing"
                    className="home-service-back-content"
                  >
                    <figure className="back-icons">
                      <img
                        src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776623/MaxifyAssits/digital-campaign_wudbkk_pepujt.webp"
                        alt=""
                      />
                    </figure>
                    <h5 className="text-[1.3rem] font-[700] ">
                      Digital Marketing & Advertising
                    </h5>
                    <div className="border-line"></div>
                    <ul class="list-unstyled">
                      <li>
                        <Link>
                          Search Engine Optimization (SEO)
                          <div class="arrow"> </div>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          Social Media Optimization (SMO)
                          <div class="arrow"> </div>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          Content Writing and Marketing
                          <div class="arrow"> </div>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          Email Marketing<div class="arrow"> </div>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          Digital analytics and advertising{" "}
                          <div class="arrow"> </div>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          Pay Per Click<div class="arrow"> </div>
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="persistence  container-fluid mt-2">
        <h2 className="text-center pt-4">Why Maxify?</h2>
        <div className="sub-main-boxes mt-3">
          <div className="container sub-box">
            <p>
              33+ years of leadership in software engineering and digital
              transformation.
            </p>
            <div className="value-boxes">
              <h2>$1,186.0M</h2>
              <p>FY24 Revenue</p>
            </div>
          </div>
          <div className="container sub-box">
            <p>
              Highest customer experience scores of any company in IT industry,
              rated by ISG.
            </p>
            <div className="value-boxes">
              <h2 className="">382+</h2>
              <p>Clients annually</p>
            </div>
          </div>
          <div className="container sub-box">
            <p>
              Boutique mindset focused on enterprise clients moving digital
              presence to cloud.
            </p>
            <div className="value-boxes">
              <h2>23,800+</h2>
              <p>Industry & tech experts</p>
            </div>
          </div>
          <div className="container sub-box">
            <p>
              Diverse, open and innovative business partner ecosystem for
              maximum adaptability.
            </p>
            <div className="value-boxes">
              <h2>21</h2>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomeService;
