import React from 'react'
import './Header.css'
import { newData } from './dummyHeader'
import { secondData } from './dummyHeader'
import Button from './Button'

const Header = () => {
  return (
    
    <header className='my_Header'>
        <article className='header_Wrapper'>
            <div className='logo_Menu'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/1f/Paystack.png'
                alt="paystack logo"
                />
                <nav className='menu'>
                    <ul>
                        {newData.map((item) => (
                        <li key={item.id}>{item.name}
                         </li>
                    ))}
                    </ul>
                </nav>
                </div>
                <section className='right_Menu'>
                     <ul>
                        {secondData.map((item) => (
                        <li key={item.id}>{item.name}
                         </li>
                    ))}
                    </ul>
                    <aside className='btn'>
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
                    </aside>
                    </section>
                </article>
 
    </header>
  )
}

export default Header

