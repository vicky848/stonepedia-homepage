import React from 'react';
import './index.css';
import ContentSection from '../ContentSection';
import FeatureProduct from '../FeaturedProducts';
import Testimonial from '../Testimonials';

 

const HeroSection = () => {
  return (
    <>
    <div className='hero-background-section-container'>
        <video autoPlay muted loop playsInline className='background-video'>
            <source src='https://videos.pexels.com/video-files/6328475/6328475-uhd_1440_2732_25fps.mp4' type='video/mp4' />
            Your browser does not support the video tag.


        </video>
        <div className= 'overlay'>
            <h1>Welcome to Stonepedia</h1>
            <p>Explore the finest stones curated for you.</p>
            <button>Explore More</button>
        </div>
       

    </div>
     <ContentSection/>
     <FeatureProduct/>
     <Testimonial/>
     </>
  )
}
export default HeroSection
