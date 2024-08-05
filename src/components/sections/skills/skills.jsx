import React from "react";
import './skills.scss';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { skills } from "../../../data/constants";
import { Tilt } from "react-tilt";
//import AnimatedLetters from "../../AnimatedLetters";
//import TagCloud from 'TagCloud';
 import TagSphere from "../../tag-sphere/src";
import AnimatedLetters from "../../AnimatedLetters";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Skills = () => {
   
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000) 
    }, [])  
     return (
  
      <div id="About" data-aos="fade-up"
    data-aos-duration="1000" className="containir"  
     >
      
      <div className="left">
      <div  className="text-zne">
          <h1 className="hrd">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="paras">
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          </div>
        
        </div>

      </div>
    
      <div   className="right">
  
 
  <div className="flex-containr">
  <div className="tagcloud" >
    <TagSphere 
    className="tagd"
     radius={window.innerWidth <= 600 ? window.innerWidth/3.75 : window.innerWidth/8.5}
     

      />
   
</div>
  </div>
 
//   </div>
    </div>
     
     
 

    )
}


        export default Skills;