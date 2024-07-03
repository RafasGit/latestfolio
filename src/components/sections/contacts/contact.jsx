import { useEffect, useState } from 'react'
import React, { useRef } from "react";
import styled from "styled-components";
import AnimatedLetters from "../../AnimatedLetters";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import "leaflet/dist/leaflet.css"
//import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
//import "leaflet-defaulticon-compatibility";
import { Bio } from '../../../data/constants';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import './contact.scss' 

 const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  length: 100vh;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;


const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    const position = [51.505, -0.09]
    const mapRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }
  
return(
       
        <div className="containor contact-page">
        <div className="text-zane">
        <div data-aos="zoom-in-up"
     data-aos-duration="2000">
          <h1 className='head'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='parec'>
          <p className='parac' >
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <p className='parac' >
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          </div>
        
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flot-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        </div>
        {/* <div className="info-map">
Joshua Ng'ang'a          <br />
           <a>
            <button>
            Kenya,
            </button>
           Kenya,
           </a>
          <br />
         
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div> */}
        <div className="map-wrap">
        <div data-aos="zoom-in-left"
     data-aos-duration="2000">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          <span>Let's connect!</span> <br />
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        </Popup>
      </Marker>
    </MapContainer>
  
       </div>

      </div>
      </div>

)
}
export default Contact;