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

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  border: solid red;
  height: 100%;
  

  @media (max-width: 960px) {
    padding: 66px 16px;
    height:100vh;
  }

  @media (max-width: 760px) {
    padding: 100px 16px;
    height: 170vh;

  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;



const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

   @media (max-width: 1200px) {
    margin-top: 60px;
   }

  @media (max-width: 960px) {
    flex-direction: column;
    border:  1px solid pink;
  }
     
  }
`;



const SkillsContainer = styled.div`
width: 73%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 180px;
  border: 1px solid red;
  gap: 1%;
  margin-left: 12rem;
  //margin-left: -65%;
  justify-content: center;
  align-items:flex-start;

  @media (max-width: 960px) {
     max-width: 720px;
     width: 90%;
    padding: 10px 36px;
    border: solid 1px red;
     margin-left: 6%;
     margin-top:10px;
  // }

    @media (max-width: 640px) {
    max-width: 600px;
    padding: 10px 36px;
   border: solid 1px red;
    margin-left: -1%;
  }


    @media (max-width: 400px) {
      margin-left: -12%
}

   @media (max-width: 767px) { /* Adjusting for devices narrower than 768px */
    flex-direction: column; /* Stack items vertically */
  }

 .column {
    flex-basis: calc(50% - 10px); /* Each column takes up half the width minus some gap */
    margin: 5px; /* Adding some margin around each column for spacing */

    @media (min-width: 768px) {
      flex-basis: auto; /* Columns take up full width on larger screens */
    
    }
  }
`;

const Skill = styled.div`
  margin-right: -70px;
  left: 10%;
  width: 60%;
  height: 50%;
  max-width: 300px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid green;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  //rgba(255, 255, 255, 0.125)

  @media (max-width: 968px) {
    border: solid blue;
    width: 20rem;
   // gap: 10px;
    margin-right: 20px;
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
   // border: solid orange;
   // height: 25vh;
     margin-top: -4%
    //font-size: 28px;
    
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
 // border: solid 1px red;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
 // border: solid 1px black;
 @media (max-width: 960px) {
  font-size: 16px;
  font-weight: 600;
  max-width: 60rem;
  width: 17rem;;
  margin-right: -6px;
  padding: 10px 40px;
  border: solid pink;
  //gap: 2px;
}

@media (max-width: 760px) {
  font-size: 12px;
  font-weight: 600;
  max-width: 800px;
  width: 280px;
  margin-left: -70px;
  padding: 10px 30px;
  //border: solid green;
  overflow: scroll;
}
`;

const SkillItem = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 6px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  //gap: 0px;
  //border: solid 1px purple;


  @media (max-width: 968px) {
    font-size: 10px;
    font-weight: 400;
    padding: 8px 4px;
    gap: 3px;
    margin-right: -7px;

  }
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    padding: 6px 4px;
    border: solid red;
    margin-left: 1px;
    

  }
`;

const SkillImage = styled.img`
  width: 8px;
  height: 10px;
`;


const HeroLeftContainer = styled.div`
  width: 60%;
  order: 1;
  height: 95%;
  

  border : solid orange;
  
  @media (max-width: 1200px) {

  order: 2;
  flex-direction: column;
  margin-top: 78%;
  margin-left: -53%;
 // width: 80%;
  }

  @media (max-width: 968px) 
  {
  margin-top: -26rem;
  }
 
  @media (max-width: 893px) {
    order: 2;
    margin-bottom: 30px;
    margin-left: -24rem;
    display: flex;
    //gap: 6px;
   flex-direction: column;
    align-items: center;
    width: 73rem;
   // overflow: scroll;

  }
     @media (max-width: 760px) {
    // margin-bottom: 30px;
     order: 2;
 //  border: solid green;
     margin-left: -21rem;
     //overflow: show;
    // height: 80vh;
  }
`;

const HeroRightContainer = styled.div`
  width: 20%;
  height: 50%;
  order: 2;
  display: flex;
  justify-content: end;
  border : solid red 10px;

  @media (max-width: 1200px) {
  order: 1;
  flex-direction: column;
  align-items: center;
  justify-contents; center;
  margin-top: -37%;
  margin-left: 55rem;
  height: 40%;
  }

  @media (max-width: 1080px){
    margin-top: -40rem;
    margin-left: 20rem;
    border: solid green;
  }

  @media (max-width: 960px) {
    margin-left: 32rem;
    margin-top: -80rem;
  }

  @media (max-width: 893px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    //margin-bottom: 80px;
    margin-right: -50px;
    margin-top: 2rem;
    margin-left: 2rem;
   border: solid yellow;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
    order: 1;
    border: solid green;
  }
`;

const Skills = () => {
    // Animation settings for Text Cloud
  
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    // console.log(window.innerWidth);
    // console.log(width);
   
    // useEffect(() => {
    //   const container = '.tagcloud';
    //   //let radii;
  
    //   // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    //   return () => {
    //     const texts = [
    //       'HTML',
    //       'CSS',
    //       'SASS',
    //       'JavaScript',
    //       'React',
    //       'Vue',
    //       'Nuxt',
    //       'NodeJS',
    //       'Shopify',
    //       'Jquery',
    //       'ES6',
    //       'GIT',
    //       'GITHUB',
    //     ];
  
  
    //     // Decrasing 'radius' value for small screen devices  
    //     function radiusValue() {
    //       if (window.screen.width <= 1078) {
    //         radii = 190;
    //       } else {
    //         radii = 210;
    //       }
    //       return radii;
    //     }
  
    //     const options = {

    //       maxSpeed: 'fast',
    //       initSpeed: 'fast',
    //       default: 'fast',
    //       radius: screen.width > 500 ? 300 : 100,
    //       keep: true,
    //      };
  
    //     TagCloud(container, texts, options);
    //   }
    // }, []);
    return ( 
    //  <HeroContainer>
    //       <div className="skill__header" id="skill__heading">
            
    //    <h1 id="skills">
    //                <AnimatedLetters
    //                  letterClass={letterClass}
    //                  strArray={['S','k','i','l','l', 's ']}
    //                  idx={15}
    //                />
    //              </h1>
 
         
    //       </div>
    //       <div className="skill__inner-container">
    //     <HeroLeftContainer>
    //     <Wrapper>
    //         <SkillsContainer>
    //         {skills.map((skill, index) => (
    //         <Tilt>
    //           <Skill key={`skill-${index}`}>
    //             <SkillTitle>{skill.title}</SkillTitle>
    //             <SkillList>
    //               {skill.skills.map((item, index_x) => (
    //                 <SkillItem key={`skill-x-${index_x}`}>
    //                   <SkillImage src={item.image} />
    //                   {item.name}
    //                 </SkillItem>
    //               ))}
    //             </SkillList>
    //           </Skill>
    //         </Tilt>
    //       ))}
    //         </SkillsContainer>
    //       </Wrapper>
    //       </HeroLeftContainer>  
        
    //       <HeroRightContainer>
    //       <div className="skill__cloud">
        
    //           <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200">
            
    //           </div>
    //         </div>
    //       </HeroRightContainer>
         
    //       </div>
    //   </HeroContainer>
    <div class="containir">
    <div class="left">
      
    Left Content
    <SkillsContainer>
            {skills.map((skill, index) => (
            <Tilt>
             <div className="column">
             <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                 <SkillList>
                   {skill.skills.map((item, index_x) => (
                     <SkillItem key={`skill-x-${index_x}`}>
                       <SkillImage src={item.image} />
                       {item.name}
                     </SkillItem>
                   ))}
                 </SkillList>
               </Skill>
             </div>
             
             </Tilt>
             
           ))}
           
             </SkillsContainer>
    
    </div>
    <div class="right">
   
      Right Content
      <div className="containr flex-containr">
      <div className="tagcloud" >
        <TagSphere 
        className="tagd"
         radius={window.innerWidth <= 600 ? window.innerWidth/3.75 : window.innerWidth/7.5}
         

          />
        {/* <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"> */}
     
    {/* </div> */}
  </div>
      </div>
     
      </div>
</div>
    )
}


        export default Skills;