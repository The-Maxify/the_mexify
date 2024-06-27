import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import News1 from "../../assets/news-1.jpg";
import { NewsData } from "./NewsData";
import MetaData from "../../layout/MetaData";
const NewsEvent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <MetaData titles={`Maxify IndustriesNews Events `} />
      {/* banner */}
      <div className="element-banner pt-[20%] pb-[10%]  about-company-banner">
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="heading- sm:text-[24px] font-[700] sm:leading-[32px] lg:leading-[64px] lg:text-[40px]">
              We're a digital agency that believe in the power of great ideas
            </h1>
          </div>
        </div>
      </div>

      <div className="container-section mat-50 ">
        <div className="grid grid-cols-12 gap-6">
          {NewsData.map((item, i) => (
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12" key={i}>
              <div className="blogs-news-box">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="blog-content">
                  <div className="news-event-name">
                    <span>{item.s}</span>
                    <span>{item.s2}</span>
                  </div>
                  <h5>
                    <Link>{item.title}</Link>
                  </h5>
                  <p className="mt-4">{item.description}</p>
                  <p className="mt-3">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsEvent;
