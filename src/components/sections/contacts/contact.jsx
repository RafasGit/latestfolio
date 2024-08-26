import { useEffect, useState } from 'react'
import React, { useRef } from "react";
import styled from "styled-components";
import AnimatedLetters from "../../AnimatedLetters";
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import './contact.scss' 

 const Container = styled.div`
  display: flex;
  justify-content: center;
  //gap: 12px;
  //length: 70%;
  width:100%;
  z-index: 1;
  align-items: center;
  //border:solid red 3px;
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
  max-width: 100%;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: left;
  max-width: 100%;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 80%;
 // max-width: 1500px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  //box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

// font-size: 56px;
// font-family:'Inter Tight', sans-serif;
// color: #fff;
// font-weight: 800;
// margin-top: 6rem;
// position: relative;
// margin-bottom: 20px;
// left: 30px;
// width: 140rem;
const ContactTitle = styled.div`
   font-size: 56px;
   font-family:'Inter Tight', sans-serif;
   font-weight: 800;
  // //margin-bottom: 1px;
   //border:solid red 3px;
  // //height: 10vh;
  color: ${({ theme }) => theme.text_primary};
     &:before {
    content: '<h1>';
    font-family: 'La Belle Aurore', cursive;
    color: #ffd700;
    font-size: 18px;
    position: relative;
    top: -51px;
    left: -1%;
    opacity: 0.6;
    line-height: 18px;
    margin-right: -22px;
    
  }

  &:after {
 content: '<h1>';
    font-family: 'La Belle Aurore', cursive;
    color: #ffd700;
    font-size: 18px;
    position: relative;
    top: 28px;
    left: -2%;
    opacity: 0.6;
    line-height: 18px;
  }


  // font-weight: 600;
  // color: ${({ theme }) => theme.text_primary};
   text-align: left;
 //font-size: 28px;
  margin-bottom: 6px;
  //font-weight: 600;
    @media (max-width: 768px) {
     width: 40rem;
     &:before {
     content: '<h1>';
     font-family: 'La Belle Aurore', cursive;
     color: #ffd700;
     font-size: 18px;
     position: relative;
     top: -51px;
     left: -8%;
     opacity: 0.6;
     line-height: 18px;
     margin-right: -22px;
}
      &:after {
  content: '<h1>';
     font-family: 'La Belle Aurore', cursive;
     color: #ffd700;
     font-size: 18px;
     position: relative;
     top: 28px;
     left: -2%;
     opacity: 0.6;
     line-height: 18px;
   }
 }
     @media (max-width: 360px) {
     width: 40rem;
     &:before {
     content: '<h1>';
     font-family: 'La Belle Aurore', cursive;
     color: #ffd700;
     font-size: 18px;
     position: relative;
     top: -51px;
     left: -8%;
     opacity: 0.6;
     line-height: 18px;
     margin-right: -44px;
}
      &:after {
  content: '<h1>';
     font-family: 'La Belle Aurore', cursive;
     color: #ffd700;
     font-size: 18px;
     position: relative;
     top: 28px;
     left: -2%;
     opacity: 0.6;
     line-height: 18px;
   }
 }
    
  }
  

  
`;



const ContactInputsWrapper = styled.div`
//border: solid red 3px;
  display: flex;
  gap: 12px;
  justify-content: space-between; // Optional: Adds space between the inputs
  //flex-wrap: wrap; // Ensures the inputs wrap onto the next line on small screens
  width: 100%;
  //max-width: 600px; // Optional: Sets a max width for the container
  //margin: 0 auto; // Centers the container if it overflows its parent
`;


const ContactInput = styled.input`
  flex: 1;
  width: 49%;
  background-color: rgba(17, 25, 40, 0.83);
  border: none;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  //border-radius: 12px;
  padding: 12px 16px;
  border:0;
  transition: border-bottom 0.3s ease-in-out; /* Transition for the border-left */
  border: 2px solid transparent; /* Initial transparent border */

   &:focus {
    border-bottom: 1.5px solid #8b55e9; /* Border color on focus */
  }
    
`;

const ContactInputd = styled.input`
  flex: 1;
 // width: 49%;
  background-color: rgba(17, 25, 40, 0.83);
  border: none;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  //border-radius: 12px;
  padding: 12px 16px;
  border:0;
  transition: border-bottom 0.3s ease-in-out; /* Transition for the border-left */
  border: 2px solid transparent; /* Initial transparent border */

   &:focus {
    border-bottom: 1.5px solid #8b55e9; /* Border color on focus */
  }
    
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: rgba(17, 25, 40, 0.83) ;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
   transition: border-bottom 0.3s ease-in-out; /* Transition for the border-left */
  border: 2px solid transparent; /* Initial transparent border */

   &:focus {
    border-bottom: 2px solid #8b55e9; /* Border color on focus */
  }
`;


const ContactButton = styled.button`
  width: 6rem;
  text-decoration: none;
  text-align: center;
  background: 0 0;
  border: 1px solid #ffd700;
  align-self: flex-end;
  border-radius: 4px;
  padding: 8px 10px;
  margin-top: 2px;
   margin-right: 10px;
   color: #ffd700;
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 600;
  z-index: 1;
`;

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    const position = [-1.2921
      ,36.7838 ]
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
       
        <div  id='Contact' data-aos="zoom-in-up"
        data-aos-duration="2000" >
        {/* <div id='Contact' className="text-zane">
        <div > */}
       <Container>
      
        <ContactForm ref={form} onSubmit={sendEmail} >
          <ContactTitle> 
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            /> 
            </ContactTitle>
          <Desc>
          I'm looking forward to creating meaningful relations and collaborating on projects addressing real world issues. 
          However, if you have any other requests or
          questions, don't hesitate to contact me using the form below. Let’s connect! 🌍
      
        </Desc>
         <ContactInputsWrapper>
         <ContactInput placeholder="Email" name="from_email" required/>
          <ContactInput placeholder="Name" name="from_name" />
         </ContactInputsWrapper>
         
          <ContactInputd placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit">SEND</ContactButton>
        </ContactForm>
       </Container>
      

           {/* <h1  className='head'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='parec'>
          <p className='parac'  >
          I’m looking forward to creating meaningful relations and collaborating on projects addressing real world issues. 
          However, if you have any other requests or
          questions, don't hesitate to contact me using the form below. Let’s connect! 🌍
          </p>
        
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
            <div class="form-row">
    <input placeholder="Name" type="text" name="name" required />
    <input placeholder="Email" type="email" name="email" required />
  </div>
  <div className="form-row">
    <input className='sub' placeholder="Subject" type="text" name="subject" required />
  </div>
  <textarea placeholder="Message" name="message" required></textarea>
  <button className='flot-button' type="submit">SEND</button>
          
            </form>
          </div> */}
        </div>
        
        // </div>
        // </div>
  
      

)
}
export default Contact;