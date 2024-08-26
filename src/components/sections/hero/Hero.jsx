import React from "react";
import styled from "styled-components";
import { Bio } from "../../../data/constants";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import LogoTitle from "../../../assets/images/logo-s.png";
import AnimatedLetters from "../../AnimatedLetters";
import Typewriter from "typewriter-effect";
import {
    faGolang,
    faCss3,
    faGitAlt,
    
    faJsSquare,
    faNode,
    faReact,
    faJava,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './Hero.scss'
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

  const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
//  border: solid red;
  height: 60vh;
  
  @media (max-width: 1260px) {
    
  height: 80vh;
  margin-bottom: 10px;
  }

  @media  (max-width: 1280px) and (min-width:1025px) and (max-height:854px) 
    {
    height:100vh;
    margin-bottom: 20rem;
   }

  @media  (max-width: 1024px) and (min-width:1000px) and (max-height:600px) 
    {
    height:100vh;
   }



  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 760px) {
    padding: 140px 1px;
    height:100vh;
   // border: solid green 2px;
  }


  @media (max-width: 760px) and (max-height:300px){
    padding: 140px 1px;
    height:170vh;
   // border: solid green 2px;
  }
  
  @media (min-width: 667px) and (max-height: 550px) and (min-height: 343px) {
   
  //  border: green solid 2px;
    height: 205vh;
    margin-bottom: 0%:
   
}

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 10px;
 // color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  //border: solid red;
  width: 810px;
  margin-left: 1.5%;
 
  @media (max-width: 1400px){
   margin-left: 1.5%;
  }

   @media  (max-width: 1280px) and (min-width:1025px) and (max-height:800px) 
    {
   
    margin-left: 1rem;
   }


  @media (max-width: 1200px){
   margin-left: -1.5%;
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 760px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
     margin-left: 3%;
   // border: solid red;
  }

   @media (max-width: 468px) {
    text-align: center;
    margin-left: 6.5rem;
       }

   @media (max-width: 368px) {
    text-align: center;
    margin-left: 7.41rem;
    font-size: 25px;
    
  }
`;



const Span = styled.div`
  cursor: pointer;
  color: rgb(72, 61, 139);
  margin-left: 24px;
  margin-top: 2px;
  font-size: 50px;
  opacity: 0.4;
 // border: solid red;

 @media screen and (max-width: 1200px){
  //margin-left: 51px;
  margin-top: 30px;
  margin-left: 8px;
 
 }
 
 @media screen and (max-width: 760px){
 margin-left: -2rem;
  font-size: 30px;
 
 }

 @media (max-width: 398px) {
      margin-left: -4.5rem;
       font-size: 32px;
    //line-height: 36px;
  }

  @media (max-width: 368px) {
    font-size: 28px;
    line-height: 36px;
  }


`;






const Hero = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['','J', 'o',  
    <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name"/> ,'h', 'u', 'a', ',']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


    return (
        
 <>
 <div id="Home">
  {/* my name */}
 </div>
  <HeroContainer>
  <div class="  flex-container">
  <div className="box box-one">
  <div className="text-zone">
          <h1 align='left'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */} &nbsp; 
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <TextLoop>
          
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
          </TextLoop>
          <div className="link-container">
  <Link to="Contact" href='#Contact' className="flat-button">
    CONTACT ME
  </Link> 
  <a href={Bio.resume} className="flet-button" target="_blank"> 
    VIEW RESUME
  </a>
</div>
       
        </div>
  </div>
  <div class="box box-two">
 
          
          <div className="stage-cube-cont">
        
      <div id="stars"></div>
     <div id="stars2"></div>
     <div id="stars3"></div> 
     <div id="stars4"></div> 
     
          <div className="cubespinner">
          
          <div className="face1">
            <FontAwesomeIcon icon={faNode} color="#0FFF50	" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faGolang} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJava} color="blue" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
        </div>
          
          
  </div>
</div>
 
   
  </HeroContainer>
 
 </>
    )
}


export default Hero;
