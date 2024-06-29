import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Slider1 from "../../assets/slider1.jpg";
// import Vedio from "../../assets/videos.mp4";
// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  const homeVideo =
    "https://res.cloudinary.com/djkkjx9ry/video/upload/v1718953875/MaxifyAssits/videos_wyialq.mp4";
  const homeBanner =
    "https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776661/MaxifyAssits/home_page_main_banner_x1j1ga_apg4bz.webp";
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = homeVideo;
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
      // Set the video to show after 2 seconds of loading
      setTimeout(() => {
        setShowVideo(true);
      },);
    };
    // Clean up the video element
    return () => {
      videoElement.src = "";
    };
  }, [homeVideo]);

  return (
    <>
      <div className="home-slider-section">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="home-slider-container">
              <div className="home-slider-img1">
                {showVideo && isVideoLoaded ? (
                  <video autoPlay muted loop className="sm:max-w-[250%] md:max-w-[100%]">
                    <source
                      className="brightness-50"
                      src={homeVideo}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={homeBanner} alt="Banner" />
                )}
              </div>
              <div className="home-slider-content sm:mt-14">
                <h1 className="heading-h1"> We are Maxify</h1>
                <p className="para">
                  We provide cutting-edge digital services to elevate your
                  business.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
