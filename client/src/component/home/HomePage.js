import React, { useEffect } from 'react'
import Slider from './Slider'
import "./home.css"
import Welcome from './Welcome'
import WhyChooseUs from './WhyChooseUs'
import BlogsNews from './BlogsNews'
import HomeService from './HomeService'
import OurSuccessStories from './OurSuccessStories'
import WhatsAppButton from '../WhatsAppButton'
const HomePage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    return (
        <>
            <Slider />
            <Welcome />
            <WhyChooseUs />
            <OurSuccessStories />
            <HomeService />
            <BlogsNews />
           
        </>
    )
}

export default HomePage
