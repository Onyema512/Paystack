import React from 'react'
import './Project.css'
import { bodyData } from './bodyProject'
import { secBodyData } from './bodyProject'
import { thirdBodyData } from './bodyProject'
import Box from './Box'

const Project = () => {
  return (
    <>
    <div>
       {bodyData.map((item) => (
        <Box key={item.id} item={item} />
        // <section className="feature" key={item.id}>

        //   <div className="feature_text">
        //     <h2>{item.title}</h2>
        //     <p>{item.description}</p>
        //    <div className='arrange'>
        //     <ul>
        //       {item.points1.map((point, index) => (
        //         <li key={index}>{point}</li>
        //       ))}
        //     </ul>
        //      <ul>
        //       {item.points2.map((point, index) => (
        //         <li key={index}>{point}</li>
        //       ))}
        //     </ul>
        //     </div>
        //     <div className="feature_sub">
        //         <h2>{item.sub_title}</h2>
        //         <p>{item.text}</p>
        //     </div>
        //     <div className='poll'>
        //         <span>{item.poll}</span>
        //     </div>
        //   </div>

        //   <div className="feature_img">
        //     <img src={item.image} alt="feature" />
        //   </div>

        // </section>
      ))}
      {
        secBodyData.map(item =>(
          <Box key={item.id} item={item} 
          className = 'row'
          />
        ))
      }
      {
         thirdBodyData.map(item =>(
          <Box key={item.id} item={item} 
          />
        ))
      }
    </div>
    </>
  )
}

export default Project
