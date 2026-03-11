import React from "react";
import "./Power.css"
import { firstRow } from "./dummyPower";
import { secRow } from "./dummyPower";
import { thirdRow } from "./dummyPower";

const Power = () => {
  return (
    <div className="pow">
        <section className="power">
      <h1>
      Powering growth for amazing <br/> businesses
      </h1>
      <p>Paystack is a growth engine for a new generation of innovative,<br/> forward-looking organizations operating in Africa.</p>
      </section>
     <article className="imgs">
       {firstRow.map((item) => (
  <img key={item.id} src={item.image} alt="" />
))}
    {secRow.map((item) => (
  <img key={item.id} src={item.image} alt="" />
))}
    {thirdRow.map((item) => (
  <img key={item.id} src={item.image} alt="" />
))}
      </article>
    </div>
    

  )
}

export default Power