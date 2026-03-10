import React from 'react'

const Box = ({item, className}) => {
  return (
    <div>
       <section className={`feature ${className}`}>

          <div className="feature_text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.points1 && (
           <div className='arrange'>
           <ul>
               {item.points1.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            </div>
            )}
            <div className="feature_sub">
                <h2>{item.sub_title}</h2>
                <p>{item.text}</p>
            </div>
            <div className='poll'>
                <span>{item.poll}</span>
            </div>
          </div>

           <div className="feature_img">
        {item.image.endsWith(".mp4") ? (
          <video src={item.image} autoPlay loop muted />
        ) : (
          <img src={item.image} alt="feature" />
        )}
      </div>

        </section>
    </div>
  )
}

export default Box
