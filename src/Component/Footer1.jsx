import React from 'react'
import "./Footer1.css";
import { whyPaystack } from './dummyFooter1';
import { pricing } from './dummyFooter1';
import { customers } from './dummyFooter1';
import { learn } from './dummyFooter1';
import { developers } from './dummyFooter1';
import { support } from './dummyFooter1';
import { about } from './dummyFooter1';

const Footer1 = () => {
  return (
  <footer className="footer">
      <div className="footer_container">

        <div className="footer_section">
          <h3>Why Paystack</h3>
          {whyPaystack.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="footer_section">
          <h3>Pricing</h3>
          {pricing.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="footer_section">
          <h3>Customers</h3>
          {customers.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="footer_section">
          <h3>Learn</h3>
          {learn.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="footer_section">
          <h3>Developers</h3>
          {developers.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="footer_section">
          <h3>Support</h3>
          {support.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="footer_section">
          <h3>About</h3>
          {about.map((item, i) => <p key={i}>{item}</p>)}
        </div>
      </div>
    </footer>
  )
}

export default Footer1
