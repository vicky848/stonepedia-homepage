import React from 'react'
import './index.css'

export const ContentSection = () => {
  return (
    <div className='content-container'>
        <div>
        <p className=' redefining-text'> redefining stone sourcing</p>
        <h1 className = "header">Why StonePedia ?</h1>
        </div>

        <div className='content-main-card'>
            <div className='card'>
                
                <hi className = "content-header">Rigorous Quality Control</hi>
                <p className='stone-pedia-text'>StonePedia's team of experts ensures that every stone we source is free from contamination, wear, and damage.</p>
            </div>
            <div className='card'>
                <h1 className='content-header'>Certified Suppliers & Compliance</h1>
                <p className='stone-pedia-text'>StonePedia's reputation is built on trustworthy suppliers and strict compliance with industry standards.</p>
            </div>
            <div className='card'>
                <h1 className='content-header'>Expert Guidance and Support</h1>
                <p className='stone-pedia-text'>Our friendly and knowledgeable staff are ready to help you choose the right stones for your projects.</p>
            </div>

        </div>

       <div className='content-main-card'>
       <div className='card'>
            <h1 className='content-header'>StonePedia's Commitment to Excellence</h1>
            <p className='stone-pedia-text'>At StonePedia, we strive to deliver high-quality stones that meet your specific needs and expectations.</p>
            <div className='button-container'>
                <button className='button'>Learn More</button>
            </div>
        </div>
        <div className='card'>
            <h1 className='content-header'>About StonePedia</h1>
            <p className='stone-pedia-text'>Founded in 2020, StonePedia is dedicated to providing the best stone sourcing experience to our customers.</p>
            <div className='button-container'>
            <button className='button'>Contact Us</button>
            </div>
        </div>
        <div className='card'>
            <h1 className='content-header'>Doorstep Delivery</h1>
            <p className='stone-pedia-text'>With our doorstep delivery service, you can get your stones delivered to your home or office quickly and easily.</p>

        </div>
       </div>



    </div>
  )
}

export default ContentSection