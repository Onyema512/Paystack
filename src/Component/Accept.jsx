import React from 'react'
import './Accept.css'
import Button from './Button'

const Accept = () => {
  return (
    <div className='every'>
       <section className="pay">
        <p>Try Paystack Now</p>
        <h1>Start accepting payments in <br/>just 30 minutes</h1>
        </section>
        <aside className='free'>
        <Button name="Create free account"
                        style= {{
                         padding: "12px 28px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            background: "green",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer"}}/>
            </aside>
    </div>
  )
}

export default Accept
