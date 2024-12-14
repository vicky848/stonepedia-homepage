import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import './index.css'

export const Footer = () => {
  return (
    <div className='footer-container'>

    <div className='company-info'>
      <div>
      <h3>Company Name</h3>
        <p>Your Company Address</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@yourwebsite.com</p>
        <p>Website: www.yourwebsite.com</p>


      </div>

    </div>


        <div className='social-media-container'>
     
        <ul className='social-media-links'>
          <li><a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f facebook'>
          <FaFacebook /></i></a></li>
          <li><a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter twitter'>
          <FaTwitter /></i></a></li>
          <li><a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin linkedin'><FaLinkedin /></i></a></li>
          <li><a href='https://github.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-github github'>
          <FaGithub /></i></a></li>
          <li><a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-youtube you-tube'><IoLogoYoutube /></i></a></li>
        </ul>
       

        <p className='copy'>&copy; 2022 Your Website. All rights reserved.</p>



<p className='power'>Powered by <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a></p>       


        </div>
        <div className='legal-and-policy'>
           <div>
           <ul className='legal-and-policy-links'>
                <li><a className='footer-link' href='/'>Privacy Policy</a></li>
                <li><a className='footer-link'  href='/'>Terms of Service</a></li>
                <li><a  className='footer-link' href='/'>Cookie Policy</a></li>
                <li><a  className='footer-link' href='/'>Imprint</a></li>
                <li><a  className='footer-link' href='/'>Accessibility Statement</a></li>
                <li><a  className='footer-link' href='/'>Contact Us</a></li>
            </ul>
            

           </div>
        </div>

       
      
    </div>
  )
}

export default Footer   