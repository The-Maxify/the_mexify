import React, { useEffect, useState } from "react";
import "./career.css";
import MetaData from "../../layout/MetaData";
import { RxTimer } from "react-icons/rx";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiAlarmOn } from "react-icons/ci";
import { PiFediverseLogoLight } from "react-icons/pi";
import { MdBalance } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
const Career = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <MetaData titles={`Maxify Career`} />
      {/* serive banner */}
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] sm:pt-[30%] sm:pb-[18%] service-banner">
        <img className="banner" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776595/MaxifyAssits/career_banner_image_vkx7em_t4it5r.webp" alt="jpg" />
        <div className="container-sectio lg:w-[70%] lg:mx-20 sm:w-[90%] sm:mx-5">
          <div className="element-banner-content ">
           <h1 className="heading- sm:text-[24px] font-[600] sm:leading-[32px] lg:leading-[50px] lg:text-[35px]">
              Shaping New World Through Maxify Lens
            </h1>
            <p className="para sm:hidden md:block text-2xl">Embark on a Journey of Growth and Innovation</p>
          </div>
        </div>
      </div>

      <div className="container-section mat-50">
        <div className="lg:w-[70%] md:w-[80%] sm:w-[100%]">
          <div className="border-line"></div>
          <Fade direction="down"><h3 className="heading-h3">
            Maxify Web Solution - Your next career destination
          </h3></Fade>
          <Fade><p className="para text-justify">
            We believe in creating a workspace where everyone thrives and has
            the right to communicate and share their ideas. We are seeking
            innovative and young minds that can contribute to the leading
            success of out team and more value to the team. We are committed to
            make a place where everyone feels welcomed and consider it their own
            place to relive ideas and help others doing the same and rejuvenate
            together by bringing joy to the work culture. Join a place where
            creativity is respected, and challenges are embraced with passion
            and dedication. Become a part of our journey and we will together
            shape the future by immersing in the new technologies that will
            bring out the best in us and work we are committed to.
          </p></Fade>
        </div>
        <div className="grid grid-cols-12  gap-4 mat-50">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <CiAlarmOn className="icon"/>
              <h5 className="heading-h5">Innovation at its Best</h5>
              <p className="para">
                We are committed to drive excellence, and we believe to be going
                along with time and new technologies that can cater to the
                project well and drive solutions to the problem.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
            <BsGraphUpArrow className="icon"/>
              <h5 className="heading-h5">Growth Opportunities</h5>
              <p className="para">
                Maxify team makes sure our team members grow exponentially from
                personal and professional manner. To deepen your knowledge in
                the subject matter, we strive to provide an area of learning
                where your grow and help others grow.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
            <RxTimer className="icon"/>
              <h5 className="heading-h5">Real-Time Scenario</h5>
              <p className="para">
                The projects we work on are the ones that will add more value to
                your learning and career. It helps you brainstorm new ideas and
                explore new horizons while implementing solutions effectively.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
            <PiFediverseLogoLight className="icon"/>
              <h5 className="heading-h5">Diverse Perspective</h5>
              <p className="para">
                Coming from different backgrounds makes us different, what
                unites us together is the technology. Ideas are welcomed and
                every voice is heard to make our environment sustainable and
                bringing more innovation.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
            <MdBalance className="icon"/>
              <h5 className="heading-h5">Work-Life Balance</h5>
              <p className="para">
                We believe in maintain a healthy and balanced lifestyle where
                you can grow professionally and personally. Where you can
                prioritize yourself and enjoy living being a part of Maxify
                team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-section mat-100">
        <div className="job-section">
          <div className="wrapper">
            <div className="accordion">
              <p className=" " style={{ fontSize: "25px" }}>
                Current Opening
              </p>
              <div className="border-line "></div>
              <div className="mt-5"></div>
              {jobData.map((item, i) => (
                <div className="item " key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h2>{item.title}</h2>
                    <span>{selected === i ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    <ul>
                      <li>
                        <b>Required Qualifications</b> :{" "}
                        <span>{item.qualification}</span>{" "}
                      </li>
                      <li>
                        <b>Experience Required</b> :{" "}
                        <span>{item.experience}</span>{" "}
                      </li>
                      <li>
                        <b>Job type</b> : <span>{item.jobType}</span>{" "}
                      </li>
                      <li>
                        <b>Job Role</b> : <span>{item.jobRole}</span>{" "}
                      </li>
                      <li>
                        <b>Skill needed for the job role</b> :{" "}
                        <span>
                          <div>
                            {item?.skillsData?.map((data, i) => (
                              <span className="skills" key={i}>
                                {data.skill}
                              </span>
                            ))}
                          </div>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

const jobData = [
  {
    title: "Web Developer",
    qualification: "Graduate",
    experience: "2-4 Years",
    jobType: "Full  Time",
    jobRole: "Mern Stack",
    skillsData: [
      {
        skill: "PHP",
      },
      {
        skill: "HTML",
      },
      {
        skill: "CSS",
      },
      {
        skill: "JAVASCRIPT",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    qualification: "Graduate",
    experience: "2-4 Years",
    jobType: "Full  Time",
    jobRole: "Mern Stack",
    skillsData: [
      {
        skill: "PHP",
      },
      {
        skill: "HTML",
      },
      {
        skill: "CSS",
      },
      {
        skill: "JAVASCRIPT",
      },
      {
        skill: "REACT JS",
      },
      {
        skill: "NODE JS",
      },
      {
        skill: "MONGODB",
      },
    ],
  },
];
