import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Contact.css'
import Leaflet from '../LeafLet/Leaflet'

const Contact = () => {
  return (
    <div className="contact">
      
      <div className="contact-head text-center text-6xl text-gray-400">
        <h1>Contact Address</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mt-10 mx-auto">
          <h5 className='text-2xl '>
            <FontAwesomeIcon className="" icon={faLocationDot} />
            <span style={{marginLeft:'10px'}}>Patiya,Chittagong</span>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faEnvelope} />
            <span style={{marginLeft:'10px'}}>Official: spwarehouse@gmail.com</span>   
            <a href="#"></a>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faPhone} />
            <span style={{marginLeft:'10px'}}>phone :
            01300000000,01700000000</span>    
          </h5>
        </div>
        <div>
        
        {/* <Leaflet style={{ marginLeft: "20%" }}></Leaflet> */}
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
