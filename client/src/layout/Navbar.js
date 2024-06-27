import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { NaveData } from "./NavData";
import "./navbar.css";
import {  Bounce } from "react-awesome-reveal";
const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // const [open, setOpen] = useState(false);
  // const handleClickOpen = (i) => {
  //   if (open === i) {
  //     return setOpen(true);
  //   }
  //   setOpen(i);
  // };
  // console.log("object", auth)
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // sub menu
  const [subActive, setSubActive] = useState(null);
  const handleSubActive = (i) => {
    if (subActive === i) {
      return setSubActive(null);
    }
    setSubActive(i);
    console.log("object", i);
  };

  //close submenu
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  //********** */ mobile menu **********
  const handleScrollMobile = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollMobile);
  });

  let xm = ["navbar-mobile"];
  if (scrolled) {
    xm.push("scrolled");
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  return (
    <>
    
      {/* */}
      <header className={x.join(" ")}>
        <div className={` lg:hover:bg-[#3d3b40] ${click? "sm:bg-[#3d3b40]":""}  navbar-main-box`}>
          <Bounce duration={1000} >
          <div className="logo" onClick={() => navigate("/")}>
            <img loading="lazy" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1718776690/MaxifyAssits/logo_zxu5hn_qgjini.webp" alt="" />
          </div>
           </Bounce>
          <nav className="navigation">
            <ul className="lg:flex hidden font-[500] text-[1rem] items-center gap-8 leading-5 navmanu">
              {NaveData.map((item, i) => (
                <li
                  className={item.submenu ? "nav-item small-nav" : "nav-item"}
                  key={i}
                  onClick={() => handleSubActive(i)}
                >
                  <Link to={item.url}>
                    {item.name}
                    {item.submenu && (
                      <span>
                        <IoIosArrowDown />
                      </span>
                    )}
                    {item.subservicemenu && (
                      <span>
                        <IoIosArrowDown />
                      </span>
                    )}
                  </Link>
                  {item.subservicemenu && (
                    <>
                      <ul
                        id={isHovered ? "show-drop" : "not-show-drop"}
                        className={
                          subActive === i
                            ? "dropdowns img-dropdowns active-submenu"
                            : "dropdowns img-dropdowns"
                        }
                      >
                        <div
                          className={
                            i === 1
                              ? "xl:ml-[15%] lg:ml-[5%] drop-menu"
                              : "ml-[10%] xl:ml-[20%] drop-menu"
                          }
                        >
                          {item.insideName.map((data, i) => (
                            <>
                              {data.dMenu && (
                                <li className="first-box">
                                  <h3>{data?.dText?.dName}</h3>
                                  <p>{data?.dText?.text}</p>
                                  <button
                                    onClick={() => {
                                      navigate(item.url);
                                      handleMouseLeave();
                                    }}
                                  >
                                    {data?.dText?.b}
                                  </button>
                                </li>
                              )}
                              <li
                                key={i}
                                className={data.link ? "d-block" : "d-none"}
                                onClick={() => {
                                  toggle(i);
                                  navigate(data.link);
                                  handleMouseLeave();
                                }}
                              >
                                <img
                                  className="nav-images"
                                  src={data.img}
                                  alt=""
                                />
                                <span className="submenu-names">
                                  {data.names}
                                </span>
                              </li>
                            </>
                          ))}
                        </div>
                      </ul>
                    </>
                  )}
                  {item.submenu && (
                    <>
                      {" "}
                      <ul
                        id={isHovered ? "show-drop" : "not-show-drop"}
                        className={
                          subActive === i
                            ? "dropdowns active-submenu"
                            : "dropdowns"
                        }
                      >
                        {item.insideName.map((data, i) => (
                          <li key={i} onClick={() => toggle(i)}>
                            <Link
                              to={data.link}
                              className={selected === i ? "active" : ""}
                            >
                              {data.names}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
              <button
                className="nav-btn1 ms-5"
                onClick={() => navigate("contact-us")}
              >
                Contact us
              </button>
            </ul>
            <ul
              className={`
              lg:hidden bg-[#3d3b40] gap- fixed w-full top-0 overflow-y-auto bottom-0 py-10 px-10 mt-[60px]
                    duration-500 ${click ? "right-0 z-50 " : "right-[-100%]"}`}
            >
              {NaveData.map((item, i) => (
                <li
                  className={item.submenu ? "nav-item small-nav" : "nav-item"}
                  key={i}
                  onClick={() => handleSubActive(i)}
                >
                  <Link to={item.url}>
                    {item.name}
                    {item.submenu && (
                      <span>
                        <IoIosArrowDown />
                      </span>
                    )}
                    {item.subservicemenu && (
                      <span>
                        <IoIosArrowDown />
                      </span>
                    )}
                  </Link>
                  {item.subservicemenu && (
                    <>
                      <ul
                        id={isHovered ? "show-drop" : "not-show-drop"}
                        className={
                          subActive === i
                            ? "dropdowns img-dropdowns active-submenu"
                            : "dropdowns img-dropdowns"
                        }
                      >
                        <div
                          className={
                            i === 1
                              ? "xl:ml-[15%] lg:ml-[5%] drop-menu"
                              : "ml-[10%] xl:ml-[20%] drop-menu"
                          }
                        >
                          {item.insideName.map((data, i) => (
                            <>
                              {data.dMenu && (
                                <li className="first-box">
                                  <h3>{data?.dText?.dName}</h3>
                                  <p>{data?.dText?.text}</p>
                                  <button
                                    onClick={() => {
                                      navigate(item.url);
                                      handleMouseLeave();
                                      
                                    }}
                                  >
                                    {data?.dText?.b}
                                  </button>
                                </li>
                              )}
                              <li
                                key={i}
                                className={data.link ? "d-block" : "d-none"}
                                onClick={() => {
                                  toggle(i);
                                  navigate(data.link);
                                  handleMouseLeave();
                                  handleClick();
                                }}
                              >
                                <img
                                  className="nav-images"
                                  src={data.img}
                                  alt=""
                                />
                                <span className="submenu-names">
                                  {data.names}
                                </span>
                              </li>
                            </>
                          ))}
                        </div>
                      </ul>
                    </>
                  )}
                  {item.submenu && (
                    <>
                      {" "}
                      <ul
                        id={isHovered ? "show-drop" : "not-show-drop"}
                        className={
                          subActive === i
                            ? "dropdowns active-submenu"
                            : "dropdowns"
                        }
                      >
                        {item.insideName.map((data, i) => (
                          <li key={i} onClick={() => toggle(i)}>
                            <Link
                              to={data.link}
                              className={selected === i ? "active" : ""}
                            >
                              {data.names}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
              <button
                className="nav-btn1 sm:ms-0 md:ms-5"
                onClick={() => {
                  navigate("contact-us");
                  handleClick();
                }}
              >
                Contact us
              </button>
            </ul>
            <span className="bar-section" onClick={handleClick}>
              {click ? <RxCross1 className="cross-iconss" /> : <FaBars />}
            </span>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
