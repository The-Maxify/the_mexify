import React from 'react'
import MetaData from "../layout/MetaData";
const Privacypolicy = () => {
  return (
    <>
     <MetaData titles={`Maxify Privacy Policy`} />
      {/* serive banner */}

      <div className="element-banner lg:pt-[15%] lg:pb-[10%] sm:pt-[25%] sm:pb-[15%] service-banner">
      {/* <div className="element-banner pt-[15%] pb-[15%]  service-banner"> */}
        {/* <div className="element-banner sm:pt-[30%] sm:pb-[5%] lg:py-[200px] xl:py-[222px] service-banner"> */}
        <div className="container-section">
          <div className="element-banner-content">
           <h1 className="heading- sm:text-[24px] font-[700] sm:leading-[32px] lg:leading-[64px] lg:text-[40px] text-white">
              Maxify Privacy & Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 bg-white text-gray-800 flex flex-col gap-3">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Here at Maxify Web Solutions, welcome. We are dedicated to safeguarding your privacy and making sure that your personal data is managed securely and responsibly. This Privacy Policy describes the kinds of data we gather, the ways in which we utilize it, and the security measures that we implement.
      </p>

      <h2 className="text-xl font-semibold mb-2">Data That We Gather</h2>
      <h3 className="text-xl font-semibold mb-2">Private Details:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Contact Details: Name, phone number, email address, postal address.</li>
        <li>Payment Information: Billing address and credit card information.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Non-Personal Data:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Technical Details: Operating system, browser type, and IP address.</li>
        <li>Usage Data: Visited pages, amount of time on our site, and browsing habits.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">How Your Information Is Used by Us</h2>
      <h3 className="text-xl font-semibold mb-2">Private Details:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>To Provide Services: To satisfy your requests for our assistance with web development and associated services.</li>
        <li>Communication: To provide you with news, promotions, and updates about our services.</li>
        <li>Payment Processing: To safely handle financial transactions.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Non-Personal Data:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Site Improvement: Improving our website's functionality and usability.</li>
        <li>Analytics: To assess market trends and enhance our advertising campaigns.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">How Your Information Is Safe With Us</h2>
      <p className="mb-4">
        We employ a range of security protocols to ensure the protection of your private data. These precautions include frequent security audits, encrypted payment processing, and secure servers.
      </p>

      <h2 className="text-xl font-semibold mb-2">Disclosure of Your Data</h2>
      <p className="mb-4">
        Your personal information is never sold, traded, or otherwise transferred to unaffiliated third parties unless specifically mentioned below:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Service Providers: Reliable outside parties who help us run our website and offer you services.</li>
        <li>Legal Requirements: When we think disclosure is necessary to abide by the law, uphold our site's policies, or safeguard the rights, property, or safety of others or ourselves.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        Cookies are used on our site to improve your surfing experience. If you allow it, a website or its service provider may place little files called cookies on your computer's hard disk. These files help the website's or service provider's systems identify your browser and store and retrieve specific data.
      </p>

      <h2 className="text-xl font-semibold mb-2">Links to Third Parties</h2>
      <p className="mb-4">
        On occasion, we could provide or include third-party goods or services on our website, at our sole discretion. The privacy policies of these third-party websites are distinct and autonomous. As a result, we disclaim all duty and responsibility for the actions and content of any linked websites.
      </p>

      <h2 className="text-xl font-semibold mb-2">Your Assent</h2>
      <p className="mb-4">
        You agree to our website privacy policy by using our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">Modifications to Our Disclaimer</h2>
      <p className="mb-4">
        At any time, Maxify Web Solutions retains the right to edit or modify our privacy statement. Any modifications will be announced with an updated date on this page.
      </p>

      <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
      <p className="mb-4">
        You can get in touch with us using the details provided below if you have any queries about this privacy statement:
      </p>
      <p>Maxify Web Solutions</p>
      <p><b>Phone</b>: +91 8905054141 <br/> <b>Email</b>: support@maxifysolution.com</p>
    </div>
    </>
  )
}

export default Privacypolicy
