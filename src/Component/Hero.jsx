import React from 'react'
import Button from './Button'
import './Hero.css'

const Hero = () => {
  return (
    <article className="general">
    <section className="modern">
    <h1>
         Modern online and offline<br/>
         payments for Africa
    </h1>
    <p>
         Paystack helps businesses in Africa get paid by anyone,<br/>
        anywhere in the world.
    </p>
    <div className="modern_Buttons">
    <Button name="Create free account"
                        style= {{
                         padding: "12px 28px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            background: "mediumseagreen",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer"}}/>
             <span className="contactSales">or Contact Sales</span>
      </div>
       <div className="hero_trusted">
          <p>
            Trusted by over 200,000 businesses
          </p>

          <div className="hero_trusted_logos">
            <img src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg" alt="Dominos"/>
            <img src="https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg" alt="MTN"/>
            <img src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg" alt="Bolt"/>
            <img src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg" alt="AXA"/>
          </div>
        </div>

</section>
  <div className="hero-right">
    
 </div>
     </article>
  )
}

export default Hero
