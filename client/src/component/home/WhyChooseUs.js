import React, { useEffect, useRef } from "react";
import { FaUserFriends } from "react-icons/fa";
import Img1 from "../../assets/img1.jpg";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import "./animation.css";
import { Fade } from "react-awesome-reveal";
import { TweenMax, Cubic } from "gsap"; // Assuming GSAP is installed and imported properly

const WhyChooseUs = () => {
  const cardsRef = useRef(null);

  // useEffect(() => {
  //   const cards = Array.from(cardsRef.current.querySelectorAll(".slider-item")); // Select slider items
  //   startAnim(cards);
  //   // console.log("object", cards)
  //   function startAnim(array) {
  //     if (array.length >= 4) {
  //       TweenMax.fromTo(
  //         array[0],
  //         0.5,
  //         { x: 0, y: 0, opacity: 0.75 },
  //         {
  //           x: 0,
  //           y: -120,
  //           opacity: 0.75,
  //           zIndex: 0,
  //           delay: 0.03,
  //           ease: Cubic.easeInOut,
  //           onComplete: sortArray(array),
  //         }
  //       );

  //       TweenMax.fromTo(
  //         array[1],
  //         0.5,
  //         { x: 79, y: 125, opacity: 1, zIndex: 1 },
  //         {
  //           x: 30,
  //           y: 0,
  //           opacity: 1,
  //           zIndex: 1,
  //           boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
  //           ease: Cubic.easeInOut,
  //         }
  //       );

  //       TweenMax.to(array[2], 0.5, {
  //         bezier: [
  //           { x: 0, y: 250 },
  //           { x: 65, y: 200 },
  //           { x: 79, y: 125 },
  //         ],
  //         boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
  //         zIndex: 1,
  //         opacity: 0,
  //         ease: Cubic.easeInOut,
  //       });

  //       TweenMax.fromTo(
  //         array[3],
  //         0.5,
  //         { x: 0, y: 400, opacity: 0, zIndex: 0 },
  //         { x: 0, y: 143, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }
  //       );
  //     } else {
  //     }
  //  
  //   function sortArray(array) {
  //     setTimeout(() => {
  //       const firstElem = array.shift();
  //       array.push(firstElem);
  //       startAnim(array);
  //     }, 3000);
  //   }
  // }, []);
  return (
    <>
      <div className="why-choose-use-section lg:py-16 sm:py-20 mt-10" id="whiye">
        {/* <div className="" id='stars'></div>
                <div className="" id='stars2'></div>
                <div className="" id='stars3'></div> */}
        <div className="container-section">
          <div className="grid grid-cols-12 sm:flex sm:flex-col-reverse md:mt-10 lg:flex-row lg:gap-20">
            {/* <!-- ... --> */}
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
             
             <div className="why-choose-card lg:mt-20"><Fade direction="down">
             <h6 className="text-white sm:text-center text-[30px] heading-h2 lg:text-start mb-3">
                  WHY CHOOSE US
                </h6></Fade>
    <Fade duration={1000} direction="left" delay={200}>
                <div class="mx-auto mt-16 max-w-2xl text-white sm:mt-10 md:mt-10 lg:mt-20 lg:max-w-4xl">
  <dl class="space-y-5 lg:space-y-5">
    <div class="relative why-container flex flex-col pl-4">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex md:flex sm:relative h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776623/MaxifyAssits/digital_solution_dsc45i_tl0ieg.webp" alt="" />
        </div>
        <span class="ml-4 sm:relative sm:right-0   ">Tailored Web Solutions</span>
      </dt>
      <dd class="ml-14  text-base text-600">We specialize in the development of websites to help solve your unique business problems.</dd>
    </div>
    <div class="relative why-container flex flex-col pl-4">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex md:flex sm:relative h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
        <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776731/MaxifyAssits/product_engineering.jpg_rbl3fi_fgm5fn.webp" alt="" />
        </div>
        <span class="ml-4 sm:relative sm:right-0">Innovative Product Applications</span>
      </dt>
      <dd class=" ml-14 text-basetext-600">From web app design development, we have the best product engineering services to enhance your customer experience, increasing driving sales.</dd>
    </div>
    <div class="relative why-container flex flex-col pl-4">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex sm:flex md:flex sm:relative h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
        <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776623/MaxifyAssits/digital_transformation_ueqryf_aelf1t.webp" alt="" />
        </div>
        <span class="ml-4 sm:relative sm:right-0">Seamless Digital Transformation</span>
      </dt>
      <dd class="ml-14  text-base text-600">With our customized digital marketing services, you will get everything you need to elevate your business standards with our endless marketing service endeavors.</dd>
    </div>
  </dl>
      
                </div></Fade>

             </div>
           </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
              <div className="element-container">
                {/* <h6 className="text-white sm:text-center lg:text-start mb-3">
                  WHY CHOOSE US
                </h6> */}
               <Fade direction="down"> <h2 className="heading-h2 text-white">
                  Get Significant Boost To Your Business With Our Seamless
                  Professionals
                </h2></Fade>
                <Fade direction="right"><div className="img-box mt-8">
                  <figure className="img-box-bg">
                    <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776796/MaxifyAssits/why-us-2_hm7mhc_yzkxgq.webp" alt="" />
                  </figure>
                  <figure className="image2">
                    <img className="rounded-lg" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776795/MaxifyAssits/why_choose_us_ulcrfw_qj0wti.webp" alt="" />
                  </figure>
                </div></Fade>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

const MissionData = [
  {
    img: Img1,
    p: "There are many simply free text available variations of passages of but the majority have in some.",
    li1: "Support on website building",
    li2: "Support on website building",
    li3: "Support on website building",
  },
  {
    img: Img1,
    p: "There are many simply free text available variations of passages of but the majority have in some.",
    li1: "Support on website building",
    li2: "Support on website building",
    li3: "Support on website building",
  },
];
