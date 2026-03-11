import React from 'react'
import "./Footer2.css";
import { contactEmail } from './dummyFooter2';
import { companyTagline } from './dummyFooter2';
import { offices } from './dummyFooter2';


const Footer2 = () => {
  return (
     <div className="footer_contacts">
      <div className="contact_header">
        <h2>Contact</h2>
        <p>{contactEmail}</p>
        </div>
        <div className='stripe'>
        <p>{companyTagline}</p>
        <h3>Stripe</h3>
      </div>

      <div className="offices_container">
        {offices.map((office, idx) => (
          <div className="office" key={idx}>
            <h4>{office.city}</h4>
            {office.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer2
