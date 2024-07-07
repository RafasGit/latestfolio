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


// const SkillsContainer = styled.div`
//   width: 100%;
  
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 38rem;
//   gap: 50px;
//   height: 86vh;
//   margin-left: 10%;
//   justify-content: center;
//   overflow: auto;
// `;
// const Skill = styled.div`
//   width: 80%;
//   height: 60%;
//   max-width: 500px;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 16px;

// @media (max-width: 1024px) {
//   border: solid red;
//     max-width: 400px;
//   //  padding: 10px 36px;
//   margin-top:-60rem
//    z-index: 2;
//   }


//   @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }

//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }
// `;

// const SkillTitle = styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   margin-bottom: 20px;
//   text-align: center;
//   color: ${({ theme }) => theme.text_secondary};
// `;

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;
// const SkillItem = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   border-radius: 10px;
//   padding: 8px 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `;

// const SkillImage = styled.img`
//   width: 24px;
//   height: 24px;
// `;


const SkillsContainer = styled.div`
  width: 100%;
  margin-left: 37px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 22rem;
  gap: 50px;
  justify-content: center;
`;
const Skill = styled.div`
  width: 70%;
  max-width: 500px;
  //background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.46);
  box-shadow: rgba(23, 92, 230, 0.35) 0px 4px 24px;
  border-radius: 16px;
  padding: 0px 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 10px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;


const Skills = () => {
    // Animation settings for Text Cloud
  
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])  
     return (
    //    <div>
    //      {/* <div data-aos="fade-up"
    //   data-aos-duration="2000" className=" left text-zne">
    //       <h1 className="hrd">
    //         <AnimatedLetters
    //           letterClass={letterClass}
    //           strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
    //           idx={15}
    //         />
    //       </h1>
    //       <div className="paras">
    //       <p>
    //         I'm a very ambitious front-end developer looking for a role in an
    //         established IT company with the opportunity to work with the latest
    //         technologies on challenging and diverse projects.
    //       </p>
    //       <p align="LEFT">
    //         I'm quiet confident, naturally curious, and perpetually working on
    //         improving my chops one design problem at a time.
    //       </p>
    //       <p>
    //         If I need to define myself in one sentence that would be a family
    //         person, father of a beautiful daughter, a sports fanatic,
    //         photography enthusiast, and tech-obsessed!!!
    //       </p>
    //       </div>
        
    //     </div> */}

    //       <div className="containir"
    //    > 
    //        <div data-aos="fade-up"
    //   data-aos-duration="2000" className=" left text-zne">
    //       <h1 className="hrd">
    //         <AnimatedLetters
    //           letterClass={letterClass}
    //           strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
    //           idx={15}
    //         />
    //       </h1>
    //       <div className="paras">
    //       <p>
    //         I'm a very ambitious front-end developer looking for a role in an
    //         established IT company with the opportunity to work with the latest
    //         technologies on challenging and diverse projects.
    //       </p>
    //       <p align="LEFT">
    //         I'm quiet confident, naturally curious, and perpetually working on
    //         improving my chops one design problem at a time.
    //       </p>
    //       <p>
    //         If I need to define myself in one sentence that would be a family
    //         person, father of a beautiful daughter, a sports fanatic,
    //         photography enthusiast, and tech-obsessed!!!
    //       </p>
    //       </div>
        
    //     </div>
    
    // {/* <div className="left" >
    // Left Content
    // <SkillsContainer>
    //      <div className="skills-container">
    //      {skills.map((skill, index) => (
    //         <Tilt>
           
    //          <Skill key={`skill-${index}`}>
    //             <SkillTitle>{skill.title}</SkillTitle>
    //              <SkillList>
    //                {skill.skills.map((item, index_x) => (
    //                  <SkillItem key={`skill-x-${index_x}`}>
    //                    <SkillImage src={item.image} />
    //                    {item.name}
    //                  </SkillItem>
    //                ))}
    //              </SkillList>
    //            </Skill>
             
    //          </Tilt>
             
    //        ))}
    //      </div>
         
           
    //          </SkillsContainer>
    
    // </div> */}
    
    // <div class="right">
  
    //   Right Content
    //   <div className="containr flex-containr">
    //   <div className="tagcloud" >
    //     <TagSphere 
    //     className="tagd"
    //      radius={window.innerWidth <= 600 ? window.innerWidth/3.75 : window.innerWidth/7.5}
         

    //       />
    //     {/* <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"> */}
     
    // {/* </div> */}
    // </div>
    //   </div>
     
    // //   </div>
    //   </div>
    //    </div>
    <div data-aos="fade-up"
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
  
  Right Content
  <div className="flex-containr">
  <div className="tagcloud" >
    <TagSphere 
    className="tagd"
     radius={window.innerWidth <= 600 ? window.innerWidth/3.75 : window.innerWidth/8.5}
     

      />
    {/* <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"> */}
 
{/* </div> */}
</div>
  </div>
 
//   </div>
    </div>
     
     
 

    )
}


        export default Skills;