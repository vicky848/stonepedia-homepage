import React from 'react'
import './index.css'

export const Testimonial = () => {
   
  const testimonials = [
      {
        id: 1,
        title: "Outstanding Service!",
        content:
          "I had an amazing experience with this company. Their attention to detail and commitment to quality exceeded my expectations. Highly recommended!",
        author: "Sophia Carter",
      },
      {
        id: 2,
        title: "Exceptional Support",
        content:
          "The team provided excellent support throughout the entire process. They were always available to answer my questions and went above and beyond to help.",
        author: "Liam Johnson",
      },
      {
        id: 3,
        title: "Unmatched Quality",
        content:
          "The quality of their work is simply unparalleled. Every detail was taken care of, and the final product was exactly what I needed.",
        author: "Isabella Martinez",
      },
      {
        id: 4,
        title: "Highly Professional",
        content:
          "Their professionalism and expertise really stood out. From start to finish, everything was handled with utmost care and precision.",
        author: "William Brown",
      },
    ];







  return (
    <div className='testimonial'>
      <h2 className='testimonial-heading'>What Our Clients Say</h2>
      <div className='testimonial-slider'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='testimonial-card'>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.content}</p>
            <p className='testimonial-author'>-{testimonial.author}</p>
          </div>
        ))}
      </div>
      </div>
       
       


    
  )
}

export default Testimonial