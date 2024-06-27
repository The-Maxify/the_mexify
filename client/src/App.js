import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './layout/Navbar';
import HomePage from './component/home/HomePage';
import "./index.css"
import Footer from './layout/Footer';
import "./responsive.css"
import { ServiceData } from './component/services/ServiceData';
import AboutCompany from './component/about/AboutCompany';
import NewsEvent from './component/about/NewsEvent';
import LeadershipTeam from './component/about/LeadershipTeam';
import ServicesDetails from './component/services/ServicesDetails';
import Service from './component/services/Service';
import Industries from './component/industries/Industries';
import IndustriesDetails from './component/industries/IndustriesDetails';
import { IndustriesData } from './component/industries/IndustriesData';
import SuccessDetails from './component/successstories/SuccessDetails';
import { SuccessData } from './component/successstories/SuccessData';
import Contact from './component/contact/Contact';
import SuccessStoriesDetails from './component/successstories/SuccessStoriesDetails';
import Career from './component/career/Career';
import WhatsAppButton from './component/WhatsAppButton';
import ThankYouPage from './component/Thankyou';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services/' element={<Service />} />


        {ServiceData.map((item, i) => (
          <Fragment key={i}>
            <Route path={item.url} element={<ServicesDetails
              img={item.img}
              img2={item.img2}
              name={item.name}
              title={item.title}
              title2={item.title2}
              text={item.text}
              description={item.description}
              descriptionMobile={item.descriptionMobile}
              description2={item.description2}
              technologyTitle={item.technologyTitle}
              technologydescription={item.technologydescription}
              technologyData={item.technologyData}
            />} />
          </Fragment>
        ))}

        <Route path='/industries/' element={<Industries />} />
        {IndustriesData.map((item, i) => (
          <Fragment key={i}>
            <Route path={item.url} element={<IndustriesDetails
              name={item.name}
              img={item.img}
              img2={item.img2}
              title={item.title}
              title2={item.title2}
              text={item.text}
              description1={item.description1}
              descriptionMobile={item.descriptionMobile}
              description2={item.description2}
              IndustriesSubData={item.industriesSubData}

            />} />
          </Fragment>
        ))}


        <Route path='/success/' element={<SuccessStoriesDetails />} />
        {SuccessData.map((item, i) => (
          <Fragment key={i}>
            <Route path={item.url} element={<SuccessDetails
              img={item.img}
              img2={item.img2}
              img3={item.img3}
              img22={item.img22}
              logo1={item.logo1}
              logo2={item.logo2}
              logo3={item.logo3}
              logo4={item.logo4}
              logo5={item.logo5}
              name={item.name}
              title={item.title}
              title2={item.title2}
              title3={item.title3}
              weburl={item.weburl}
              type={item.type}
              text={item.text}
              description={item.description}
              description2={item.description2}
              technologyTitle={item.technologyTitle}
              technologydescription={item.technologydescription}
              technologyData={item.technologyData}
              IndustriesSubData={item.industriesSubData}
              challenge={item.challenge}
              challenge1={item.challenge1}
              challenge2={item.challenge2}
              challenge3={item.challenge3}
              challenge4={item.challenge4}
              goal={item.goal}
              highlight1={item.highlight1}
              highlight2={item.highlight2}
              highlight3={item.highlight3}
            />} />
          </Fragment>
        ))}



        <Route path='/about-company/' element={<AboutCompany />} />
        <Route path='/news-event/' element={<NewsEvent />} />
        <Route path='/leadership-team/' element={<LeadershipTeam />} />
        <Route path='/contact-us/' element={<Contact />} />
        <Route path='/career/' element={<Career />} />
      </Routes>
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;
