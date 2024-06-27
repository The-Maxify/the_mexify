import React from "react";
import { Link } from "react-router-dom";
import thumb from "../assets/vecteezy_thumb-up-like-icon-emoji-sticker_27386542.png"
import { RiCloseCircleFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const ThankYouPage = ({showPopup, setShowPopup}) => {
  return (
    <div className="">
    <div className=" bg-white border pb-6">
      <div className="flex justify-end heading-1">
      <span className="text-2xl cursor-pointer pr-5 pt-5" onClick={()=>setShowPopup(!showPopup)}><RiCloseCircleFill /></span>
      </div>
      <div className="content bg-white">
        <div className="wrapper-1  sm:w-[90%] sm:mx-auto sm:h-auto">
       <div className="flex justify-center ">
        <img className="w-14 h-14 bg-white p-1 " src={thumb} alt="thumb" />
       </div>
          <div className="wrapper-2 ">
            <h1 className="heading-1 lg:text-[4rem] sm:text-[2rem]">Thank you !</h1>
            <p className="lg:text-base sm:text-sm">Thanks for showing your valuable interest in our services...</p>
            <p className="lg:text-base sm:text-sm">you should receive a confirmation email soon <span className="heart">❤❤</span>✔</p>
            <Link to="/">
              <button className="go-home" onClick={()=>setShowPopup(!showPopup)}>go home</button>
            </Link>
            <div className="social-icon">
              <a href=""><RiFacebookBoxFill className="facebook" /></a>
              <a href=""><FaInstagramSquare className="facebook"/></a>
              <a href=""><FaSquareXTwitter className="facebook"/></a>
            </div>
          </div>
          {/* <div className="footer-like">
            <p>
              Email not received?
              <Link to="/">Click here to send again</Link>
            </p>
          </div> */}
        </div>
      </div>
      {/* <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
        rel="stylesheet"
      /> */}
    </div>
    </div>
  );
};

export default ThankYouPage;
