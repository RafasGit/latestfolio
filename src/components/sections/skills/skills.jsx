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
  
      <div id="About" className="containir"  
     >
      
      <div className="left" >
      <div data-aos="fade-right"
    data-aos-duration="1000"  className="text-zne">
          <h1 className="hrd">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="paras">
          <p>
           I am a software engineer and technical writer with three years of experience in the development of fullstack applications, primarily in TypeScript, Tanstack and NextJs. <br />
            <br />
             I focus on delivering projects efficiently without compromising on quality and that the first iteration should never be the last; there is always room for improvement.     
          </p>          
          <p>
          I was priviledged with the opportunity to  transition into tech by interning at the  <a  href="https://100devs.org/" target="_blank" >100Devs </a> ; a US based developer training agency. This opportunity enabled me to contribute and collaborate on both real-world Open Source and Proprietary MERN(Mongo, Express, React and Node) stack projects.
          </p>
          <p>
         I have since used the foundational knowledge gained at the 100Devs to kickstart my curiosity and build individual <a href="#Projects" >projects </a> while exploring various technologies and frameworks such as Next.js, ORMs such as Drizzle and stacks such as the T3 Stack(TypeScript, tRPC, NextAuth and Tailwind).  </p>
          <p>
          In my enthusiasm for the latest technologies and as a firm believer of teaching the things we know to understand what we don&apos;t, I have also written several <a href="#Projects" >articles </a> &nbsp;on first-principle topics mean&apos;t to help professionals transitioning into tech.   
         
          </p>

          </div>
        
        </div>

      </div>
    
      <div  data-aos="fade-left"
    data-aos-duration="1000" className="right">
  
 
  <div className="flex-containr">
  <div className="tagcloud" >
    <TagSphere 
    className="tagd"
     radius={window.innerWidth <= 600 ? window.innerWidth/3.75 : window.innerWidth/8.5}
     

      />
   
</div>
  </div>
 
   </div>
    </div>
     
     
 

    )
}


        export default Skills;