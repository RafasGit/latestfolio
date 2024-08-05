import React from "react";
import styled from "styled-components";
import { Bio } from "../../../data/constants";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import LogoTitle from "../../../assets/images/logo-s.png";
import AnimatedLetters from "../../AnimatedLetters";
//import Starfield from 'react-starfield';
import Starfield from "../../stars/stars"; 
import Typewriter from "typewriter-effect";
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faNode,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './Hero.scss'

  const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
//  border: solid red;
  height: 85vh;
  
  @media (max-width: 1260px) {
    
  height: 80vh;
  margin-bottom: 20px;
  }

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 760px) {
    padding: 120px 1px;
    height: 70vh;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
 // border : solid pink;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;



const HeroRightContainer = styled.div`
  width: 100%;
  height: 100%;
  order: 1;
  display: flex;
  justify-content: end;
 // border : solid red 10px;

  @media (max-width: 960px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
    //margin-top: 80px;

  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
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
  margin-left: 2.5%;
 
  @media (max-width: 1400px){
   margin-left: -14.5%;
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
     margin-left: -9%;
   // border: solid red;
  }

   @media (max-width: 468px) {
    text-align: center;
    margin-left: 2.4rem;
       }

   @media (max-width: 368px) {
    text-align: center;
    margin-left: -0.41rem;
    font-size: 25px;
    
  }
`;



const Span = styled.div`
  cursor: pointer;
  color: rgb(72, 61, 139);
  margin-left: 12%;
  margin-top: 3%;
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

  const nameArray = ['J', 'o', ' ', ' ',' ','h', 'u', 'a', ',']
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
   
       <HeroInnerContainer>
       <div  className="text-zone">
                <h1 className="intro">
                  <div className="bend">
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  </div>
            
            <br />
            <div className="bond">
              <div className="spread">
              <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

              </div>
              <div className="sprid">
              <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
              </div>
          
            </div>
        
            <br />
            <div className="band">

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </div>
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
                <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> 
          <Link to="/contact" className="flet-button">
            VIEW RESUME
          </Link> 
                </div>
   
            <HeroRightContainer> 
          
            <div className="stage-cube-cont">
          
        <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div> 
       
            <div className="cubespinner">
            
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#50C878" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
              {/* <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Rishav Chanda" />
                </Tilt>
              </motion.div> */}
            </HeroRightContainer>
          </HeroInnerContainer>
        {/* </motion.div>
       </HeroInnerContainer> */}
  </HeroContainer>
 
 </>
    )
}


export default Hero;