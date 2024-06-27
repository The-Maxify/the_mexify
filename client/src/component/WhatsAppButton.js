import React from 'react';
import ReactDOM from 'react-dom';
import { FaWhatsapp } from 'react-icons/fa';

 const WhatsAppButton = () => (
  <div className="contact fixed bottom-[5%] right-5 rounded-full z-50">
    <a
      href="https://wa.me/+918905054141"
      target="_blank"
      className="flex items-center gap-2 bg-green-500 py-4 px-4 text-white text-xl rounded-full "
    >
      <span className='text-4xl'>
        <FaWhatsapp />
      </span>
      {/* <span>How can I help you?</span> */}
    </a>
  </div>
);


export default WhatsAppButton


